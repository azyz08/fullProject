import { Route, Routes } from "react-router-dom";
import "./App.scss"
import Home from "./pages/home";
import Products from "./pages/products";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
