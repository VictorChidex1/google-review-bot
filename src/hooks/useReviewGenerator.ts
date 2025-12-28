import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import type { ReviewResponse } from "../types";

export function useReviewGenerator() {
  const [reviewText, setReviewText] = useState("");
  const [businessType, setBusinessType] = useState("Restaurant");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateReply = async () => {
    if (!reviewText) return;

    setLoading(true);
    setError("");
    setGeneratedReply("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewText, businessType }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to generate reply");
      }

      const data: ReviewResponse = await response.json();
      setGeneratedReply(data.reply);

      // Save to Firestore
      try {
        await addDoc(collection(db, "history"), {
          userId: auth.currentUser?.uid,
          originalReview: reviewText,
          businessType,
          generatedReply: data.reply,
          createdAt: new Date(),
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    reviewText,
    setReviewText,
    businessType,
    setBusinessType,
    generatedReply,
    loading,
    error,
    generateReply,
  };
}
