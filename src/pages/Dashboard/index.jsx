import Cards from "@/ui/Cards/Cards";
import Header from "@/ui/Header/Header";
import React from "react";
import Earning from "@/assets/Earning.svg"
import Dollar from "@/assets/Dollar.svg"

const Dashboard = () => {
    return (
        <>
            <Header title="Main Dashboard" />
            <div className="container !mx-auto !max-w-8xl pt-24 !flex !gap-3">
                <Cards title="Earnings" src={Earning} alt="earning" subTitle="$350.4" />
                <Cards title="Spend this month" src={Dollar} alt="dollar" subTitle="$642.39"/>
            
            </div>
        </>
    );
};

export default Dashboard;
