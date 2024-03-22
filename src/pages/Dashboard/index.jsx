import Earning from "@/assets/svg/Earning.svg";
import Dollar from "@/assets/svg/Dollar.svg";
import AmericaFlag from "@/assets/svg/AmericaFlag.svg";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IoChevronDown } from "react-icons/io5";
import NewTask from "@/assets/svg/NewTask.svg";
import CopySvg from "@/assets/svg/CopySvg.svg";
import TotalSpendCard from "@/ui/TotalSpendCard/TotalSpendCard";
import WeeklyRevenueCard from "@/ui/WeeklyRevenueCard/WeeklyRevenueCard";
import { CheckboxButton } from "@/ui/CheckboxButton/CheckboxButton";
import { checkData, complexData } from "./data";
import YourPieChart from "@/ui/YourPieChart/YourPieChart";
import DailyTrafficCard from "@/ui/DailyTrafficCard/DailyTrafficCard";
import { Progress } from "@/components/ui/progress";
import TaskCard from "@/ui/TaskCard/TaskCard";
import TableData from "@/common/TableData/TableData";
import Header from "@/common/Header/Header";
import TableHeader from "@/common/TableHeader/TableHeader";
import BusinessDesignCard from "@/ui/BusinessDesignCard/BusinessDesignCard";
import TeamMemberCard from "@/ui/TeamMemberCard/TeamMemberCard";
import SecurityCard from "@/ui/SecurityCard/SecurityCard";
import StarbugsCard from "@/ui/StarbugsCard/StarbugsCard";
import { Calendar } from "@/components/ui/calendar";

