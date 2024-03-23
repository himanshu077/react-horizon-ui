import React from "react";
import FullMoonSvg from "@/assets/svg/FullMoonSvg.svg";

const UpgradeToPRO = () => {
  return (
    <div className="relative">
      <div
        className="!w-[11vw] !rounded-[24px] !flex !p-4 !flex-col !justify-center !items-center !mt-56"
        style={{
          background: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
        }}
      >
        <p className=" Poppins700 !pt-8 !leading-7 !text-white !text-base !text-center">
        Upgrade to PRO
        </p>
        <p className="Poppins500  !text-white !text-sm !pt-4 !text-center">
        to get access to all features! Connect with Venus World! 
        </p>
   
      </div>
      <div className="absolute -top-8 left-[5.5vw] transform -translate-x-1/2 ">
        <div className="!text-white !text-3xl !p-3 !flex !justify-center !items-center !rounded-full !border-[5px] border-white"
          style={{
            background: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
          }}
        >
          <img src={FullMoonSvg} alt="full " className="!w-[41px] !h-[41px]" />
        </div>
      </div>
    </div>
  );
};

export default UpgradeToPRO;
