import React from "react";
import "./Todos.css";
import Card from "../UI/Card";
import TodoList from "./TodoList";
import CompletedList from "./CompletedTodoList";


function Todos(props) {
  
  const deleteHandle = (id) =>{
    props.deleteHandle(id);
  }

  const todoTasksCount = (props.items.filter((task) => task.status === "To-do")).length;
  const completedTasksCount = (props.items.filter((task) => task.status === "Completed")).length;
  const pendingTasksCount = (props.items.filter((task) => task.status === "Pending")).length;
  
  const todoTasks = props.items.filter((task) => task.status === "To-do");
  const completedTasks = props.items.filter((task) => task.status === "Completed");
  const pendingTasks = props.items.filter((task) => task.status === "Pending");

  
  return (
    
      <div className="tasks_section">
      <Card className="task">
        <TodoList items={todoTasks} count={todoTasksCount} type="To-do" deleteHandle={deleteHandle} />
      </Card>
      <Card className="task">
        <TodoList items={pendingTasks} count={pendingTasksCount} type="In Progress" deleteHandle={deleteHandle} />
      </Card>
      <Card className="task">
        <CompletedList items={completedTasks} count={completedTasksCount} type="Completed"  deleteHandle={deleteHandle} />
      </Card>

      </div>
  );
}

export default Todos;
