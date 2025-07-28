import { useEffect } from 'react';
import supabase from '@/lib/supabase';
import { useAuthStore } from '@/store/useAuthStore';

export const useAuth = () => {
  const { setUser } = useAuthStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);
};
