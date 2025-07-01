# Project: TO-DO LIST

* we’re going to create a To-do List application where we can `add`, `edit`, `delete`, and `mark` a task as completed.
* To start building this application, we need to open the command line and use  `Vite` to create a new React application:
  
```cmd
npm create vite@latest todo-list-app -- --template react
```

* As before, you can remove the `App.css` and `assets/` folder because we’re not going to need it.

## Using Tailwind CSS v4

## Get started with Tailwind CSS

* Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
* It's fast, flexible, and reliable — with zero-runtime.
* Installing Tailwind CSS as a `Vite` plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.

### 1. Install Tailwind CSS

* Install `tailwindcss` and `@tailwindcss/vite` via `npm`.

```cmd
npm install tailwindcss @tailwindcss/vite
```

### 2. Configure the Vite plugin

* Add the following two lines `@tailwindcss/vite` plugin to your Vite configuration.

`vite.config.js`

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // 1st line
export default defineConfig({
  plugins: [
    tailwindcss(),// 2nd line
    react()
  ],
})
```

### 3. Import Tailwind CSS

* Add an `@import` to your CSS file `index.css` that imports Tailwind CSS.

```css
@import "tailwindcss";
```

### 4. Start your build process

* Run your build process with `npm run dev` or whatever command is configured in your `package.json` file.

```cmd
npm run dev
```

### 5. Start using Tailwind in your HTML

* You are now ready to use Tailwind in your application.
* Open the `App.jsx` file and create a simple heading component to test this.

```js
function App() {
  return (
    <>
      <div className="text-3xl font-bold text-teal-500">Hello World!</div>
    </>
  );
}

export default App;
```

## Laying the Application’s Foundation

* The application will need several icons to make the buttons appear distinct.
* There’s a library called `react-icons` that provides many publicly available icons.
* To use the library, install it with `npm` first:
  
```cmd
npm install react-icons
```

* Now we can import the icons to the `App.jsx` file like this:

```js
import { FaCheckSquare } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
```

* In your `App` component, create a state named `tasks` as follows:

```js
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
  ]);
```

* This `tasks` state will serve as the dummy data for our tasks until we connect the backend server with our application.
* For now, a local state would be enough so that we can develop the front-end part faster.
* Inside the `App` component, write a `return` statement and add the task `title` part as follows:

```js
return (
    // Task Title
    <div className="max-w-lg px-5 m-auto mt-20">
      <h1 className="flex justify-center text-3xl font-bold underline">
        My Todo List
        <FaCheckSquare style={{ color: "#42c239" }} />
      </h1>
    </div>
  );
```

* Here, we simply create an `<h1>` element wrapped inside a `<div>` element.
* We also use the `<FaCheckSquare>` component imported from the React Icons library.
* The next step is to add the form so that users can enter their tasks:

```js
return (
    <>
      {/* Task Title */}
      <div className="max-w-lg px-5 m-auto mt-20">
        <h1 className="flex justify-center text-3xl font-bold underline">
          My Todo List
          <FaCheckSquare style={{ color: "#42c239" }} />
        </h1>
      </div>
      {/* Add Task-from */}
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
    </>
  );
```

* There’s nothing special with the elements above, except that we add the wrapper `<> .. </>` to wrap the two components we have.
* The `className` is long because we’re using `Tailwind CSS`.
* Below the `<form>` element, create an `<ul>` element where we will iterate over the tasks array and show the tasks as a list.
* We add three buttons in the element so that users can `delete`, `edit`, and `mark` a task as completed.
  
```js
return (
    <>
      {/* Task Title */}
      {/* Add Task-Form */}
      {/* Task-List */}
      <ul className="grid max-w-lg gap-2 px-5 m-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-5 rounded-xl bg-zinc-200 ${
              // if task-copleted looks like "hide"
              task.completed ? "bg-opacity-50 text-zinc-500" : ""
            }`}
          >
            <div className="flex flex-col gap-5">
              <span
                style={{
                  // if task completed then "line-through"
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
              <div className="flex justify-between gap-5">
                <button>
                  {task.completed ? (
                    // if task.completed true then
                    <span className="flex items-center gap-1 hover:underline">
                      <TbRefresh />
                      Set Active
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 hover:underline">
                      <BsCheck2Square />
                      Set Completed
                    </span>
                  )}
                </button>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 hover:underline">
                    <FaRegEdit />
                    Edit
                  </button>
                  <button
                    className="flex items-center gap-1 text-red-500
 hover:underline"
                  >
                    <RiDeleteBin7Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
);
```

* There are also three conditional renderings in this `<ul>` element.
* One for the `<li>` element to make the background less **opaque** when the task is completed:

```js
<li
    key={task.id}
    className={`p-5 rounded-xl bg-zinc-200 ${
      // if task-copleted looks like hide
      task.completed ? "bg-opacity-50 text-zinc-500" : ""
    }`}
>
</li>
```

* One to ~~cross out~~ the task title when the task is completed:

```js
<span
  style={{
  // if task completed then "line-through"
  textDecoration: task.completed ? "line-through" : "none",
  }}
  >
{task.title}
</span>
```

* And one for setting the button text between `Set Active` and `Set Completed`
  
```js
<button>
    {task.completed ? (
      // if task.completed true then
      <span className="flex items-center gap-1 hover:underline">
        <TbRefresh />
        Set Active
      </span>
    ) : (
      <span className="flex items-center gap-1 hover:underline">
        <BsCheck2Square />
        Set Completed
      </span>
    )}
</button>
```

* You can save the changes and run the application to see that we have the application foundation done.

## Updating States and Seperating the Components

* Now that we have a dummy state for the tasks data, the next step is to add functionalities to update the state so that we can `add`, `remove`, and `update` the values.
* Before proceeding with the development, let’s install two more
packages required for this application:

```cmd
npm install react-hot-toast nanoid
```

* The `react-hot-toast` is a package that enables you to create a toast notification, you can see an example demo at **<https://react-hot-toast.com>**.
* The `nanoid` package is used to create a random and unique string ID.
* This will be used every time we add a new task to the state.
* We’re also going to separate the components into smaller pieces of the interface to make it easier to maintain.
* Inside the `src/` folder, create a new folder named `components`.
* Inside the folder, create a new JSX file named `AddTask.jsx`.

### Creating the `AddTask` Component

* The `AddTask` component will host the input and the button required to add a new task to the state.
* We need a `state` to manage the input value, which serves as the title of the new task:
  
```js

```
