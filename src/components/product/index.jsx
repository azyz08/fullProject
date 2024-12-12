import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./style.scss"

export default function Product() {
    return (
        <Link to={"/read_more"}>
            <div className="product cursor-pointer shadow-[0_5px_10px_#c5c5c56b] dark:shadow-[0_4px_10px_#17171791] duration-300 hover:shadow-[0_6px_10px_#b0b0b06b] dark:hover:shadow-[0_4px_10px_#171717e0]">
                <div className="imageBox">
                    <img src="https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages2.zoodmall.com%2Fhttps%253A%2Fimg.joomcdn.net%2F12a117985b623359a0325ae0ed4cbfcdfb94ed86_original.jpeg" alt="" />
                </div>
                <div className="text">
                    <h1>Erkaklar kurtkasi</h1>
                    <span>
                        <p>Rangi:</p>
                        <div className="color bg-blue-500 w-[50px] h-[20px] rounded-sm"></div>
                    </span>
                    <div className="bot">
                        <div className="price">
                            <del className="text-gray-500">1 900 091</del>
                            <p>1 345 091 so'm</p>
                        </div>
                        <Link className="basket" to={"/products"}> <FontAwesomeIcon className="icon" icon={faCartPlus} /></Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}