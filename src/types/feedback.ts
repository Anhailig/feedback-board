export type FeedbackCategory = 'Bug' | 'Feature' | 'Other';

export interface FeedbackItem {
  id: string;
  title: string;
  description: string;
  category: FeedbackCategory;
  createdAt: number;
}