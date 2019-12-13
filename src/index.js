import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { todoFactory } from "./components/projects";

let newList = todoFactory();

newList.createProject("Work");

// let todo = todos();

newList.createTodo(
  {
    title: "Run",
    description: "Short Run",
    dueDate: "13-12-2019",
    priority: "Low"
  },
  1
);

newList.editTodo(
    {
      title: "Ran",
      description: "Short Run",
      dueDate: "13-12-2019",
      priority: "Low"
    },
    1,
    0
  );


console.log(newList.allProjects);
