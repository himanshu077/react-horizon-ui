import React from "react";
import GoogleIcon from "@/assets/svg/GoogleIcon.svg";
import { Button } from "@/components/ui/button";

const GoogleButton = () => {
  return (
    <div>
      <Button className="bg-[--bg-search] !w-full !rounded-[16px] hover:!text-[--logo-color] hover:!bg-[--bg-search] !px-[6.4vw]" size="lg" variant="default">
        <img src={GoogleIcon} alt="google-icon" />{" "}
        <span className="Poppins500 !text-[--logo-color] !px-4">Sign in with Google</span>
      </Button>
    </div>
  );
};

export default GoogleButton;
