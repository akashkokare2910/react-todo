import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/New-Todo/NewTodo";
import Todos from "./components/Todo/Todos";


const INITIAL_TODOS = [];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [newTodo, setNewTodo] = useState(false);
  const addTodoHandler = (todo) =>{
    setTodos((prevTodos) => {
      return [todo,...prevTodos]
    });
  };

  const addNewTodoButton = (event) => {
    setNewTodo(true);
  }
  const cancelNewTodoButton = (event) => {
    setNewTodo(false);
  }
  const deleteHandle = (id) =>{
    const delTodo = todos.filter((tasks) => tasks.id !== id);
    setTodos([...delTodo]);
  }


  return (
    <div className="App">
      <div className="newtodo">
      <h1>To Do List</h1>
      {!newTodo && <button onClick={addNewTodoButton}>
      + Add</button>}
      {newTodo && <button onClick={cancelNewTodoButton}>
      Cancel</button>}
      </div>
      {newTodo && <NewTodo addTodo={addTodoHandler} />}
      <Todos items={todos} deleteHandle={deleteHandle}  />
      
      
    </div>
  );
}

export default App;
