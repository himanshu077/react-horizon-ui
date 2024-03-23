import React, { useState } from "react";
import SigninBackground from "@/assets/svg/SignInBackground.png";
import { FaAngleLeft } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { MdOutlineVisibility } from "react-icons/md";
import { CheckboxButton } from "@/ui/CheckboxButton/CheckboxButton";
import FullMoonSvg from "@/assets/svg/FullMoonSvg.svg";
import LogoSvg from "@/assets/svg/LogoSvg.svg";
import SecondaryButton from "@/common/Button/SecondaryButton";
import GoogleButton from "@/common/Button/GoogleButton";
import { FaRegSun } from "react-icons/fa";
import { HiMoon } from "react-icons/hi2";
import Footer from "@/common/Footer/Footer";

const SignIn = () => {

  const options = ["Marketplace", "License", "Terms of Use", "Blog"];
  const [value, setValue] = useState("light")

  const handleChange = () => {
    const newTheme = value === "light" ? "dark" : "light";
    setValue(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <div className="!grid lg:!grid-cols-2 !bg-[--signin-bg] !relative">
        <div className="lg:!col-span-1 !p-3 !container !max-w-md !mx-auto !pt-8">
          <a href="/" className="!flex !flex-row !gap-3">
            <FaAngleLeft className="!text-[--tab-color] Poppins500  !leading-[30px] !text-sm !my-2" />
            <p className="!text-[--tab-color] Poppins500 !text-sm !leading-[30px]">
              Back to dashboard
            </p>
          </a>
          <div className="flex flex-col gap-0 !pt-24 w-full my-auto !max-h-screen relative">
            <h4 className="!text-left !text-[--logo-color] !text-4xl Poppins700">
              SignIn
            </h4>
            <p className="!py-3 !text-left !text-[--tab-color] Poppins400 !text-base !leading-[16px] !pb-8">
              Enter your email and password to sign in!
            </p>
            <GoogleButton />
            <div className="flex items-center !gap-3 py-8">
              <div className="border border-[--border-color] h-[1px] w-[182px]"></div>
              <p className="Poppins500 !text-sm !text-[--tab-color]">or</p>
              <div className="border border-[--border-color] h-[1px] w-[183px]"></div>
            </div>
            <div>
              <p className="Poppins500 !text-sm !text-[--logo-color] !py-2">
                Email*
              </p>
              <div className="relative">
                <Input type="email" placeholder="mail@simmmple.com" />
              </div>
            </div>
            <div className="!py-4">
              <p className="Poppins500 !text-sm !text-[--logo-color] !py-2">
                Password*
              </p>
              <div className="relative">
                <Input
                  className="!pr-10"
                  type="password"
                  placeholder="Min. 8 characters"
                />
                <div className="!absolute !inset-y-0 !right-0 !pr-5 flex items-center pointer-events-none">
                  <MdOutlineVisibility className="!h-5 !w-5 text-[--tab-color] !cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="!flex !justify-between !pb-6">
              <CheckboxButton
                label="Keep me logged in"
                labelClass="!text-sm Poppins400 leading-[20px] !text-[--logo-color]"
              />
              <a href="#">
                <p className="!text-[--divider-color] Poppins500 !text-sm">
                  Forget password?
                </p>
              </a>
            </div>
            <SecondaryButton
              variant="sm"
              title="Sign In"
              className="!py-6 !w-full !px-[10vw] !text-center Poppins700 !text-sm !leading-[14px] !bg-[--divider-color] !rounded-[16px]"
            />
            <p className="!text-[--primary-color] !text-sm Poppins400 !py-6">
              Not registered yet?{" "}
              <span className="!text-[--divider-color] !text-sm Poppins700">
                Create an Account
              </span>
            </p>
          </div>
          <p className="Poppins400 !text-sm !text-[--tab-color] !absolute !bottom-0 !mb-12">© 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!</p>
        </div>
        <div
          className="lg:!col-span-1 !hidden !min-h-screen bg-cover bg-no-repeat !rounded-es-[102.56px] lg:!flex !flex-col !items-center !justify-center"
          style={{
            backgroundImage: `url(${SigninBackground})`,
          }}
        >
          <img src={FullMoonSvg} alt="moon" className="!my-8" />
          <img src={LogoSvg} alt="moon" className="!mb-16" />
          <div className="!border-2 !border-[--border-bg] !rounded-[26.37px] !px-9 !py-5">
            <p className="!text-white text-center Poppins400 !text-[17.58px]">
              Learn more about Horizon UI on
            </p>
            <h3 className="!text-white text-center Poppins700 !text-[29.3px]">
              horizon-ui.com
            </h3>
          </div>
        </div>
      </div>
      <div className="!flex xl:!gap-40 !absolute lg:!m-6 !bottom-0 !right-0">
        <div className="!flex !gap-10 !mt-3">
          {options.map((option) => (
            <p key={option} className="Poppins400 !text-sm !text-white">{option}</p>
          ))}
        </div>
        <div onClick={handleChange} className=" !p-4  lg:!inline !hidden !border !border-[#6A53FF] !rounded-full " style={{ background: 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)' }}>
          {value === "light" ? <HiMoon className="!text-white !text-2xl " /> : <FaRegSun className="!text-white !text-2xl" />}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
