import { El } from "@/library/El";
import tasks from "../tasks";
import doing from "../doing";
import completed from "../completed";

const todoTasks = () => {
  return El({
    element: "div",
    className: "flex justify-center gap-4 mt-20",
    child: [tasks(), doing(), completed()],
  });
};

export default todoTasks;
