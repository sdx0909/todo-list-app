import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const AddTask = ({ setTasks }) => {
  const [title, setTitle] = useState("");

  const addTask = (title) => {
    const newTask = {
      title: title,
      completed: false,
      id: nanoid(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
    toast.success("New Task Added!");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("title>", title);
    if (title.trim() !== "") {
      addTask(title);
    } else {
      toast.error("task field cannot be empty");
    }
  };
  return (
    <form action="">
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
          type="text"
          placeholder="start typing..."
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-200 rounded-xl placeholder:text-zinc-500 focus:border-zinc-700"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-5 py-2 text-white bg-blue-500 border-2 border-transparent rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
