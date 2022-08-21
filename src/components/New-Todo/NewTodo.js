import React from 'react'
import TodoForm from './TodoForm'
import './NewTodo.css'

function NewTodo(props) {

  
  const saveTodoDataHandler = (enteredTodoData) => {

    const month = enteredTodoData.date.getDate(); 
    const day = enteredTodoData.date.getMonth() + 1;
    const year = enteredTodoData.date.getFullYear();

    const todoData ={
      ...enteredTodoData, id: Math.floor(Math.random() * 1001).toString(), day, month, year,
    }
    console.log(todoData);
    props.addTodo(todoData);
  }
  
  return (
    <div className='new-todo'>
      <TodoForm onSaveForm={saveTodoDataHandler} />
    </div>
  )
}

export default NewTodo