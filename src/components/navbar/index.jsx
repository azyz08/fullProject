import React, { useEffect, useState } from "react";
import useMode from "../../utils/zustand";
import "./style.scss";
import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { Button } from "@material-tailwind/react";
import { useCheckbox } from "../checkbox";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useMode();
    const { isChecked, setIsChecked } = useCheckbox();
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [i18n]);

    const handleChange = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
    };

    const handleThemeChange = (e) => {
        const selectedMode = e.target.value;
        if (
            (selectedMode === "dark" && !darkMode) ||
            (selectedMode === "light" && darkMode)
        ) {
            toggleDarkMode();
        }
    };

    const isActive = (path) => location.pathname === path ? "checked" : "";

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <input type="checkbox" id="m" checked={isChecked} onChange={handleCheckboxChange} />
            <div className={`nav ${scrolled ? "scrolled" : ""} text-black bg-[white] duration-300 dark:bg-[#292929] dark:text-white`}>
                <div className="nav2">
                    <Link to={"/"} className="logo">
                        <img className="logoImg" src="/logo.png" alt="" />
                        <h1>Logo</h1>
                    </Link>
                    <ul className="ul1">
                        <Link to={"/"}>
                            <li className={isActive("/")}>Home</li>
                        </Link>
                        <Link to={"/products"} className="text-[black] duration-300 dark:text-[white]">
                            <li className={isActive("/products")}>Products</li>
                        </Link>
                    </ul>
                    <div className="end">
                        <Dropdown
                            overlayClassName={`dropdown-menu ${darkMode ? "dark" : "light"}`}
                            className="dropdown"
                            overlay={
                                <div className="control flex flex-col items-start gap-2 py-[10px] px-[10px] w-[200px] h-[155px] rounded-2xl shadow-xl bg-[#f1f1f1] duration-300 dark:bg-[black]">
                                    <Button className="capitalize shadow-xl bg-white duration-300 dark:bg-[#272727] font-thin flex items-center justify-between w-full gap-1 py-1 px-3 rounded-md">
                                        <Link className="profileLink flex items-center text-black duration-300 dark:text-black justify-between w-full" to={"/profile"}>
                                            <p className="text-[18px] text-black duration-300 dark:text-white">Profile</p>
                                            <div className="imgBox overflow-hidden rounded-[50%] w-[30px] h-[30px] flex items-center justify-center">
                                                <img className="profileImg w-[50px] h-[50px] object-cover" src="/user.jpg" alt="Profile" />
                                            </div>
                                        </Link>
                                    </Button>
                                    <Button className="capitalize bg-white duration-300 dark:bg-[#272727] font-thin flex items-center justify-between w-full gap-1 py-3 px-3 rounded-md">
                                        <label className="text-black duration-300 flex gap-2 dark:text-white cursor-pointer">
                                            <p className="text-[18px]">Light</p>
                                            <input
                                                type="radio"
                                                name="theme"
                                                value="light"
                                                checked={!darkMode}
                                                onChange={handleThemeChange}
                                            />
                                        </label>
                                        <label className="text-black duration-300 flex gap-1 dark:text-white cursor-pointer">
                                            <p className="text-[18px]">Dark</p>
                                            <input
                                                type="radio"
                                                name="theme"
                                                value="dark"
                                                checked={darkMode}
                                                onChange={handleThemeChange}
                                            />
                                        </label>
                                    </Button>
                                    <Button className="capitalize bg-white duration-300 dark:bg-[#272727] font-thin flex items-center justify-between w-full gap-1 py-[6.3px] px-3 rounded-md">
                                        <p className="text-[18px] text-black duration-300 dark:text-white">Translate</p>
                                        <select
                                            className="border-[1px] rounded-[5px] pt-[1px] pb-[1px] bg-white cursor-pointer border-[blue] text-[#121212] focus:outline-none text-[18px]"
                                            value={i18n.language}
                                            onChange={handleChange}
                                        >
                                            <option value="uz">O'z</option>
                                            <option value="ru">Рус</option>
                                            <option value="en">Eng</option>
                                        </select>
                                    </Button>
                                </div>
                            }
                            trigger={['hover']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className="space cursor-pointer">
                                    <i class="fa-solid fa-gear gear mt-1"></i>
                                </Space>
                            </a>
                        </Dropdown>
                        <label htmlFor="m" className="mLabel menu-label" onClick={toggleMenu}>
                            <i
                                className={`text-black duration-300 dark:text-white menu-icon fa-solid ${isOpen ? "fa-xmark" : "fa-bars"
                                    }`}
                            ></i>
                        </label>
                        <div className="flex items-center gap-[7px]">
                            <Link to={"/login"}>
                                <Button className="logOut text-black duration-300 dark:text-white normal-case border-blue-700 border-[1.5px] bg-transparent px-[14px] py-[5.5px] text-[15px] font-thin">
                                    Log in
                                </Button>
                            </Link>
                            <Link to={"/register"}>
                                <Button className="logOut normal-case bg-blue-700 px-[12px] py-[6px] text-[15px] font-thin">
                                    Sign up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <ul className="ul2">
                    <Link to={"/"}>
                        <li className={isActive("/")}>Home</li>
                    </Link>
                    <Link to={"/products"}>
                        <li className={isActive("/products")}>Products</li>
                    </Link>
                    <div className="btns flex items-center w-full gap-2 mt-2">
                        <Link className="w-full" to={"/login"}>
                            <Button className="logOut text-black duration-300 dark:text-white w-full normal-case border-blue-700 border-[1.5px] bg-transparent px-[14px] py-[5.5px] text-[15px] font-thin">
                                Log in
                            </Button>
                        </Link>
                        <Link className="w-full" to={"/regiter"}>
                            <Button className="logOut w-full normal-case bg-blue-700 px-[12px] py-[6px] text-[15px] font-thin">
                                Sign up
                            </Button>
                        </Link>
                    </div>
                </ul>
            </div>
        </>
    );
}
