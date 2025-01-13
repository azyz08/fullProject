import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { inctance } from "../../utils/axios";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { Image } from "antd";
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { Button } from "@material-tailwind/react";

const images = [
    "https://pcmarket.uz/wp-content/uploads/2024/11/637ed8dc667f4c742fbcf174a5631ce02024022717154594999AdvVSpMXcf.jpg-removebg-preview.png",
    "https://www.interfax.ru/ftproot/press/pr-rel/dddd/2022/hype-ru-black-friday-2017-deals-l-1517896081-132_large.png",
    "https://opis-cdn.tinkoffjournal.ru/mercury/laptops-for-work-9.lbefgwwf4wck..jpg",
    "https://images.uzum.uz/cqkv387frr8a72r6fk5g/original.jpg",
    "https://brostore.uz/cdn/shop/files/6_1c88813d-2981-46d4-8bcd-730af9ce3072.png?v=1700301993",
];


export default function ReadMore() {
    const { id } = useParams(); // URL'dan ID ni olish
    const [product, setProduct] = useState(null);
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionState, setTransitionState] = useState("");

    useEffect(() => {
        // Mahsulotni ID bo'yicha olish
        inctance
            .get(`/products/${id}`) // Backenddagi mahsulotni olish endpoint
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    const handleLeftClick = () => {
        setTransitionState("exit-right");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setTransitionState("enter-left");
        }, 300); // Animatsiya vaqti
    };

    const handleRightClick = () => {
        setTransitionState("exit-left");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setTransitionState("enter-right");
        }, 300); // Animatsiya vaqti
    };

    const handleThumbnailClick = (index) => {
        if (index !== currentIndex) {
            const direction = index > currentIndex ? "exit-left" : "exit-right";
            const enterDirection = index > currentIndex ? "enter-right" : "enter-left";

            setTransitionState(direction);
            setTimeout(() => {
                setCurrentIndex(index);
                setTransitionState(enterDirection);
            }, 300); // Animatsiya vaqti
        }
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="read_more">
            <div className="carousel-container">
                <div className="thumbnails">
                    <div
                        className={`floating-border index-${currentIndex}`}
                    ></div>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            className="thumbnail shadow-[1px_2px_10px_#a5a5a57e] duration-300 dark:shadow-[5px_4px_10px_#17171791]"
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
                <div className="main-image shadow-[1px_2px_10px_#a5a5a57e] duration-300 dark:shadow-[5px_4px_15px_#17171791]">
                    <button className="left-arrow" onClick={handleLeftClick}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div className={`image-wrapper ${transitionState}`}>
                        <Image
                            className="centerImg cursor-pointer"
                            height={'100%'}
                            width={'100%'}
                            src={images[currentIndex]}
                            alt={`Main ${currentIndex}`}
                        />
                    </div>
                    <button className="right-arrow" onClick={handleRightClick}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div className="text">
                <h1>{product?.[`name_${currentLanguage}`]}, {product?.[`desc_${currentLanguage}`]}</h1>
                <div className="box">
                    <div className="color">
                        <span className="flex items-center gap-2">
                            <p className="text-[gray]">{t("color")}:</p>
                            <div
                                style={{ backgroundColor: product?.color }}
                                className="w-[50px] h-[20px] rounded-sm"
                            ></div>
                        </span>
                        <p>{product?.quantity} ta qoldi</p>
                    </div>
                    <div className="price">
                        <p>
                            {Number(String(product?.price).replace(/\s/g, ''))
                                .toLocaleString('en-US')
                                .replace(/,/g, ' ')}{" "}
                            so'm
                        </p>
                        <del className="text-gray-500">
                            {Number(String(product?.price).replace(/\s/g, '') + 50)
                                .toLocaleString('en-US')
                                .replace(/,/g, ' ')}
                        </del>
                    </div>
                    <div className="add">
                        <Button className="cart">Savatga qo'shish</Button>
                        <div className="basket flex items-center gap-1">
                            <Button className="border-none p-0 bg-transparent shadow-none hover:shadow-none"><i class="fa-regular fa-heart text-[25px] p-[6px] text-black duration-300 dark:text-white"></i></Button>
                            <Button className="border-none p-0 bg-transparent shadow-none hover:shadow-none"><FontAwesomeIcon className="text-[25px] p-[6px] text-black duration-300 dark:text-white" icon={faShareNodes} /></Button>
                        </div>
                    </div>
                </div>

                <div className="box2">
                    <h2>Qulay usulda xavfsiz toʻlov</h2>
                    <p>Karta orqali va naqd pulda toʻlang</p>
                    <div className="imagesBox">
                        <img className="w-[60px] h-[30px] object-cover" src="/humo.png" alt="" />
                        <img className="w-[43px] h-[35px] object-cover" src="/mastercard.png" alt="" />
                        <img className="w-[30px] h-[42px] object-cover" src="/uzkard.png" alt="" />
                        <img className="w-[55px] h-[35px] object-cover" src="/visa.png" alt="" />
                        <img className="w-[55px] h-[30px] object-cover" src="/uzum.png" alt="" />
                        <img className="w-[55px] h-[30px] object-cover" src="/money.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
