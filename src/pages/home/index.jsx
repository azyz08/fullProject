import { useTranslation } from "react-i18next";
import "./style.scss"
import { Carousel } from 'antd';
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";


export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div className="bigShow">
                <div className="show">
                    <div className="text">
                        <h6>About us</h6>
                        <h1 className="flex items-center gap-3"><span className="text-blue-500">Full Project</span> <h3>Website</h3></h1>
                        <p className="text-[gray]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ex sapiente temporibus aliquam consequatur quod cupiditate pariatur modi quasi, sequi mollitia.</p>
                        <div className="btns mt-3 flex items-center gap-5">
                            <Link to={"register"}>
                                <Button className="capitalize bg-transparent py-2 text-[15px] font-thin bg-blue-700 border-none">
                                    Products
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
        </>
    )
}