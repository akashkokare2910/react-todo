import React from "react";
import "./CompletedTodoList.css";

function CompletedList(props) {
  const deleteHandle = (id) => {
    props.deleteHandle(id);
  };

  return (
    <div className="allTodos">
      <div className="heading">
        {props.type} - {props.count}
      </div>
      <div>
        {props.items.length === 0 ? (
          <h2 className="task__fallback"> No Tasks are there..! </h2>
        ) : (
          props.items.map((t) => (
            <li className="singleTodo" key={t.id}>
              <span className="todoText_complete">{t.Task}</span>
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

export default CompletedList;
