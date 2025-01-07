import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./style.scss"
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { inctance } from "../../utils/axios";
import { useTranslation } from "react-i18next";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Select, Dropdown, Space, Typography } from "antd";
import { DownOutlined } from '@ant-design/icons';
import "../../utils/i18n";
import { useCheckbox } from '../../components/checkbox';

export default function Products() {
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const [data, setData] = useState({});
    const [ctg, setCtg] = useState([]); // Initialize as an empty array
    const navigate = useNavigate();
    const [take, setTake] = useState(10);
    const [active, setActive] = useState(1);
    const [query, setQuery] = useSearchParams();
    const [isChecked2, setIsChecked2] = useState(false);
    const [checkedItem, setCheckedItem] = useState(null); // Checked elementni saqlash uchun state
    const { isChecked } = useCheckbox();
    const currentLanguage = i18n.language;

    const handleToggle = () => {
        setIsChecked2(!isChecked2);
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

    const getItemProps = (index) => ({
        variant: active === index ? "filled" : "text",
        color: "blue",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === Math.ceil(data?.total / take)) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    useEffect(() => {
        const categoryId = query.get('category');  // Get category from URL
        const selectedColor = query.get('color'); // Get color from URL
        const filterUrl = `/products/pagination?page=${active}&take=${take}${categoryId ? `&category=${categoryId}` : ''}${selectedColor ? `&color=${selectedColor}` : ''}`;

        inctance.get(filterUrl).then((res) => setData(res?.data));
    }, [active, take, query]); // Fetch products whenever pagination or category/color changes

    useEffect(() => {
        inctance.get(`/category`).then((res) => setCtg(res?.data)); // Fetch categories
    }, []);

    const totalPages = Math.ceil(data?.total / take);

    // Color filter handling
    const handleColorFilter = (color) => {
        setQuery({ color });
    };

    return (
        <>
            <div className="all">
                <div className={`ctgs ${scrolled ? "scrolled" : ""} bg-[white] duration-300 dark:bg-[#292929]`}
                    style={{
                        // border: isChecked ? "2px solid red" : "none",
                        zIndex: isChecked ? -1 : 999,
                        // top: isChecked ? 0 : '60px',
                    }}>
                    <div className="left">
                        <Dropdown
                            className='FiltrDropdown'
                            menu={{
                                items: [
                                    {
                                        key: '1',
                                        label:
                                            <div className='flex items-center justify-between gap-4'>
                                                <p className='text-[17px]'>Red</p>
                                                <div className='w-[30px] h-[30px] rounded-[50%] bg-[red]'></div>
                                            </div>
                                    },
                                    {
                                        key: '2',
                                        label:
                                            <div className='flex items-center justify-between gap-4'>
                                                <p className='text-[17px]'>Blue</p>
                                                <div className='w-[30px] h-[30px] rounded-[50%] bg-[blue]'></div>
                                            </div>
                                    },
                                    {
                                        key: '3',
                                        label:
                                            <div className='flex items-center justify-between gap-4'>
                                                <p className='text-[17px]'>Yellow</p>
                                                <div className='w-[30px] h-[30px] rounded-[50%] bg-[yellow]'></div>
                                            </div>
                                    },
                                    {
                                        key: '4',
                                        label:
                                            <div className='flex items-center justify-between gap-4'>
                                                <p className='text-[17px]'>Black</p>
                                                <div className='w-[30px] h-[30px] rounded-[50%] bg-[Black]'></div>
                                            </div>
                                    },
                                    {
                                        key: '5',
                                        label:
                                            <div className='flex items-center justify-between gap-4'>
                                                <p className='text-[17px]'>Brown</p>
                                                <div className='w-[30px] h-[30px] rounded-[50%] bg-[brown]'></div>
                                            </div>
                                    },
                                ],
                                selectable: true,
                                defaultSelectedKeys: ['3'],
                            }}
                        >
                            <Typography.Link>
                                <Space className='space1 text-[18px] text-black duration-300 dark:text-white'>
                                    <i class="fa-solid fa-sliders"></i>
                                </Space>
                                <Space className='space2 text-[18px] text-black duration-300 dark:text-white'>
                                    {t("filtr")}
                                    <DownOutlined className='filtrIcon' />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                    </div>
                    <div className="categories">
                        <p className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 0 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(0)} > Samsung</p>

                        <p className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 1 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(1)}>
                            Samsung
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 2 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(2)}
                        >
                            Apple
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 3 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(3)}
                        >
                            Apple
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 4 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(4)}
                        >
                            Pocco
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 5 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(5)}
                        >
                            Pocco
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 6 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(6)}
                        >
                            Vivo
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 7 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(7)}
                        >
                            Vivo
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 8 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(3)}
                        >
                            Apple
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 9 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(4)}
                        >
                            Pocco
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 10 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(5)}
                        >
                            Pocco
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 11 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(6)}
                        >
                            Vivo
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 12 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(7)}
                        >
                            Vivo
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 13 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(3)}
                        >
                            Apple
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 14 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(4)}
                        >
                            Pocco
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 15 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(5)}
                        >
                            Pocco
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 16 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(6)}
                        >
                            Vivo
                        </p>
                        <p
                            className={`category-item text-gray-700 dark:text-gray-400 ${checkedItem === 17 ? "checked" : ""}`}
                            onClick={() => setCheckedItem(7)}
                        >
                            Vivo
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="products">
                        {data?.data?.map((l) => (
                            <Link key={l._id} to={"/read_more"}>
                                <div className="product cursor-pointer shadow-[0_5px_10px_#c5c5c56b] dark:shadow-[0_4px_10px_#17171791] duration-300 hover:shadow-[0_6px_10px_#b0b0b06b] dark:hover:shadow-[0_4px_10px_#171717e0]">
                                    <div className="imageBox">
                                        <img src={`http://localhost:3000/file-upload/${l?.image}`} alt="" />
                                    </div>
                                    <div className="text">
                                        <h1>{l?.[`name_${currentLanguage}`]}</h1>
                                        <span>
                                            <p className='text-[gray]'>Rangi:</p>
                                            <div style={{ backgroundColor: l?.color }} className="color w-[50px] h-[20px] rounded-sm"></div>
                                        </span>
                                        <div className="bot">
                                            <div className="price">
                                                <del className="text-gray-500">1 900 091</del>
                                                {/* <p>{l?.price}</p> */}
                                                <p>1 345 091 so'm</p>
                                            </div>
                                            <Link className="basket" to={"/products"}> <FontAwesomeIcon className="icon" icon={faCartPlus} /></Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="pagination">
                        <div className="paginationDiv">
                            <Button
                                variant="text"
                                className="flex text-black duration-300 dark:text-white items-center gap-2"
                                onClick={prev}
                                disabled={active === 1}
                            >
                                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-black duration-300 dark:text-white" /> <p className='texti'>Previous</p>
                            </Button>
                            <div className="flex m-auto items-center gap-2">
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <IconButton
                                        className='text-black duration-300 dark:text-white'
                                        key={index + 1}
                                        {...getItemProps(index + 1)}
                                    >
                                        {index + 1}
                                    </IconButton>
                                ))}
                            </div>
                            <Button
                                variant="text"
                                className="flex text-black duration-300 dark:text-white items-center gap-2"
                                onClick={next}
                                disabled={active === totalPages}
                            >
                                <p className='texti'>Next</p>
                                <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-black duration-300 dark:text-white" />
                            </Button>
                        </div>
                        <Select
                            value={take}
                            onChange={setTake}
                            className="custom-select"
                            options={[
                                { value: 5, label: "5" },
                                { value: 10, label: "10" },
                                { value: 15, label: "15" },
                                { value: 20, label: "20" },
                                { value: 25, label: "25" },
                                { value: 30, label: "30" },
                            ]}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}