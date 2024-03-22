import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import EditSvg from "@/assets/svg/Edit.svg";

const AllProjectCard = ({ title, project, src, alt }) => {
  return (
    <Card
      className="!p-3 !mt-6 bg-[--signin-bg] !border-none "
      style={{ boxShadow: " 0px 18px 40px 0px #7090B01F" }}
    >
      <CardContent className="p-0 !flex !justify-between">
        <img src={src} alt={alt} className="!rounded-md" />
        <div className="!flex !flex-col !justify-center">
          <h4 className="Poppins500 !text-base !leading-4 !text-[--logo-color] !py-1">
            {title}
          </h4>
          <p className="!text-sm Poppins500 !text-[--tab-color] !leading-5">
            {project} .{" "}
            <a href="#" className="underline !text-[--divider-color]">
              See project details
            </a>
          </p>
        </div>
        <img src={EditSvg} alt="edit" />
      </CardContent>
    </Card>
  );
};

export default AllProjectCard;
