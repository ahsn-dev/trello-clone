import { El } from "@/library/El";

const cards = ({ taskName, taskDate }) => {
  const userDate = new Date();
  return El({
    element: "div",
    className: "bg-white px-3 py-2 flex flex-col gap-6 w-52 rounded mb-4",
    child: [
      El({
        element: "div",
        className: "flex justify-between items-center",
        child: [
          El({
            element: "h3",
            child: taskName,
            className: "text-lg font-bold",
          }),
          El({
            element: "button",
            child: "X",
            className: "text-base text-red-500",
          }),
        ],
      }),
      El({
        element: "div",
        child: [
          El({
            element: "p",
            child: `start: ${userDate.toISOString().split("T")[0]}`,
          }),
          El({
            element: "p",
            child: `end: ${taskDate}`,
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-around items-center",
        child: [
          El({
            element: "button",
            className: "bg-sky-200 px-3 py-2 rounded",
            child: El({
              element: "ion-icon",
              name: "remove-outline",
            }),
          }),
          El({
            element: "button",
            className: "bg-sky-200 px-3 py-2 rounded",
            child: El({
              element: "ion-icon",
              name: "information-circle-outline",
            }),
          }),
          El({
            element: "button",
            className: "bg-sky-200 px-3 py-2 rounded",
            child: El({
              element: "ion-icon",
              name: "checkmark",
            }),
          }),
        ],
      }),
    ],
  });
};

export default cards;
