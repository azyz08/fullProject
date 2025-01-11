import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { inctance } from "../../utils/axios";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ReadMore() {
    const { id } = useParams(); // URL'dan ID ni olish
    const [product, setProduct] = useState(null);
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;



    useEffect(() => {
        // Mahsulotni ID bo'yicha olish
        inctance
            .get(`/products/${id}`) // Backenddagi mahsulotni olish endpoint
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="read-more">
            <img src={`http://localhost:3000/file-upload/${product?.image}`} alt="" />
            <h1>{product?.[`name_${currentLanguage}`]}</h1>
            <h1>{product?.[`desc_${currentLanguage}`]}</h1>
            <span className="flex items-center gap-2">
                <p className="text-[gray]">{t("color")}:</p>
                <div
                    style={{ backgroundColor: product?.color }}
                    className="color w-[50px] h-[20px] rounded-sm"
                ></div>
            </span>
            <p>{product?.status}</p>
            <p>{product?.quantity}</p>
            <div className="bot">
                <div className="price">
                    <del className="text-gray-500">
                        {Number(String(product?.price).replace(/\s/g, '') + 50)
                            .toLocaleString('en-US')
                            .replace(/,/g, ' ')}
                    </del>
                    <p>
                        {Number(String(product?.price).replace(/\s/g, ''))
                            .toLocaleString('en-US')
                            .replace(/,/g, ' ')}{" "}
                        so'm
                    </p>
                </div>
                <Link className="basket" to={"/products"}>
                    <FontAwesomeIcon className="icon" icon={faCartPlus} />
                </Link>
            </div>
        </div>
    );
};
