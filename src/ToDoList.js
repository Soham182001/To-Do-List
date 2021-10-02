import React from "react";
// import ReactDOM from 'react-dom';

const ToDoList = (props) => {
  return (
    <div>
      <li className="todoList">
        {props.work}{" "}
        <button
          className="delButton"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Delete
        </button>{" "}
      </li>
      <br />
    </div>
  );
};

export default ToDoList;
