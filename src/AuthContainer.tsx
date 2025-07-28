import { Routes, Route, Link } from 'react-router-dom';
import {Registration} from "@/Pages/Registration.tsx";
import {Login} from "@/Pages/Login.tsx";

export default function AuthContainer() {
  return (
    <div>
      <nav className="flex justify-center gap-4 mb-4">
        <Link to="login" className="underline">Login</Link>
        <Link to="register" className="underline">Sign up</Link>
      </nav>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}
