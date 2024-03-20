import Earning from "@/assets/Earning.svg"
import Dollar from "@/assets/Dollar.svg"
import AmericaFlag from "@/assets/AmericaFlag.svg"
import Header from "@/ui/Header/Header";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IoChevronDown } from "react-icons/io5";
import NewTask from "@/assets/NewTask.svg"
import CopySvg from "@/assets/CopySvg.svg"

const Dashboard = () => {
    return (
        <>
            <Header title="Main Dashboard" />
            <div className=" !grid lg:!grid-cols-6 md:!grid-cols-3 !grid-cols-1 !gap-3 !px-4">
                <Card className="!p-3 !rounded-[16px] !min-w-[240px] !border-none !shadow-none">
                    <CardContent className="!p-0 !flex !py-3 !gap-4">
                        <img src={Earning} alt="earning" className="!px-4 !py-2 !bg-[--bg-search] !rounded-full"/>
                        <div>
                            <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">Earnings</p>
                            <h4  className="Poppins700 !text-2xl !text-[--logo-color]">$350.4</h4>
                        </div>
                    </CardContent>
                </Card>
                <Card className="!p-3 !rounded-[16px] !min-w-[240px] !border-none !shadow-none">
                    <CardContent className="!p-0 !flex !py-3 !gap-4">
                        <img src={Dollar} alt="earning" className="!px-4 !py-2 !bg-[--bg-search] !rounded-full"/>
                        <div>
                            <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">Spend this month</p>
                            <h4  className="Poppins700 !text-2xl !text-[--logo-color]">$642.39</h4>
                        </div>
                    </CardContent>
                </Card>
                <Card className="!p-3 !rounded-[16px] !min-w-[240px] !border-none !shadow-none">
                    <CardContent className="!p-0">
                            <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">Sales</p>
                            <h4  className="Poppins700 !text-2xl !text-[--logo-color]">$574.34</h4>
                            <p className="!text-[--number-color] Poppins700 !text-xs">+23% <span className="!text-[--tab-color] !text-xs Poppins400">since last month</span></p>
                    </CardContent>
                </Card>
                <Card className="!p-3 !rounded-[16px] !min-w-[240px] !border-none !shadow-none">
                    <CardContent className="!p-0 !flex !justify-evenly !py-3 !gap-4 !items-center">
                        <div>
                            <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">Your balance</p>
                            <h4  className="Poppins700 !text-2xl !text-[--logo-color]">$1,000</h4>
                        </div>
                        <img src={AmericaFlag} alt="earning" />
                       <IoChevronDown className="!text-[--tab-color]"/>
                    </CardContent>
                </Card>
                <Card className="!p-3 !rounded-[16px] !min-w-[240px] !border-none !shadow-none">
                    <CardContent className="!p-0 !flex !py-3 !gap-4">
                        <img src={NewTask} alt="earning" className="!px-4 !py-2 !rounded-full" style={{background: "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"}}/>
                        <div>
                            <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">New Tasks</p>
                            <h4  className="Poppins700 !text-2xl !text-[--logo-color]">154</h4>
                        </div>
                    </CardContent>
                </Card>
                <Card className="!p-3 !rounded-[16px] !min-w-[240px] !border-none !shadow-none">
                    <CardContent className="!p-0 !flex !py-3 !gap-4">
                        <img src={CopySvg} alt="copy" className="!px-4 !py-2 !bg-[--bg-search] !rounded-full"/>
                        <div>
                            <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">Total Projects</p>
                            <h4  className="Poppins700 !text-2xl !text-[--logo-color]">2935</h4>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Dashboard;
