import React from "react";
import "./TodoList.css";

function TodoList(props) {
 
  const deleteHandle = (id) => {
    props.deleteHandle(id);
  };

  const current = new Date();
  const currentDate = current.getDate();
  const cureentMonth = current.getMonth() + 1;
  const currentYear = current.getFullYear();

  return (
    <div className="allTodos">
      <div className="heading">
        {props.type} - {props.count}
      </div>
      <div>
        {props.items.length === 0 ? (
          <h2 className="task__fallback"> No Tasks found!! </h2>
        ) : (
          props.items.map((t) => (
            <li className="singleTodo" key={t.id}>
              {t.day !== currentDate &&
              t.month !== cureentMonth &&
              t.year !== currentYear ? (
                <span className="todoText">{t.Task}</span>
              ) : (
                <span className="todoText_red">{t.Task}</span>
              )}

              <button className="button" onClick={() => deleteHandle(t.id)}>
                Delete
              </button>
            </li>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
