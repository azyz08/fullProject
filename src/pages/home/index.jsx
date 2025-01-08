import { useTranslation } from "react-i18next";
import "./style.scss"
import { Carousel } from 'antd';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Services from "../../components/services";
import Contact from "../../components/contact";

export default function Home() {
    const { t } = useTranslation();

    const [counters, setCounters] = useState([
        { id: 1, count: 0, target: 1532 }, // Visit count target
        { id: 2, count: 0, target: 1223 }, // Sold products target
        { id: 3, count: 0, target: 998 },  // Happy customers target
        { id: 4, count: 0, target: 80 },  // Thank you notes target
    ]);
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // The counter starts when 10% is visible
    });
    useEffect(() => {
        if (inView) {
            const intervals = counters.map((counter, index) => {
                let currentCount = 0;
                return setInterval(() => {
                    currentCount += 1;
                    setCounters((prevCounters) =>
                        prevCounters.map((prevCounter, prevIndex) =>
                            prevIndex === index
                                ? { ...prevCounter, count: Math.min(prevCounter.count + 10, prevCounter.target) }
                                : prevCounter
                        )
                    );
                    if (currentCount >= counter.target) {
                        clearInterval(intervals[index]);
                    }
                }, 30); // Interval speed (100ms)
            });

            return () => intervals.forEach(interval => clearInterval(interval));
        }
    }, [inView, counters]);

    return (
        <>
            <div className="bigShow">
                <div className="show">
                    <div className="text">
                        <h6 className="text-[18px]">{t("about")}</h6>
                        <h1 className="flex items-center gap-3"><span className="text-blue-500">Full Project</span> <h3>Website</h3></h1>
                        <p className="text-[gray]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ex sapiente temporibus aliquam consequatur quod cupiditate pariatur modi quasi, sequi mollitia.</p>
                        <div className="btns mt-3 flex items-center gap-5">
                            <Link to={"/products"}>
                                <Button className="prdBtn capitalize bg-transparent py-2 px-4 flex items-center gap-[6px] text-[15px] font-thin bg-blue-700 border-none">
                                    {t("prd")} <i class="fa-solid fa-angle-right prdRight"></i>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="carouselBox">
                        <Carousel autoplay className="carousel ">
                            <div className="carBox">
                                <img className="brightness-[90%] duration-300 dark:brightness-[65%]" src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80" alt="" />
                            </div>
                            <div className="carBox">
                                <img className="brightness-[90%] duration-300 dark:brightness-[65%]" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" alt="" />
                            </div>
                            <div className="carBox">
                                <img className="brightness-[90%] duration-300 dark:brightness-[65%]" src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg" alt="" />
                            </div>
                            <div className="carBox">
                                <img className="brightness-[90%] duration-300 dark:brightness-[65%]" src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" alt="" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="pages">
                <Services />

                <div className="four">
                    <div className="counter">
                        <img
                            className="counterImg1" // Specific class for visit image
                            src="/visit.png"
                            alt="Visit count"
                        />
                        <span>
                            <h1 ref={ref}>{counters[0].count}</h1>
                            <p className="text-[#686868] duration-300 dark:text-[#c5c5c5]">{t("visits")}</p>
                        </span>
                    </div>
                    <div className="counter">
                        <img
                            className="counterImg2" // Specific class for sold products image
                            src="/sold.png"
                            alt="Sold products"
                        />
                        <span>
                            <h1 ref={ref}>{counters[1].count}</h1>
                            <p className="text-[#686868] duration-300 dark:text-[#c5c5c5]">{t("sold")}</p>
                        </span>
                    </div>
                    <div className="counter">
                        <img
                            className="counterImg3" // Specific class for happy customers image
                            src="/happy.png"
                            alt="Happy customers"
                        />
                        <span>
                            <h1 ref={ref}>{counters[2].count}</h1>
                            <p className="text-[#686868] duration-300 dark:text-[#c5c5c5]">{t("happy")}</p>
                        </span>
                    </div>
                    <div className="counter">
                        <img
                            className="counterImg4" // Specific class for thank you notes image
                            src="/medal.png"
                            alt="Thank you notes"
                        />
                        <span>
                            <h1 ref={ref}>{counters[3].count}</h1>
                            <p className="text-[#686868] duration-300 dark:text-[#c5c5c5]">{t("notes")}</p>
                        </span>
                    </div>
                </div>

                <Contact />
            </div>
        </>
    )
}
