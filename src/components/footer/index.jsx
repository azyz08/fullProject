import { Link } from "react-router-dom"
import "./style.scss"

export default function Footer() {
    return (
        <>
            <div className="footer mt-5">
                <Link to={"/"} className="logo">
                    <img className="logoImg" src="/logo.png" alt="" />
                    <h1>Logo</h1>
                </Link>
                <ul>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/products"}><li>Products</li></Link>
                </ul>
            </div>
        </>
    )
}