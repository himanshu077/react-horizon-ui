import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import AddSign from "@/assets/svg/AddSign.svg";
import AdelaParkson from "@/assets/svg/AdelaParkson.svg";
import ChristianMad from "@/assets/svg/ChristianMad.svg";
import JasonStatham from "@/assets/svg/JasonStatham.svg";
import Options from "@/assets/svg/Options.svg"

const TeamMemberCard = () => {
    const TeamData = [
        {
            id: 0,
            src: AdelaParkson,
            alt: "adlena",
            name: "Adela Parkson",
            post: "Creative Director",
        },
        {
            id: 1,
            src: ChristianMad,
            alt: "christian",
            name: "Christian Mad",
            post: "Product Designer",
        },
        {
            id: 2,
            src: JasonStatham,
            alt: "jason",
            name: "Jason Statham",
            post: "Junior Graphic Designer",
        },
    ];

    return (
        <Card className="!p-4 !bg-[--signin-bg] !w-full !shadow-none !border-none !rounded-[20px]">
            <CardContent className="!p-0">
                <div className="!flex !justify-between">
                    <p className="Poppins700 !text-lg !leading-[32px] !text-[--logo-color]">
                        Team members
                    </p>
                    <img
                        src={AddSign}
                        alt="add"
                        className="!bg-[--icon-add-bg] !p-2 !rounded-[10px]"
                    />
                </div>
                {TeamData.map((data) => (
                    <Card
                        key={data.id}
                        className="!p-2 !mt-3 !w-full !bg-[--signin-bg] !border-none !rounded-[16px]"
                        style={{ boxShadow: "0px 18px 40px 0px #7090B01F" }}
                    >
                        <CardContent className="!p-0 !flex !justify-between">
                            <div className="!flex !gap-3">
                                <img src={data.src} alt={data.alt} />
                                <div>
                                    <p className="Poppins700 !text-base !leading-7 !text-[--logo-color]">{data.name}</p>
                                    <p className="Poppins500 !text-xs !leading-5 !text-[--tab-color]">{data.post}</p>
                                </div>
                            </div>
                            <img src={Options} alt="option" className="!mr-4"/>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
};

export default TeamMemberCard;
