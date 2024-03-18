import React from "react";
import Edit from "@/assets/Edit.svg";
import SecondaryButton from "../Button/SecondaryButton";

const KanbanCards = ({ title, description, buttonClass, buttonTitle ,imgSrc,imgAlt}) => {
    return (
        <div
            className="!bg-white !rounded-[20px] !p-3 !mb-4"
            style={{ boxShadow: " 0px 18px 40px 0px #7090B01F" }}
        >
            <div className="!flex !justify-between ">
                <h4 className="Poppins700 !text-[18px] !text-[--logo-color] !leading-[28px]">{title}</h4>
                <img src={Edit} alt="edit" />
            </div>
            <img src={imgSrc} alt={imgAlt}/>
            <p className="!px-1 !py-3 Poppins400 !text-base !text-[--tab-color]">{description}</p>
            <div className="!flex !justify-between ">
                <img />
                <SecondaryButton size="sm" className={`${buttonClass}`} title={buttonTitle} />
            </div>
        </div>
    );
};

export default KanbanCards;