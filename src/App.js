import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./store/useUserStore";

export default function App() {
  const {token} = useUserStore();
  return (
    <div>
      <Routes>
        <Route path="/login" element={!token ? <Login/> :  <Navigate to="/users" /> } />
        <Route path="/user" element={token ? <UserPage/> :  <Navigate to="/login" /> } />
        <Route path="*" element={token ? <Navigate to="/users" />:  <Navigate to="/login" /> } />
      </Routes>
      <Toaster />
    </div>
  )
}