import Approved from "@/assets/svg/Approved.svg";
import Error from "@/assets/svg/Error.svg";
import Disabled from "@/assets/svg/Disabled.svg";

export const checkData = [
    {
      id: 0,
      name: "Marketplace",
      date: "12.Jan.2021",
      progress: "17.5",
      quantity: "2.458",
    },
    {
      id: 1,
      name: "Venus PRO",
      date: "21.Feb.2021",
      progress: "10.8",
      quantity: "1.485",
      isChecked: "true",
    },
    {
      id: 2,
      name: "Uranus Kit",
      date: "13.Mar.2021",
      progress: "21.3",
      quantity: "1.024",
      isChecked: "true",
    },
    {
      id: 3,
      name: "Venus DS",
      date: "24.Jan.2021",
      progress: "31.5",
      quantity: "858",
      isChecked: "true",
    },
    {
      id: 4,
      name: "Venus 3D Asset",
      date: "17.Dec.2021",
      progress: "12.2",
      quantity: "258",
    },
  ];

  export const complexData = [
    {
      id: 0,
      name: "Marketplace",
      date: "12.Jan.2021",
      title1: { src: Approved, label: "Approved" },
      progress: "87",
    },
    {
      id: 1,
      name: "Venus Dashboard Builder",
      date: "21.Feb.2021",
      progress: "44",
      title1: { src: Disabled, label: "Disabled" },
    },
    {
      id: 2,
      name: "Venus Design System",
      date: "13.Mar.2021",
      title1: { src: Error, label: "Error" },
      progress: "80",
    },
    {
      id: 3,
      name: "Uranus",
      date: "24.Jan.2021",
      title1: { src: Approved, label: "Approved" },
      progress: "58",
    },
  ];