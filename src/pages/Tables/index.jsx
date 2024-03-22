import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { checkData, complexData, coulmnData, developmentData } from "./data";
import { Progress } from "@/components/ui/progress";
import { CheckboxButton } from "@/ui/CheckboxButton/CheckboxButton";
import Header from "@/common/Header/Header";
import TableData from "@/common/TableData/TableData";
import TableHeader from "@/common/TableHeader/TableHeader";

const Tables = () => {
  const developmentColumns = [
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title}
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title1",
      cell: ({ cell }) => {
        const { src, src1, src2 } = cell.row.original.title1 || {};
        const images = [src, src1, src2]
          .filter(Boolean)
          .map((src, index) => (
            <img key={`img${index}`} src={src} alt={`img${index}`} />
          ));
        return <div className="flex flex-row gap-2">{images}</div>;
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title2",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title2}
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title3",
      cell: (props) => {
        const title = props.cell.row.original.title3;
        return (
          <div className="!flex !justify-between !gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">{title}%</p>
            <Progress value={title} className="!h-2 !mt-2 !w-full" />
          </div>
        );
      },
    },
  ];

  const checkColumns = [
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <CheckboxButton
              label={props.cell.row.original.title}
              labelClass="font-bold !text-sm !text-[--logo-color]"
            />
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title1",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title1}%
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title2",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title2}
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title3",
      cell: (props) => {
        const title = props.cell.row.original.title3;
        return (
          <div className="!flex !justify-between !gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">{title}</p>
          </div>
        );
      },
    },
  ];
  const Columns = [
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title}
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title1}
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title2",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title2}
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title3",
      cell: (props) => {
        const title = props.cell.row.original.title3;
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
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title}
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title1",
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
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title2",
      cell: (props) => {
        return (
          <div className="flex flex-row gap-2">
            <p className="Poppins700 !text-sm !text-[--logo-color]">
              {props.cell.row.original.title2}
            </p>
          </div>
        );
      },
    },
    {
      header: "Title",
      icon: <MdKeyboardArrowDown />,
      accessorKey: "title3",
      cell: (props) => {
        const title = props.cell.row.original.title3;
        return (
          <div className="!flex !justify-between !gap-2">
            <Progress value={title} className="!h-2 !w-full" />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Header title="Tables" />
      <div className="!grid lg:!grid-cols-2 !grid-cols-1 !gap-4 !px-3">
        <div className="!rounded-[16px] !bg-[--signin-bg]">
          <TableHeader title="Development Table" />
          <TableData
            columns={developmentColumns}
            data={developmentData}
            loading={false}
          />
        </div>
        <div className="!rounded-[16px] !bg-[--signin-bg]">
          <TableHeader title="Check Table" />
          <TableData columns={checkColumns} data={checkData} loading={false} />
        </div>
        <div className="!rounded-[16px] !bg-[--signin-bg]">
          <TableHeader title="4-Column Table" />
          <TableData columns={Columns} data={coulmnData} loading={false} />
        </div>
        <div className="!rounded-[16px] !bg-[--signin-bg]">
          <TableHeader title="Complex Table" />
          <TableData
            columns={complexColumns}
            data={complexData}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Tables;
