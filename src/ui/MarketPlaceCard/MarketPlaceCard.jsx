import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import BlankHeart from "@/assets/BlankHeart.svg"
import SecondaryButton from "../Button/SecondaryButton";

const MarketPlaceCard = ({ src, alt, title, name, id }) => {
    return (
        <Card>
            <CardContent>
                <div className="!relative">
                    <img src={src} alt={alt} className="rounded-lg !my-5" />
                    <img src={BlankHeart} alt="heart" className="!absolute !right-4 !top-4 !p-2 !bg-white !rounded-full" />
                </div>
                <div>
                    <div>
                        <h3 className="!text-[--card-title] Poppins700 !text-[18px] !leading-[30px]">{title}</h3>
                        <p className="!text-[--tab-color] Poppins400 !text-sm !leading-5">{name}</p>
                    </div>
                    <div>
                        <img />
                    </div>
                </div>
                <div className="!flex !justify-between">
                    <div>
                        <CardTitle className="!text-[--divider-color] Poppins700 text-sm !py-2">Current Bid:{id}</CardTitle>
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
