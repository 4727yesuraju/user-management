import { Navigate, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./store/useUserStore";
import Header from "./components/Header";

export default function App() {
  const {token} = useUserStore();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={!token ? <Login/> :  <Navigate to="/users" /> } />
        <Route path="/users" element={token ? <UsersPage/> :  <Navigate to="/login" /> } />
        <Route path="*" element={token ? <Navigate to="/users" />:  <Navigate to="/login" /> } />
      </Routes>
      <Toaster />
    </div>
  )
}