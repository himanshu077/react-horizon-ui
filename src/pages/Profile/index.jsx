import { Card, CardContent } from "@/components/ui/card";
import ProfileCard from "@/ui/ProfileCard/ProfileCard";
import MoreSvg from "@/assets/svg/More.svg";
import StorageSvg from "@/assets/svg/Storage.svg";
import React from "react";
import { Progress } from "@/components/ui/progress";
import DownloadSvg from "@/assets/svg/Download.svg";
import { AllProjectData, GeneralInfoData, NotificationData } from "./data";
import AllProjectCard from "@/ui/AllProjectCard/AllProjectCard";
import GeneralInformationCard from "@/ui/GeneralInformationCard/GeneralInformationCard";
import NotificationSwitch from "@/ui/NotificationSwitch/NotificationSwitch";
import Header from "@/common/Header/Header";

const Profile = () => {
  return (
    <div>
      <Header title="Profile" />
      <div className="!flex xl:!flex-row !flex-col !gap-4 !px-5">
        <ProfileCard />
        <Card className="p-5 xl:!w-[20vw] !w-full bg-[--signin-bg] !border-none !shadow-none !rounded-[20px]">
          <CardContent className="p-0">
            <img
              src={MoreSvg}
              alt="more"
              className="!px-3 !py-4 !bg-[--bg-search] !rounded-[10px] !ml-auto !mb-3"
            />
            <div className="!flex !flex-col !items-center">
              <img
                src={StorageSvg}
                alt="storage"
                className="!p-5 !bg-[--bg-search] !rounded-full"
              />
              <h4 className="Poppins700 !text-center !text-2xl !text-[--logo-color] !py-3">
                Your storage
              </h4>
              <p className="Poppins400 !text-base  !leading-5 !text-center !text-[--tab-color] !pb-4">
                Supervise your drive space <p>in the easiest way</p>
              </p>
            </div>
            <div className="!flex !justify-between !pt-5">
              <p className="Poppins400 !text-sm !leading-5 !text-center !text-[--tab-color]">
                25.6 Gb
              </p>
              <p className="Poppins400 !text-sm !leading-5 !text-center !text-[--tab-color]">
                50 Gb
              </p>
            </div>
            <Progress value="53" className="h-2 !mt-3 !w-full" />
          </CardContent>
        </Card>
        <Card className="!p-6 xl:!w-[31.4vw] !w-full bg-[--signin-bg] !rounded-[20px] !border-none !shadow-none">
          <CardContent className="p-0 !flex !flex-row !gap-4">
            <div className="!border-dashed !border-2 border-[--border-color] !p-4 !h-[311px] !max-w-[268px] !bg-[--bg-download] !rounded-[13px] flex flex-col !items-center !justify-center">
              <img src={DownloadSvg} alt="download" />
              <h4 className="text-[--divider-color] text-xl text-center Poppins700 py-2">
                Upload Files
              </h4>
              <p className="text-[--tab-color] text-xs text-center Poppins500">
                PNG, JPG, and GIF files are allowed
              </p>
            </div>
            <div className="!flex !flex-col !justify-center !items-center">
              <h4 className="!text-2xl Poppins700 !text-[--logo-color] !text-center">
                Complete your profile
              </h4>
              <p className="Poppins400 !text-base !leading-[26px] !text-[--tab-color] !text-center">
                Stay on the pulse of distributed
                <br /> projects with an anline whiteboard
                <br /> to plan, coordinate and discuss
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="!flex xl:!flex-row !flex-col !gap-4 !px-5 !pt-6">
        {/* All Project card */}
        <Card
          style={{ boxShadow: "14px 17px 40px 4px #7090B014" }}
          className="p-5 !rounded-[20px] bg-[--signin-bg] !border-none xl:!w-[26.2vw] !w-full"
        >
          <CardContent className="p-0">
            <h4 className="Poppins700 !text-2xl !text-[--logo-color] !py-3">
              All Projects
            </h4>
            <p className="Poppins400 !text-base !text-[--tab-color]">
              Here you can find more details about your projects. Keep you
              user engaged by providing meaningful information.
            </p>
            {AllProjectData.map((item) => (
              <AllProjectCard
                key={item.id}
                title={item.title}
                project={item.project}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </CardContent>
        </Card>
        {/* General information card */}
        <Card className="p-5 !rounded-[20px] bg-[--signin-bg] xl:!w-[32vw] !w-full !border-none">
          <CardContent className="!p-0">
            <h4 className="Poppins700 !text-2xl !text-[--logo-color] !py-3">
              General Information
            </h4>
            <p className="Poppins400 !text-base !leading-[26px] !text-[--tab-color]">
              As we live, our hearts turn colder. Cause pain is what we go
              through as we
              become older. We get insulted by others, lose trust for
              those others. We get
              back stabbed by friends. It becomes harder for us to give
              others a hand. We
              get our heart broken by people we love, even that we give
              them all...
            </p>
            <div className="!grid !grid-cols-2 !gap-4">
              {GeneralInfoData.map((data) => (
                <GeneralInformationCard
                  key={data.id}
                  title={data.title}
                  subTitle={data.subTitle}
                />
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Notification card */}
        <Card className="p-4 !rounded-[20px] bg-[--signin-bg] xl:!w-[21vw] !w-full !border-none">
          <CardContent className="!p-0">
            <div className="!flex !justify-between">
              <h4 className="Poppins700 !text-2xl !text-[--logo-color] !py-3">
                Notifications
              </h4>
              <img
                src={MoreSvg}
                alt="more"
                className="!px-3 !py-4 !bg-[--bg-search] !rounded-[10px] !ml-auto !mb-3"
              />
            </div>
            {NotificationData.map((data) => (
              <NotificationSwitch
                key={data.id}
                id={data.id}
                label={data.label}
                isChecked={data.isChecked}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
