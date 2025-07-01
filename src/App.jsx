import { AddTask, TaskList } from "./components";
import { FaCheckSquare } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  // creating the 'tasks' state
  const [tasks, setTasks] = useState([
    {
      title: "Learn JavaScript",
      completed: true,
      id: 1,
    },
    {
      title: "Learn React",
      completed: false,
      id: 2,
    },
    {
      title: "Learn Node",
      completed: true,
      id: 3,
    },
    {
      title: "Learn Express",
      completed: false,
      id: 4,
    },
  ]);
  return (
    <>
      <Toaster position="bottom-right" />
      {/* Task Title */}
      <div className="max-w-lg px-5 m-auto mt-20">
        <h1 className="flex justify-center text-3xl font-bold underline">
          My Todo List
          <FaCheckSquare style={{ color: "#42C239" }} />
        </h1>
      </div>
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
