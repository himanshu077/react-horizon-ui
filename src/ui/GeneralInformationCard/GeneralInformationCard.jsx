import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const GeneralInformationCard = ({ title, subTitle }) => {
    return (
        <Card className="p-6 !rounded-[16px] bg-[--signin-bg] !border-none" style={{ boxShadow: "0px 18px 40px 0px #7090B01F" }}>
            <CardContent className="p-0">
                <p className="Poppins500 !text-sm !text-[--tab-color]">{title}</p>
                <p className="Poppins400 !text-base !text-[--logo-color]">{subTitle}</p>
            </CardContent>
        </Card>
    );
};

export default GeneralInformationCard;
