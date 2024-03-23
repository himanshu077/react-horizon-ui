import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Icon from "@/assets/svg/Icon.svg"

const HistoryCard = ({ alt, src,name,time,eth,title }) => {
    return (
        <Card className="!my-3 !p-2 !bg-[--signin-bg] !border-none !shadow-none">
            <CardContent className="!flex !justify-between !gap-3  !p-0">
                <img src={src} alt={alt} className="!rounded-[12px] w-[66px] h-[66px]"/>
                <div className="!py-2">
                    <h4 className="Poppins700 !text-base !leading-[16px] !text-[--card-title] !py-2">{title}</h4>
                    <p className="Poppins400 !text-sm !leading-4 !text-[--tab-color]">{name}</p>
                </div>
                <div className="!flex !gap-2">
                    <img src={Icon} alt="icon" width={9} height={15} />
                    <p className="Poppins700 !text-base !leading-5 !text-[--card-title] !pt-6">{eth}</p>
                </div>
                <p className="Poppins400 !text-base !leading-4 !text-[--tab-color] !pt-6">{time}</p>
            </CardContent>
        </Card>
    );
};

export default HistoryCard;
