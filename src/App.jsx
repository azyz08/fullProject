import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Products from "./pages/products";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import useMode from "./utils/zustand";
import Footer from "./components/footer";

export default function App() {
  const { darkMode } = useMode();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar />
      <div className="site bg-[white] text-[black] duration-300 dark:bg-[#292929] dark:text-[white]">
        {/* Home Route Outside of .pages */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="pages">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}
