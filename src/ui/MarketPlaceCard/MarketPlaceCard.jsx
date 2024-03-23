import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import BlankHeart from "@/assets/svg/BlankHeart.svg"
import SecondaryButton from "@/common/Button/SecondaryButton";
import Avatar2 from "@/assets/svg/Avatar2.svg"
import Avatar3 from "@/assets/svg/Avatar3.svg"
import Avatar from "@/assets/svg/Avatar1.svg"
import Avatar4 from "@/assets/svg/Avatar4.svg"
import AvatarGroup from "../AvatarGroup/AvatarGroup";

const MarketPlaceCard = ({ src, alt, title, name, eid }) => {
    const avatars = [
        { id: 0, src: Avatar, alt: "avatar" },
        { id: 1, src: Avatar2, alt: "avatar" },
        { id: 2, src: Avatar3, alt: "avatar" },
        { id: 3, src: Avatar4, alt: "avatar" },
    ];

    return (
        <Card className="!p-4 !bg-[--signin-bg] !w-full !border-none !shadow-none">
            <CardContent className="p-0">
                <div className="!relative">
                    <img src={src} alt={alt} className="rounded-lg !mb-4 !w-full" />
                    <img src={BlankHeart} alt="heart" className="!absolute !right-4 !top-4 !p-2 !bg-[--signin-bg] !rounded-full" />
                </div>
                <div className="!flex !justify-between">
                    <div>
                        <h3 className="!text-[--card-title] Poppins700 !text-[18px] !leading-[30px]">{title}</h3>
                        <p className="!text-[--tab-color] Poppins400 !text-sm !leading-5">{name}</p>
                    </div>
                    <AvatarGroup avatars={avatars} maxNumber="3"/>
                </div>
                <div className="!flex !justify-between">
                    <div>
                        <CardTitle className="!text-[--divider-color] Poppins700 text-sm !py-2">Current Bid:{eid}</CardTitle>
                    </div>
                    <div>
                        <SecondaryButton title="Place Bid" size="sm" className="bg-[--eid-button-color] !text-white !rounded-full !py-[17px]" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MarketPlaceCard;
