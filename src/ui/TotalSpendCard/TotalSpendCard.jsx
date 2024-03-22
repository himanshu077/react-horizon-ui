import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Calender from "@/assets/svg/Calender.svg";
import Earning from "@/assets/svg/Earning.svg";
import Approved from "@/assets/svg/Approved.svg"
import ArrowUp from "@/assets/svg/ArrowUp.svg";
import SecondaryButton from "@/common/Button/SecondaryButton";
import SpendLineChart from "@/common/Charts/SpendLineChart";

const TotalSpendCard = () => {
    return (
            <Card className="!p-6 !bg-[--signin-bg] xl:!w-[40vw] !w-full !rounded-[20px] !mt-6 !shadow-none !border-none">
                <CardContent className="!p-0">
                    <div className="!flex !justify-between">
                        <SecondaryButton
                            title="This month"
                            size="sm"
                            className="!py-[18px] !px-[13px] !bg-[--bg-search] !text-[--tab-color] !rounded-[7px]"
                            src={Calender}
                            alt="calender"
                        />
                        <img
                            src={Earning}
                            alt="more"
                            className="!p-2 !bg-[--bg-search] !rounded-[10px]"
                        />
                    </div>
                    <div className=" !flex lg:!flex-row !flex-col !items-center !gap-5">
                        <div>
                            <h3 className="Poppins700 !text-[34px] !leading-[42px] !text-[--logo-color]">
                                $37.5K
                            </h3>
                            <div className="!flex !gap-2">
                                <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">
                                    Total Spent
                                </p>
                                <img src={ArrowUp} alt="arrow" />
                                <p className="!text-[--number-color] Poppins700 !text-xs !leading-5 !pt-[2px]">
                                    +2.45%
                                </p>
                            </div>
                            <div className="!flex !gap-2 !my-5">
                                <img src={Approved} alt="approved" className="!w-4 !h-4 !mt-1" />
                                <p className="!text-[--number-color] Poppins700 !text-base !leading-[28px]">On track</p>
                            </div>
                        </div>
                        <SpendLineChart className="!mt-4"/>
                    </div>
                </CardContent>
            </Card>
    );
};

export default TotalSpendCard;
