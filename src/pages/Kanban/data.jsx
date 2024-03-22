import KanbanImage1 from "@/assets/svg/KanbanImage1.png";
import KanbanImage2 from "@/assets/svg/KanbanImage2.png";

export const backlogData = [
  {
    id: 0,
    title: `Option to "use local/server version" feature`,
    description:
      "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
    buttonClass:
      "!text-white !bg-[--update-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "UPDATES",
  },
  {
    id: 1,
    title: `Add/modify your own CSS-Selectors`,
    imgAlt: "image",
    imgSrc: KanbanImage1,
    description:
      "Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.",
    buttonClass:
      "!text-white !bg-[--pending-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "PENDING",
  },
  {
    id: 2,
    title: `Shortcode for templates to display correctly`,
    description:
      "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
    buttonClass:
      "!text-white !bg-[--error-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "ERRORS",
  },
];

export const inProgressData = [
  {
    id: 0,
    title: `General ideas to improve 'Edit' workflow`,
    description:
      "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
    buttonClass:
      "!text-white !bg-[--pending-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "PENDING",
  },
  {
    id: 1,
    title: `Shortcode for templates to display correctly`,
    description:
      "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",

    buttonClass:
      "!text-white !bg-[--update-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "UPDATES",
  },
  {
    id: 2,
    title: `[UX Design] - Set the default Library tab`,
    imgAlt: "image",
    imgSrc: KanbanImage2,
    description:
      "I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...",
    buttonClass:
      "!text-white !bg-[--error-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "ERRORS",
  },
];

export const doneData = [
  {
    id: 0,
    title: `Copy/Paste elements between pages`,
    description:
      "We can only copy/paste elements (or group of elements) in the same page, which is quite limited.",
    buttonClass:
      "!text-white !bg-[--done-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "DONE",
  },
  {
    id: 1,
    title: `Remove Extra DIV for each container added`,
    description:
      "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
    buttonClass:
      "!text-white !bg-[--done-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "DONE",
  },
  {
    id: 2,
    title: `Add Figma files for the Library design blocks`,
    description:
      "I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...",
    buttonClass:
      "!text-white !bg-[--done-button] !rounded-[10px] !px-7 !py-[14px] !text-[10px] !leading-[15px]",
    buttonTitle: "DONE",
  },
];
