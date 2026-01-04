import { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import type { ReviewResponse } from "../types";

export function useReviewGenerator() {
  const [reviewText, setReviewText] = useState("");
  const [businessType, setBusinessType] = useState("Restaurant");
  const [tone, setTone] = useState("Professional");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isGeneratingRef = useRef(false);

  const generateReply = async () => {
    if (!reviewText || isGeneratingRef.current) return;

    isGeneratingRef.current = true;
    setLoading(true);
    setError("");
    setGeneratedReply("");

    try {
      // 1. Get the ID Token (The "ID Card")
      const token = auth.currentUser
        ? await auth.currentUser.getIdToken()
        : null;

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 2. Show the ID Card to the Bouncer
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          reviewText,
          businessType,
          tone,
          // We still send userId for legacy/fallback, but backend will prefer token
          userId: auth.currentUser?.uid,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to generate reply");
      }

      const data: ReviewResponse = await response.json();
      setGeneratedReply(data.reply);
      setReviewText(""); // ✅ Clear input after success

      // Save to Firestore
      try {
        await addDoc(collection(db, "history"), {
          userId: auth.currentUser?.uid,
          originalReview: reviewText, // Use the captured value, not state
          businessType,
          tone,
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
      isGeneratingRef.current = false;
    }
  };

  return {
    reviewText,
    setReviewText,
    businessType,
    setBusinessType,
    tone,
    setTone,
    generatedReply,
    loading,
    error,
    generateReply,
  };
}
