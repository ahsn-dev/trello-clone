import { El } from "@/library/El";
import cards from "../cards";

const completed = () => {
  return El({
    element: "div",
    className: "bg-green-200 rounded w-60 flex flex-col p-4",
    child: [
      El({
        element: "h2",
        className: "text-center font-medium text-lg mb-4",
        child: "Completed",
      }),
      El({
        element: "div",
        className: "overflow-scroll h-96",
        id: "completed",
        child: cards({ taskName: "x", taskDate: "y" }),
      }),
    ],
  });
};

export default completed;
