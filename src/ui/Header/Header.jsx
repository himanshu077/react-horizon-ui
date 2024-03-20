import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import MoonSvg from "@/assets/MoonSvg.svg";
import Exclamtery from "@/assets/Exclamtery.svg";
import BellSvg from "@/assets/BellSvg.svg";
import Avatar from "@/assets/Avatar.svg";

const Header = ({ title }) => {
    return (
        <div className=" container lg:!max-w-8xl !max-w-full lg:!mx-auto !pt-10">
            <div className="!flex lg:!flex-row !flex-col !gap-4 lg:!justify-between !items-center">
                <h3 className="text-[--logo-color] !text-4xl !leading-10">
                    {title}
                </h3>
                <div className="relative !p-2 !my-5 !hidden !bg-white lg:!flex !items-center !gap-4 !rounded-full" style={{ boxShadow: "14px 17px 40px 4px #7090B014" }}>
                    <div className=''>
                        <Input
                            className="!pl-10 rounded-full !bg-[--bg-search] !w-[214px] border-0"
                            placeholder="Search"
                        />
                        <div className="!absolute !inset-y-0 !left-0 !pl-5 flex items-center pointer-events-none">
                            <IoSearch className="h-5 w-5 text-[--logo-color]" />
                        </div>
                    </div>
                    <img src={BellSvg} alt="bell" />
                    <img src={MoonSvg} alt="moon" />
                    <img src={Exclamtery} alt="exclamatery" />
                    <img src={Avatar} alt="avatar" />
                </div>
            </div>
        </div>
    )
}

export default Header
