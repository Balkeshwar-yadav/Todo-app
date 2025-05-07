import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      {todoItems.map((items) => (
        <TodoItem
          key={items.name}
          todoName={items.name}
          todoDate={items.dueDate}
          onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
