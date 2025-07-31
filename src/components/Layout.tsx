import { Outlet } from 'react-router-dom';
import Header from "@/components/Header.tsx";
import {Toaster} from "sonner";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-lg min-h-screen mx-auto px-4 py-8 mt-12 space-y-8 scroll-thin shadow-[4px_0_10px_rgba(0,0,0,0.05),_-4px_0_10px_rgba(0,0,0,0.05)]">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};
