import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { CheckboxButton } from "../CheckboxButton/CheckboxButton";
import More from "@/assets/svg/More.svg";
import SixDots from "@/assets/svg/6-dots.svg"

const TaskCard = () => {
    const TaskData = [
        { id: 0, label: "Landing Page Design", isChecked: false },
        { id: 1, label: "Dashboard Builder", isChecked: true },
        { id: 2, label: "Mobile App Design", isChecked: true },
        { id: 3, label: "Illustrations", isChecked: false },
        { id: 4, label: "Promotional LP", isChecked: true },
    ];

    return (
        <Card className="!p-5 xl:!w-[19.5vw] !w-full !shadow-none !border-none !bg-[--signin-bg] !rounded-[20px]">
            <CardContent className="!p-0">
                <div className="!flex !justify-between">
                    <CheckboxButton
                        label="Tasks"
                        labelClass="!font-bold !text-lg !leading-[30px] !text-[--logo-color]"
                    />
                    <img
                        src={More}
                        alt="more"
                        className="!px-3 !py-4 !bg-[--bg-search] !rounded-[10px] !ml-auto !mb-3"
                    />
                </div>
                {TaskData.map((data) => (
                    <div key={data.id} className="!flex !justify-between" >
                        <CheckboxButton label={data.label} labelClass={`${data.isChecked === true ? "text-[--logo-color]" : "!text-[--tab-color]"} Poppins500 !text-base !leading-[28px] !py-2`} />
                        <img src={SixDots} alt="dots" className="!mx-4"/>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default TaskCard;
