import { z } from 'zod';

export const feedbackSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(15, 'Title can\'t be longer than 15 characters'),
  description: z.string().min(5, 'Description must be at least 5 characters'),
  category: z.enum(['Bug', 'Feature', 'Other'], 'Please choose a category'),
});

export type FeedbackFormValues = z.infer<typeof feedbackSchema>;
