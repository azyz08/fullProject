import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import useMode from "./utils/zustand";
import Footer from "./components/footer";
import Products from "./pages/products";
import Profile from "./pages/profile";
import ReadMore from "./pages/readMore";

export default function App() {
  const { darkMode } = useMode();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="site bg-[white] text-[black] duration-300 dark:bg-[#292929] dark:text-[white]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="pages">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/read_more/:id" element={<ReadMore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
