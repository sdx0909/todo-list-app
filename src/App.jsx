// import "./App.css";
import { FaCheckSquare } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useState } from "react";
import TaskList from "./components/TaskList";

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
      {/* Task Title */}
      <div className="max-w-lg px-5 m-auto mt-20">
        <h1 className="flex justify-center text-3xl font-bold underline">
          My Todo List
          <FaCheckSquare style={{ color: "#42c239" }} />
        </h1>
      </div>
      {/* Add Task-Form */}
      <form action="">
        <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
          <input
            type="text"
            placeholder="start typing..."
            className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-200 rounded-xl placeholder:text-zinc-500 focus:border-zinc-700"
          />
          <button
            type="submit"
            className="px-5 py-2 text-white bg-blue-500 border-2 border-transparent rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
      {/* Task-List */}
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
