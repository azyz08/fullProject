import { Link } from "react-router-dom"
import "./style.scss"
import { Button, ConfigProvider, Flex, Tooltip } from 'antd';
const text = <span>prompt text</span>;
const buttonWidth = 80;

export default function Footer() {
    return (
        <>
            <div className="footer bg-[#f4f4f4] duration-300 dark:bg-[#2d2d2d]">
                <div className="footer2">
                    <div className="left">
                        <Link to={"/"} className="logo">
                            <img className="logoImg" src="/logo.png" alt="" />
                            <h1>Logo</h1>
                        </Link>
                        <p className="dark:text-gray-500 duration-300 text-gray-600">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Aut, at?</p>
                    </div>
                    <ul className="links">
                        <b>Links</b>
                        <Link className="footerLink text-gray-800 hover:text-black duration-300 dark:text-gray-500 dark:hover:text-white" to={"/"}>Home</Link>
                        <Link className="footerLink text-gray-800 hover:text-black duration-300 dark:text-gray-500 dark:hover:text-white" to={"/products"}>Products</Link>
                    </ul>
                    <div className="icons">
                        <Tooltip placement="left" title="Instagram">
                            <a className="duration-300 hover:text-[#E1306C]" href="http://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                        </Tooltip>
                        <Tooltip placement="left" title="Facebook">
                            <a className="duration-300 hover:text-[#1877F2]" href="https://facebook.com/"><i class="fa-brands fa-square-facebook"></i></a>
                        </Tooltip>
                        <Tooltip placement="left" title="Twitter">
                            <a className="duration-300 hover:text-[#1DA1F2]" href="http://x.com"><i class="fa-brands fa-square-twitter"></i></a>
                        </Tooltip>
                        <Tooltip placement="left" title="GitHub">
                            <a className="duration-300 hover:text-[#333] dark:hover:text-[white]" href="http://github.com"><i class="fa-brands fa-square-github"></i></a>
                        </Tooltip>
                    </div>
                </div>
                <div className="bot">
                    <div className="icons">
                        <Tooltip placement="top" title="Instagram">
                            <a className="duration-300 hover:text-[#E1306C]" href="http://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                        </Tooltip>
                        <Tooltip placement="top" title="Facebook">
                            <a className="duration-300 hover:text-[#1877F2]" href="https://facebook.com/"><i class="fa-brands fa-square-facebook"></i></a>
                        </Tooltip>
                        <Tooltip placement="top" title="Twitter">
                            <a className="duration-300 hover:text-[#1DA1F2]" href="http://x.com"><i class="fa-brands fa-square-twitter"></i></a>
                        </Tooltip>
                        <Tooltip placement="top" title="GitHub">
                            <a className="duration-300 hover:text-[#333] dark:hover:text-[white]" href="http://github.com"><i class="fa-brands fa-square-github"></i></a>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}