import { Card, CardContent } from "@/components/ui/card";
import ArrowDown from "@/assets/svg/ArrowDown.svg";
import React from "react";
import PieCharts from "@/common/Charts/PieChart";

const YourPieChart = () => {
  return (
    <Card className="!p-5 !bg-[--signin-bg] xl:!w-[19.5vw] lg:!w-full !rounded-[20px] !shadow-none !border-none">
      <CardContent className="p-0">
        <div className="!flex !justify-between">
          <h4 className="Poppins700 !text-base !leading-7 !text-[--logo-color]">
            Your Pie Chart
          </h4>
          <div className="!flex !gap-2">
            <p className="Poppins700 !text-sm !text-[--tab-color]">Monthly</p>
            <img src={ArrowDown} alt="arrow" />
          </div>
        </div>
        <PieCharts />
        <Card
          className="!p-5 !bg-[--signin-bg] !w-full !rounded-[20px] !border-none"
          style={{ boxShadow: "0px 18px 40px 0px #7090B01F" }}
        >
          <CardContent className="p-0 !flex  !justify-between">
            <div>
              <div className="!flex !gap-2">
                <div className="!w-2 !h-2 !rounded-full !bg-[--divider-color] !mt-[6px]"></div>
                <p className="Poppins500 !text-xs !leading-5 !text-[--tab-color]">
                  Your files
                </p>
              </div>
              <p className="Poppins700 !text-lg  !text-[--logo-color] !text-center">
                63%
              </p>
            </div>
            <div>
              <div className="!flex !gap-2">
                <div className="!w-2 !h-2 !rounded-full !bg-[--chart-line-color] !mt-[6px]"></div>
                <p className="Poppins500 !text-xs !leading-5 !text-[--tab-color]">
                  System
                </p>
              </div>
              <p className="Poppins700 !text-lg  !text-[--logo-color] !text-center">
                25%
              </p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default YourPieChart;
