export interface Review {
  reviewText: string;
  businessType: string;
}

export interface ReviewResponse {
  reply: string;
}

export interface HistoryItem {
  id?: string;
  userId?: string;
  originalReview: string;
  businessType: string;
  generatedReply: string;
  createdAt: Date;
}
