import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import MoonSvg from "@/assets/svg/MoonSvg.svg";
import Exclamtery from "@/assets/svg/Exclamtery.svg";
import BellSvg from "@/assets/svg/BellSvg.svg";
import Avatar from "@/assets/svg/Avatar.svg";
import EthIcon from "@/assets/svg/Icon.svg"
import { FaRegSun } from 'react-icons/fa';

const MarketPlaceHeader = ({ title }) => {
    const [value, setValue] = useState("light")

    const handleChange = () => {
        const newTheme = value === "light" ? "dark" : "light";
        setValue(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };
    return (
        <div className=" container lg:!max-w-8xl !max-w-full lg:!mx-auto !pt-10">
            <div className="!flex lg:!flex-row !flex-col !gap-4 lg:!justify-between !items-center">
                <h3 className="text-[--logo-color] !text-4xl !leading-10">
                    {title}
                </h3>
                <div className="relative !p-2 !my-5 !hidden !bg-[--signin-bg] lg:!flex !items-center !gap-4 !rounded-full" style={{ boxShadow: "14px 17px 40px 4px #7090B014" }}>
                    <div>
                        <Input
                            className="!pl-10 rounded-full !bg-[--bg-search] !w-[214px] border-0"
                            placeholder="Search"
                        />
                        <div className="!absolute !inset-y-0 !left-0 !pl-5 flex items-center pointer-events-none">
                            <IoSearch className="h-5 w-5 text-[--logo-color]" />
                        </div>
                    </div>
                    <div className='!bg-[--bg-search] !rounded-full !flex !gap-3 !p-3'>
                        <img src={EthIcon} alt='eth' />
                        <p className='Poppins700 !text-sm !text-[--tab-color]'>1,924 ETH</p>
                    </div>
                    <img src={BellSvg} alt="bell" />
                    <div onClick={handleChange}>
                        {value === "light" ? <img src={MoonSvg} alt='moon' /> : <FaRegSun className="!text-[--tab-color]" />}
                    </div>
                    <img src={Exclamtery} alt="exclamatery" />
                    <img src={Avatar} alt="avatar" />
                </div>
            </div>
        </div>
    )
}

export default MarketPlaceHeader
