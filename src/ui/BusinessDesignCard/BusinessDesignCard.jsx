import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Trending from "@/assets/svg/Trending.svg";
import Timer from "@/assets/svg/Timer.svg";
import Reels from "@/assets/svg/Reels.svg";
import AvatarGroup from "../AvatarGroup/AvatarGroup";
import SecondaryButton from "@/common/Button/SecondaryButton";

const BusinessDesignCard = () => {

    const avatars = [
        { name: 'John Doe', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', image: 'https://via.placeholder.com/150' },
        { name: 'Alice Johnson', image: 'https://via.placeholder.com/150' },
        { name: 'Bob Brown', image: 'https://via.placeholder.com/150' },
        { name: 'Emily White', image: 'https://via.placeholder.com/150' },
        { name: 'Michael Green', image: 'https://via.placeholder.com/150' },
        { name: 'Sarah Black', image: 'https://via.placeholder.com/150' },
        { name: 'David Grey', image: 'https://via.placeholder.com/150' },
      ];
    return (
        <Card className="!p-6 !shadow-none !w-full !border-none !bg-white !rounded-[20px]">
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
                    <AvatarGroup avatars={avatars} maxCount={3}/>
                    <SecondaryButton title="Get Started" className="!rounded-[16px] !bg-[--divider-color] !text-white !text-center !text-sm Poppins700"/>
                </div>
            </CardContent>
        </Card>
    );
};

export default BusinessDesignCard;
