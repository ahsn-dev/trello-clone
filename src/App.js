import { El } from "./library/El";
import navbar from "./components/navbar";
import todoTasks from "./components/todoTasks";

const App = () => {
  return El({
    element: "div",
    child: [navbar(), todoTasks()],
  });
};
export default App;
