<H1 align ="center" > ToDo List  </h1>
<h5  align ="center"> 
This is a simple to-do list application built with <strong> ReactJS</strong> and <strong>TypeScript</strong>. It allows users to view a list of to-do items fetched from a public API, add new items, mark items as completed, and delete items. All new, completed </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [📸 Screenshots](#screenshots)
  * [Technologies used](#technologies-used)
  
  * [Author](#author)



## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)

In the the terminal

```
$ cd to-do-list
$ npm install (to install dependencies)
$ npm run dev (to start the frontend)
```

##  Key Features

- **View Tasks**: Fetch and display a list of to-do items from a public API.
- **Add New Task**: Add a new item to the to-do list.
- **Mark as Completed**: Mark items as completed or incomplete.
- **Form Validation**: Ensure that the new to-do item has a title before adding it.
- **Delete Task Item**: Remove items from the list.
- **Filter between Tasks**:Add a filter to show all, completed, or pending items.
- **Persisting State**: Save the to-do list in local storage.

<br/>

## 📸 ScreenShots

##  Technologies used

This project was created using the following technologies.


- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [Vite]()-  to create react application.
- [Typescript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation library.
- [Zustand](https://redux-toolkit.js.org/) - is a modern, efficient, and easy-to-use library for managing application state in a React application.
- [React Icons ](https://react-icons.github.io/react-icons/) - React Icons is a collection of reusable vector icons for React, designed to be easy to integrate and customize.  
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework packed with classes
- [uuid](https://www.npmjs.com/package/uuid) - For random id generator.
 
## API Used
This application uses the **JSONPlaceholder API** for fetching initial to-do items:

- **Fetch To-Do Items**: GET `https://jsonplaceholder.typicode.com/todos`
  
Each to-do item returned from the API has the following structure:
```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

## Author

- Github: [@SarahNaif](https://github.com/SarahNaif)
- Linkedin: [@sarah-althowebi](https://www.linkedin.com/in/sarah-althowebi/)

