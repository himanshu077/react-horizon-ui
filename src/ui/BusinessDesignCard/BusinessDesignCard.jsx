import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Trending from "@/assets/svg/Trending.svg";
import Timer from "@/assets/svg/Timer.svg";
import Reels from "@/assets/svg/Reels.svg";
import SecondaryButton from "@/common/Button/SecondaryButton";
import AvatarGroup from "../AvatarGroup/AvatarGroup";
import Avatar2 from "@/assets/svg/Avatar2.svg"
import Avatar3 from "@/assets/svg/Avatar3.svg"
import Avatar from "@/assets/svg/Avatar1.svg"
import Avatar4 from "@/assets/svg/Avatar4.svg"

const BusinessDesignCard = () => {

    const avatars = [
        { id: 0, src: Avatar, alt: "avatar" },
        { id: 1, src: Avatar2, alt: "avatar" },
        { id: 2, src: Avatar3, alt: "avatar" },
        { id: 3, src: Avatar4, alt: "avatar" },
    ];
    return (
        <Card className="!p-6 !shadow-none !w-full !border-none !bg-[--signin-bg] !rounded-[20px]">
            <CardContent className="!p-0">
                <div className="!flex !gap-2 ">
                    <img
                        src={Trending}
                        alt="trend"
                        className="!px-3 !py-2 !rounded-[15px] !bg-[--trending-bg]"
                    />
                    <div>
                        <p className="!text-[--tab-color] Poppins700 !text-xs">
                            Business Design
                        </p>
                        <p className="!text-[--logo-color] Poppins700 !text-base">
                            New lession is available
                        </p>
                    </div>
                </div>
                <p className="!text-[--logo-color] Poppins700 !text-xl !py-8">
                    What do you need to know to create better products?
                </p>
                <div className="flex gap-12 !py-3">
                    <div className="flex items-center gap-2">
                        <img src={Timer} alt="timer" />
                        <p className="text-[--logo-color] Poppins700 text-sm">85 mins</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={Reels} alt="reels" />
                        <p className="text-[--logo-color] Poppins700 text-sm">Video format</p>
                    </div>
                </div>
                <div className="!flex !justify-between">
                <AvatarGroup avatars={avatars} maxNumber={2}/>
                    <SecondaryButton title="Get Started" className="!rounded-[16px] !bg-[--divider-color] !text-white !text-center !text-sm Poppins700"/>
                </div>
            </CardContent>
        </Card>
    );
};

export default BusinessDesignCard;
