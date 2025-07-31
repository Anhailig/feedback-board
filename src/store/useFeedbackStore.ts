import { create } from 'zustand';
import type { FeedbackItem, FeedbackCategory } from '@/types/feedback';
import { nanoid } from 'nanoid';

interface FeedbackStore {
  feedbacks: FeedbackItem[];
  selectedCategory: FeedbackCategory | 'All';
  addFeedback: (title: string, description: string, category: FeedbackItem['category']) => void;
  setCategory: (category: FeedbackStore['selectedCategory']) => void;
}

export const useFeedbackStore = create<FeedbackStore>((set) => ({
  feedbacks: [],
  selectedCategory: 'All',
  addFeedback: (title, description, category) => {
    const newItem: FeedbackItem = {
      id: nanoid(),
      title,
      description,
      category,
      created_at: Date.now(),
    };
    set((state) => ({
      feedbacks: [newItem, ...state.feedbacks],
    }));
  },
  setCategory: (category) => set({ selectedCategory: category }),
}));
