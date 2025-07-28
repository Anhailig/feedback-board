import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore.ts';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};