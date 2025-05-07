import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";

import TodoItems from "./Components/TodoItems";

import "./index.css";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
  };

  const onDeleteClick = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (items) => items.name !== todoItemName
    );
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <div className="item-container">
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={onDeleteClick}></TodoItems>
      </div>
    </center>
  );
}

export default App;
