import { El } from "@/library/El";
import cards from "../cards";

const navbar = () => {
  return El({
    element: "form",
    onsubmit: (e) => {
      e.preventDefault();
      const [taskName, taskDate] = e.target.elements;
      const tasks = document.getElementById("tasks");
      tasks.append(
        cards({ taskName: taskName.value, taskDate: taskDate.value })
      );
    },
    className: "flex justify-center items-center mt-4 gap-4",
    child: [
      El({
        element: "input",
        type: "text",
        placeholder: "Todo title",
        className:
          "px-2 py-2 w-96 rounded border border-solid border-slate-200",
      }),
      El({
        element: "input",
        type: "date",
        id: "date",
        className:
          "px-2 py-2 w-96 rounded border border-solid border-slate-200",
      }),
      El({
        element: "button",
        type: "submit",
        child: "Submit",
        className:
          "bg-green-500 text-white rounded px-8 py-2.5 hover:bg-green-700",
      }),
    ],
  });
};

export default navbar;
