import KanbanCards from "@/ui/KanbanCards/KanbanCards";
import React from "react";
import { backlogData, doneData, inProgressData } from "./data";
import KanbanHeader from "@/ui/KanbanHeader/KanbanHeader";
import Header from "@/common/Header/Header";

const Kanban = () => {
  return (
    <div>
      <Header title="Kanban" />
      <div className="!grid lg:!grid-cols-3 md:!grid-cols-2 !grid-cols-1 !gap-8 !px-6">
        <div className="lg:col-span-1 ">
          <div className="!bg-[--signin-bg] !rounded-[20px] !p-3">
            {" "}
            <KanbanHeader title="Backlog" />
            {backlogData.map((data) => (
              <KanbanCards
                key={data.id}
                title={data.title}
                description={data.description}
                imgAlt={data?.imgAlt}
                imgSrc={data?.imgSrc}
                buttonClass={data.buttonClass}
                buttonTitle={data.buttonTitle}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="!bg-[--signin-bg] !rounded-[20px] !p-3">
            {" "}
            <KanbanHeader title="In progress" />
            {inProgressData.map((data) => (
              <KanbanCards
                key={data.id}
                title={data.title}
                description={data.description}
                imgAlt={data?.imgAlt}
                imgSrc={data?.imgSrc}
                buttonClass={data.buttonClass}
                buttonTitle={data.buttonTitle}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 ">
          <div className="!bg-[--signin-bg] !rounded-[20px] !p-3">
            {" "}
            <KanbanHeader title="Done" />
            {doneData.map((data) => (
              <KanbanCards
                key={data.id}
                title={data.title}
                description={data.description}
                imgAlt={data?.imgAlt}
                imgSrc={data?.imgSrc}
                buttonClass={data.buttonClass}
                buttonTitle={data.buttonTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
