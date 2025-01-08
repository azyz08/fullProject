import { useTranslation } from "react-i18next";
import "./style.scss"

export default function Services() {
    const { t } = useTranslation();

    return (
        <div className="services">
            <h1 class="text-black duration-300 dark:text-white text-[2.5rem] md:text-5xl xl:text-5xl font-semibold max-w-3xl mx-auto leading-snug text-center">{t("services")}</h1>
            <div class="mt-[30px] grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 w-full mx-auto">
                <div class="card bg-gray-100 duration-300 dark:bg-gray-800 p-10 relative">
                    <div class="circle">
                    </div>
                    <div class="relative lg:pr-52">
                        <h2 class="capitalize text-black duration-300 dark:text-white mb-4 text-2xl xl:text-2xl">uI/uX <br /> creative design</h2>
                        <p class="text-gray-700 duration-300 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                    <div class="icon"></div>
                </div>
                <div class="card bg-gray-100 duration-300 dark:bg-gray-800 p-10 relative">
                    <div class="circle">
                    </div>
                    <div class="relative lg:pl-48">
                        <h2 class="capitalize text-black duration-300 dark:text-white mb-4 text-2xl xl:text-2xl">visual <br /> graphic design</h2>
                        <p class="text-gray-700 duration-300 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
                <div class="card bg-gray-100 duration-300 dark:bg-gray-800 p-10 relative">
                    <div class="circle">
                    </div>
                    <div class="relative lg:pr-44">
                        <h2 class="capitalize text-black duration-300 dark:text-white mb-4 text-2xl xl:text-2xl">strategy & <br />digital marketing</h2>
                        <p class="text-gray-700 duration-300 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
                <div class="card bg-gray-100 duration-300 dark:bg-gray-800 p-10 relative">
                    <div class="circle">
                    </div>
                    <div class="relative lg:pl-48">
                        <h2 class="capitalize text-black duration-300 dark:text-white mb-4 text-2xl xl:text-2xl">effective<br /> business growth</h2>
                        <p class="text-gray-700 duration-300 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}