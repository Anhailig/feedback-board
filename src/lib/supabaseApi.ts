import supabase from '@/lib/supabase';
import type { FeedbackFormValues } from '@/types/schema.ts';

export const postFeedback = async (feedback: FeedbackFormValues) => {
  const { error } = await supabase
    .from('feedback')
    .insert([{ ...feedback, created_at: new Date().toISOString() }]);

  if (error) throw error;
};
