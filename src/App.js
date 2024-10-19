import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";

export default function App() {
  const token = false;
  return (
    <Routes>
       <Route path="*" element={token ? <UserPage /> : <Login/> } />
     </Routes>
  )
}