import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { inctance } from "../../utils/axios";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { Image } from "antd";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import Skeleton from "../../components/skeleton";

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

    // Backenddan kelgan rasmlarni olish
    const productImages = [
        product?.image,
        product?.image_2,
        product?.image_3,
        product?.image_4,
        product?.image_5,
    ].filter(Boolean); // Undefined yoki null bo'lmagan rasmlarni olish

    const handleLeftClick = () => {
        setTransitionState("exit-right");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? productImages.length - 1 : prevIndex - 1));
            setTransitionState("enter-left");
        }, 300); // Animatsiya vaqti
    };

    const handleRightClick = () => {
        setTransitionState("exit-left");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === productImages.length - 1 ? 0 : prevIndex + 1));
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
        return (
            <div className="read_more">
                <div className="carousel-container">
                    <div className="thumbnails">
                        <div className="skeletonCard thumbnail"></div>
                        <div className="skeletonCard thumbnail"></div>
                        <div className="skeletonCard thumbnail"></div>
                        <div className="skeletonCard thumbnail"></div>
                        <div className="skeletonCard thumbnail"></div>
                    </div>

                    <div className="main-image">
                        <div className="skeletonCard image-wrapper"></div>
                    </div>
                </div>

                <div className="text">
                    <div className="skeletonCard w-[100%] mt-1 m-auto h-[65px] rounded-[10px] skeletonH1"></div>
                    <div className="skeletonCard w-[100%] mt-[1px] m-auto h-[230px] rounded-[10px] skeletonBox1"></div>
                    <div className="skeletonCard w-[100%] mt-[5px] m-auto h-[150px] rounded-[10px] skeletonBox2"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="read_more">
            <div className="carousel-container">
                {productImages.length > 1 && (
                    <div className="thumbnails">
                        <div className={`floating-border index-${currentIndex}`}></div>
                        {productImages.map((image, index) => (
                            <img
                                key={index}
                                src={`http://localhost:3000/file-upload/${image}`}
                                alt={`Thumbnail ${index}`}
                                className="thumbnail shadow-[1px_2px_10px_#a5a5a57e] duration-300 dark:shadow-[5px_4px_10px_#17171791]"
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                )}

                <div className="main-image shadow-[1px_2px_10px_#a5a5a57e] duration-300 dark:shadow-[5px_4px_15px_#17171791]">
                    {/* Agar faqat bitta rasm bo'lsa, left va right arrowlarni yashirish */}
                    {productImages.length > 1 && (
                        <button className="left-arrow" onClick={handleLeftClick}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    )}

                    <Link to={"#"} className="z-10 absolute top-[10px] right-[10px]"><i className="fa-regular fa-heart text-[25px] p-[8px] text-red-500 bg-[#a9a9a94f] rounded-[100%]"></i></Link>
                    <div className={`image-wrapper ${transitionState}`}>
                        <Image
                            className="centerImg cursor-pointer"
                            height={'100%'}
                            width={'100%'}
                            src={`http://localhost:3000/file-upload/${productImages[currentIndex]}`}
                            alt={`Main ${currentIndex}`}
                        />
                    </div>

                    {productImages.length > 1 && (
                        <button className="right-arrow" onClick={handleRightClick}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    )}
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
                        <p className="quantity">{product?.quantity} {t("left")}</p>
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
                        <Button className="cart">{t("add")}</Button>
                        <div className="basket flex items-center gap-1">
                            <Button className="border-none p-0 bg-transparent shadow-none hover:shadow-none"><FontAwesomeIcon className="text-[25px] p-[6px] text-black duration-300 dark:text-white" icon={faShareNodes} /></Button>
                        </div>
                    </div>
                </div>

                <div className="box2">
                    <h2>{t("pay")}</h2>
                    <p>{t("karta")}</p>
                    <div className="imagesBox">
                        <img className="w-[55px] h-[25px] object-cover" src="/humo.png" alt="" />
                        <img className="w-[38px] h-[30px] object-cover" src="/mastercard.png" alt="" />
                        <img className="w-[25px] h-[37px] object-cover" src="/uzkard.png" alt="" />
                        <img className="w-[50px] h-[30px] object-cover" src="/visa.png" alt="" />
                        <img className="w-[50px] h-[25px] object-cover" src="/uzum.png" alt="" />
                        <img className="w-[50px] h-[25px] object-cover" src="/money.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
