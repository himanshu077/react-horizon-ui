import SecondaryButton from "@/ui/Button/SecondaryButton";
import Header from "@/ui/Header/Header";
import KanbanCards from "@/ui/KanbanCards/KanbanCards";
import React from "react";

const Kanban = () => {
  return (
    <div>
      <Header title="Kanban" />
      <div className="!grid !grid-cols-3 !gap-8 !px-6 !mt-12">
        <div className="col-span-1 !bg-white !rounded-[20px] !p-3">
          <div className="!flex !justify-between !pb-6">
            <p className="Poppins700 !text-[22px] !leading-[32px] !text-[--logo-color]">
              Backlog
            </p>
            <SecondaryButton
              size="sm"
              className="!bg-[--text-color] !py-[16px] !px-10 !rounded-[12px] !text-lg !text-[--logo-color]"
              title="+"
            />
          </div>
          <KanbanCards
            title={`Option to "use local/server version" feature`}
            description="It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time."
            buttonClass="!text-white !bg-[--update-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="UPDATES"
          />
          <KanbanCards
            title={`Add/modify your own CSS-Selectors`}
            description="Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus."
            buttonClass="!text-white !bg-[--pending-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="PENDING"
          />
          <KanbanCards
            title={`Shortcode for templates to display correctly`}
            description="When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor."
            buttonClass="!text-white !bg-[--error-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="ERRORS"
          />
        </div>
        <div className="col-span-1 !bg-white !rounded-[20px] !p-3">
          {" "}
          <div className="!flex !justify-between !pb-6">
            <p className="Poppins700 !text-[22px] !leading-[32px] !text-[--logo-color]">
              In progress
            </p>
            <SecondaryButton
              size="sm"
              className="!bg-[--text-color] !py-[16px] !px-10 !rounded-[12px] !text-lg !text-[--logo-color]"
              title="+"
            />
          </div>
          <KanbanCards
            title={`General ideas to improve 'Edit' workflow`}
            description="Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default)."
            buttonClass="!text-white !bg-[--pending-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="PENDING"
          />
          <KanbanCards
            title={`Shortcode for templates to display correctly`}
            description="When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor."
            buttonClass="!text-white !bg-[--update-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="UPDATES"
          />
          <KanbanCards
            title={`[UX Design] - Set the default Library tab`}
            description="I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already..."
            buttonClass="!text-white !bg-[--error-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="ERRORS"
          />
        </div>
        <div className="col-span-1 !bg-white !rounded-[20px] !p-3">
          {" "}
          <div className="!flex !justify-between !pb-6">
            <p className="Poppins700 !text-[22px] !leading-[32px] !text-[--logo-color]">
              Done
            </p>
            <SecondaryButton
              size="sm"
              className="!bg-[--text-color] !py-[16px] !px-10 !rounded-[12px] !text-lg !text-[--logo-color]"
              title="+"
            />
          </div>
          <KanbanCards
            title={`Copy/Paste elements between pages`}
            description="We can only copy/paste elements (or group of elements) in the same page, which is quite limited."
            buttonClass="!text-white !bg-[--done-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="DONE"
          />
          <KanbanCards
            title={`Add Figma files for the Library design blocks`}
            description="I still hope there won't have an extra div for each container we added. It should be something for better styling..."
            buttonClass="!text-white !bg-[--done-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="DONE"
          />
          <KanbanCards
            title={`Option to "use local/server version" feature`}
            description="I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads..."
            buttonClass="!text-white !bg-[--done-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]"
            buttonTitle="DONE"
          />
        </div>
      </div>
    </div>
  );
};

export default Kanban;
