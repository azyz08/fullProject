import "./style.scss"
import React, { useState } from 'react';
import { Input } from 'antd';
import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const resetForm = () => {
        setFormData({
            name: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };
    return (
        <>
            <h1 class="topH1 text-black duration-300 dark:text-white text-[2.5rem] md:text-5xl xl:text-5xl font-semibold max-w-3xl mx-auto leading-snug text-center">{t("contact")}</h1>
            <div className="contact">
                <div className="text">
                    <h1>Connect with our </h1>
                    <h1>team of <p className="text-blue-500">Express</p></h1>
                    <h6 className="h61">Connect our team of exclellence-driven experts today bring <br /> your project to file</h6>
                    <h6 className="h62">Connect our team of exclellence-driven experts today bring your project to file</h6>
                    <div className="connect ">
                        <a href="tel:990901844">
                            <i class="fa-solid fa-phone"></i>
                            <p>990901844</p>
                        </a>
                        <a href="mailto:azyz@gmail.com">
                            <i class="fa-solid fa-envelope"></i>
                            <p>azyz@gmail.com</p>
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>See our location</p>
                        </a>
                    </div>
                    <a href="#" className="a2 text-blue-500">Visit our job board <p><i class="fa-solid fa-angle-right"></i></p></a>
                    <div className="userBox bg-gray-300 duration-300 dark:bg-gray-800">
                        <span>
                            <h2>Want to join our <br /> Talented Team?</h2>
                            <a href="#" className="a1 text-blue-500">Visit our job board <p><i class="fa-solid fa-angle-right"></i></p></a>
                        </span>
                        <img src="smile.png" alt="" />
                    </div>
                </div>
                <form className="contactForm shadow-[2px_2px_10px_#dbdbdbac] duration-300 dark:shadow-[2px_2px_10px_#1c1c1c]">
                    <span>
                        <label className="" htmlFor="ism">{t("name")}:</label>
                        <Input
                            className="text-black duration-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                            id="ism"
                            placeholder={t("name")}
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </span>
                    <span>
                        <label className="" htmlFor="last">{t("sure")}:</label>
                        <Input
                            className="text-black duration-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                            id="last"
                            placeholder={t("sure")}
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                    </span>
                    <span>
                        <label className="" htmlFor="email">{t("email")}:</label>
                        <Input
                            className="text-black duration-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                            id="email"
                            type="email"
                            placeholder={t("email")}
                            value={formData.email}
                            required
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </span>
                    <span>
                        <label className="" htmlFor="phone">{t("phone")}:</label>
                        <Input
                            className="text-black duration-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                            id="phone"
                            required
                            placeholder={t("phoneNmbr")}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </span>
                    <span>
                        <label className="" htmlFor="message">{t("message")}:</label>
                        <Input.TextArea
                            className="text-black duration-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                            id="message"
                            required
                            placeholder={t("message")}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </span>
                    <div className="btns flex items-center gap-2">
                        <Button type="submit" className="normal-case text-[16px] py-[5px] w-full font-thin mt-1 bg-blue-500" onClick={resetForm}>{t("send")}</Button>
                        <Button type="button" className="normal-case text-[16px] py-[5px] w-full font-thin mt-1 bg-red-700" onClick={resetForm}>{t("reset")}</Button>
                    </div>
                </form>
            </div>
        </>
    )
}