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
