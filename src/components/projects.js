const todoFactory = () => {
  let allProjects = [{ name: "default", todos: [] }];

  const createProject = name => {
    allProjects.push({ name: name, todos: [] });
  };

  // TODO CREATION

 
    const createTodo = (todo, id) => {
      allProjects[id].todos.push(todo);
    };

  const editTodo = (todo,idProject, idTodo) => {
    allProjects[idProject].todos[idTodo] = todo;
  };

  return { createProject, createTodo, allProjects, editTodo };
};

export { todoFactory };
