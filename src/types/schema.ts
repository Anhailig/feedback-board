import { z } from 'zod';

export const feedbackSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(15, 'Title can\'t be longer than 15 characters'),
  description: z.string().min(5, 'Description must be at least 5 characters'),
  category: z.enum(['Bug', 'Feature', 'Other'], 'Please choose a category'),
});

export type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "Password is required"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registrationSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
