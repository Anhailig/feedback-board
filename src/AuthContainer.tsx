import {Routes, Route, useLocation, NavLink} from 'react-router-dom';
import {Registration} from "@/Pages/Registration.tsx";
import {Login} from "@/Pages/Login.tsx";

export const AuthContainer = () => {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Registration/>}/>
        <Route path="*" element={<Login/>}/>
      </Routes>
      <nav className="flex justify-center gap-4 mt-4">
        {location.pathname !== '/login' && (
          <NavLink to="login" className="underline">
            Login
          </NavLink>
        )}
        {location.pathname !== '/register' && (
          <NavLink to="register" className="underline">
            Sign up
          </NavLink>
        )}
      </nav>
    </div>
  );
}
