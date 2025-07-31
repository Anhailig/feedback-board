import { Outlet } from 'react-router-dom';
import Header from "@/components/Header.tsx";
import {Toaster} from "sonner";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <main
        className="flex-1 overflow-y-auto w-full max-w-xl mx-auto pl-4 pr-1.5 pt-4 pb-8 space-y-8 scroll-gutter scroll-thin shadow-[4px_0_10px_rgba(0,0,0,0.05),_-4px_0_10px_rgba(0,0,0,0.05)]">
        <Outlet/>
      </main>
      <Toaster/>
    </div>
  );
};
