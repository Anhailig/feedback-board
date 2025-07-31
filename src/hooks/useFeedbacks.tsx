import {useCallback, useEffect, useState} from 'react';
import supabase from '@/lib/supabase';
import type { FeedbackItem } from '@/types/feedback';

export const useFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setFeedbacks(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  return { feedbacks, loading, refetch: fetchFeedbacks };
};