import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import BlankHeart from "@/assets/BlankHeart.svg"
import SecondaryButton from "../Button/SecondaryButton";
import AvatarGroup from "../AvatarGroup/AvatarGroup";

const MarketPlaceCard = ({ src, alt, title, name, eid }) => {
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
        <Card>
            <CardContent>
                <div className="!relative">
                    <img src={src} alt={alt} className="rounded-lg !my-5" />
                    <img src={BlankHeart} alt="heart" className="!absolute !right-4 !top-4 !p-2 !bg-white !rounded-full" />
                </div>
                <div className="!flex !justify-between">
                    <div>
                        <h3 className="!text-[--card-title] Poppins700 !text-[18px] !leading-[30px]">{title}</h3>
                        <p className="!text-[--tab-color] Poppins400 !text-sm !leading-5">{name}</p>
                    </div>
                    <div>
                        <AvatarGroup avatars={avatars} maxCount={3}/>
                    </div>
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
