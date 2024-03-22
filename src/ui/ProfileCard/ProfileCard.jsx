import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import Background from "@/assets/svg/Background.png";
import Avatar from "@/assets/svg/Avatar.svg";

const ProfileCard = () => {
  return (
    <Card className="p-5 relative !bg-[--signin-bg] xl:!w-[28vw] !w-full !border-0 !rounded-[20px]">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={Background}
            alt="Background"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={Avatar}
            alt="Avatar"
            className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 !w-[87px] !border-4 !boreder-white rounded-full"
          />
        </div>
        <CardTitle className="Poppins700 !text-xl !text-center !text-[--logo-color] pt-16">
          Adela Parkson
        </CardTitle>
        <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color] !text-center">
          Product Designer
        </p>
        <div className="!flex !justify-center !gap-8 !py-4">
          <div>
            <h4 className="!text-2xl Poppins700 !leading-6 !text-[--logo-color] !text-center">
              17
            </h4>
            <p className="Poppins400 !text-sm !leading-5 !text-center !text-[--tab-color]">
              Posts
            </p>
          </div>
          <div>
            {" "}
            <h4 className="!text-2xl Poppins700 !leading-6 !text-[--logo-color] !text-center">
              9.7k
            </h4>
            <p className="Poppins400 !text-sm !leading-5 !text-center !text-[--tab-color]">
              Followers
            </p>
          </div>
          <div>
            {" "}
            <h4 className="!text-2xl Poppins700 !leading-6 !text-[--logo-color] !text-center">
              274
            </h4>
            <p className="Poppins400 !text-sm !leading-5 !text-center !text-[--tab-color]">
              Followers
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
