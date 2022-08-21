import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredStatus, setEnteredStatus] = useState("To-do");
  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
    // console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
  };
  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target.value);
    // console.log(event.target.value);
  };
  

  
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTask === "" || enteredDate === "" )
    { 
      return ;
    } 
    const todoData = {
      Task: enteredTask,
      date: new Date(enteredDate),
      status: enteredStatus,
    };
  
    props.onSaveForm(todoData);
    setEnteredTask("");
    setEnteredDate("");
    setEnteredStatus("To-do");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <label>Task</label>
          <input
            placeholder="Enter your task here.."
            type="text"
            value={enteredTask}
            onChange={taskChangeHandler}
          ></input>
        </div>
        
        <div className="new-todo__control">
          <label>Due Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>

        <div className="new-todo__control">
          <label>Status</label>
          <select value={enteredStatus} onChange={statusChangeHandler}>
          <option value='To-do'>To-Do</option>
          <option value='Pending'>In Progress</option>
          <option value='Completed'>Completed</option>
          
        </select>
        </div>
      </div>
      <div className="new-todo__actions">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TodoForm;