const Dashboard = () => {
  const [date, setDate] = React.useState(new Date())
  const checkColumns = [
    {
      header: "NAME",
      accessorKey: "name",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <CheckboxButton
              label={props.cell.row.original.name}
              labelClass="font-bold !text-sm !text-[--logo-color]"
            />
          </div>
        );
      },
    },
    {
      header: "PROGRESS",
      accessorKey: "progress",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.progress}%
            </p>
          </div>
        );
      },
    },
    {
      header: "QUANTITY",
      accessorKey: "quantity",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.quantity}
            </p>
          </div>
        );
      },
    },
    {
      header: "DATE",
      accessorKey: "date",
      cell: (props) => {
        const title = props.cell.row.original.date;
        return (
          <div className="!flex !justify-between !gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">{title}</p>
          </div>
        );
      },
    },
  ];

  const complexColumns = [
    {
      header: "NAME",
      accessorKey: "name",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.name}
            </p>
          </div>
        );
      },
    },
    {
      header: "STATUS",
      accessorKey: "status",
      cell: (props) => {
        const src = props.cell.row.original.title1?.src;
        return (
          <div className="flex flex-row gap-2">
            <img src={src} alt="img" />
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title1?.label}
            </p>
          </div>
        );
      },
    },
    {
      header: "DATE",
      accessorKey: "date",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.date}
            </p>
          </div>
        );
      },
    },
    {
      header: "PROGRESS",
      accessorKey: "progress",
      cell: (props) => {
        const title = props.cell.row.original.progress;
        return (
          <div className="!flex !justify-between !gap-2">
            <Progress value={title} className="!h-2" />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Header title="Main Dashboard" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-5">
        <Card className="!p-3 !rounded-[16px] xl:!w-[13vw] bg-[--signin-bg] !w-full !border-none !shadow-none">
          <CardContent className="!p-0 !flex !py-2 !gap-4">
            <img
              src={Earning}
              alt="earning"
              className="!px-4 !py-2 !bg-[--bg-search] !rounded-full"
            />
            <div>
              <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">
                Earnings
              </p>
              <h4 className="Poppins700 !text-2xl !text-[--logo-color]">
                $350.4
              </h4>
            </div>
          </CardContent>
        </Card>
        <Card className="!p-3 !rounded-[16px] xl:!w-[13vw] bg-[--signin-bg] !w-full !border-none !shadow-none">
          <CardContent className="!p-0 !flex !py-2 !gap-4">
            <img
              src={Dollar}
              alt="earning"
              className="!px-4 !py-2 !bg-[--bg-search] !rounded-full"
            />
            <div>
              <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">
                Spend this month
              </p>
              <h4 className="Poppins700 !text-2xl !text-[--logo-color]">
                $642.39
              </h4>
            </div>
          </CardContent>
        </Card>
        <Card className="!p-3 !rounded-[16px] xl:!w-[13vw] bg-[--signin-bg] !w-full !border-none !shadow-none">
          <CardContent className="!p-0">
            <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">
              Sales
            </p>
            <h4 className="Poppins700 !text-2xl !text-[--logo-color]">
              $574.34
            </h4>
            <p className="!text-[--number-color] Poppins700 !text-xs">
              +23%{" "}
              <span className="!text-[--tab-color] !text-xs Poppins400">
                since last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card className="!p-3 !rounded-[16px] xl:!w-[13vw] bg-[--signin-bg] !w-full !border-none !shadow-none">
          <CardContent className="!p-0 !flex lg:!justify-evenly !py-2 !gap-4 !items-center">
            <div>
              <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">
                Your balance
              </p>
              <h4 className="Poppins700 !text-2xl !text-[--logo-color]">
                $1,000
              </h4>
            </div>
            <img src={AmericaFlag} alt="earning" />
            <IoChevronDown className="!text-[--tab-color]" />
          </CardContent>
        </Card>
        <Card className="!p-3 !rounded-[16px] xl:!w-[13vw] bg-[--signin-bg] !w-full !border-none !shadow-none">
          <CardContent className="!p-0 !flex !py-2 !gap-4">
            <img
              src={NewTask}
              alt="earning"
              className="!px-4 !py-2 !rounded-full"
              style={{
                background: "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)",
              }}
            />
            <div>
              <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">
                New Tasks
              </p>
              <h4 className="Poppins700 !text-2xl !text-[--logo-color]">154</h4>
            </div>
          </CardContent>
        </Card>
        <Card className="!p-3 !rounded-[16px] xl:!w-[13vw] !w-full !border-none bg-[--signin-bg] !shadow-none">
          <CardContent className="!p-0 !flex !py-2 !gap-4">
            <img
              src={CopySvg}
              alt="copy"
              className="!px-4 !py-2 !bg-[--bg-search] !rounded-full"
            />
            <div>
              <p className="Poppins500 !text-sm !leading-6 !text-[--tab-color]">
                Total Projects
              </p>
              <h4 className="Poppins700 !text-2xl !text-[--logo-color]">
                2935
              </h4>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="!flex xl:!flex-row !flex-col !gap-5 !mx-6">
        <TotalSpendCard />
        <WeeklyRevenueCard />
      </div>
      <div className="!m-5 !flex xl:!flex-row !flex-col !gap-5">
        <div className="!rounded-[16px] xl:!w-[40vw] !w-full !bg-[--signin-bg]">
          <TableHeader title="Check Table" />
          <TableData columns={checkColumns} data={checkData} loading={false} />
        </div>
        <DailyTrafficCard />
        <YourPieChart />
      </div>
      <div className="!m-5 !flex xl:!flex-row !flex-col !gap-5">
        <div className="!rounded-[16px] xl:!w-[40vw] !w-full !bg-[--signin-bg]">
          <TableHeader title="Complex Table" />
          <TableData
            columns={complexColumns}
            data={complexData}
            loading={false}
          />
        </div>
        <TaskCard />
        <Calendar
          className="!bg-[--signin-bg] !rounded-[20px] xl:!w-[19.5vw] !w-full !flex !justify-center"
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </div>
      <div className="!mx-5 !flex xl:!flex-row !flex-col !gap-5">
        <BusinessDesignCard />
        <TeamMemberCard />
        <SecurityCard />
        <StarbugsCard />
      </div>
    </>
  );
};

export default Dashboard;
