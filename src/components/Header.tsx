import { Button } from '@/components/ui/button';
import supabase from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import {useAuthStore} from "@/store/useAuthStore.ts";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('login');
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full min-h-14 bg-white flex justify-center p-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="w-full max-w-xl flex justify-between items-center">
        <h1 className="text-xl font-bold text-center">Feedback Board</h1>
        {user && (
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold">{user?.email}</h2>
            <Button onClick={logout}>Logout</Button>
          </div>
        )}
      </div>
    </div>
  );
}