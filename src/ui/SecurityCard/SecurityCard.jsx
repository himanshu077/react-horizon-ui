import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import FingerPrint from "@/assets/svg/FingerPrint.svg";
import SecondaryButton from "@/common/Button/SecondaryButton";

const SecurityCard = () => {
    return (
        <Card className="!p-7 !w-full !bg-[--signin-bg] !rounded-[20px] !shadow-none !border-none">
            <CardContent className="!p-0">
                <img src={FingerPrint} alt="print" />
                <h4 className="Poppins700 !text-2xl !text-[--logo-color] !pt-4">Control card security in-app with a tap</h4>
                <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">Discover our cards benefits, with one tap.</p>
                <SecondaryButton title="Cards" className="!rounded-[16px] !bg-[--divider-color] !w-full !text-white !mt-4 !text-center !text-sm Poppins700"/>
            </CardContent>
        </Card>
    );
};

export default SecurityCard;
