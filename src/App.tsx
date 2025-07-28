import './App.css'
import Home from "@/Pages/Home.tsx";
import {Routes, Route} from "react-router-dom";
import AuthContainer from "@/AuthContainer.tsx";
import {PrivateRoute} from "@/components/PrivateRoute.tsx";
import {useAuth} from "@/hooks/useAuth.tsx";
import {Layout} from "@/components/Layout.tsx"

function App() {
  useAuth();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/*" element={<AuthContainer />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
