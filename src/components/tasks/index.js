import { El } from "@/library/El";
import cards from "../cards";

const tasks = () => {
  return El({
    element: "div",
    className: "bg-sky-200 rounded w-60 flex flex-col p-4",
    child: [
      El({
        element: "h2",
        className: "text-center font-medium text-lg mb-4",
        child: "Tasks",
      }),
      El({
        element: "div",
        className: "overflow-scroll h-96",
        id: "tasks",
        child: cards({ taskName: "x", taskDate: "y" }),
      }),
    ],
  });
};

export default tasks;
