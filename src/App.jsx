import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import useMode from "./utils/zustand";
import Footer from "./components/footer";
import Products from "./pages/productsAll/products";
import Profile from "./pages/profile";
import UpdatePrd from "./pages/productsAll/updatePrd";
import CreatePrd from "./pages/productsAll/createPrd";
import ReadMore from "./pages/productsAll/readMore";

export default function App() {
  const { darkMode } = useMode();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar />
      <div className="site bg-[white] text-[black] duration-300 dark:bg-[#292929] dark:text-[white]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="pages">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/update_product/:id" element={<UpdatePrd />} />
            <Route path="/create_product" element={<CreatePrd />} />
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
