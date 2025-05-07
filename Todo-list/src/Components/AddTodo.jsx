import { useState } from "react";
import { MdAddToQueue } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate(" ");
    setTodoName(" ");
  };
  return (
    <div className="container">
      <div className="row Todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2" style={{ width: "20px" }}>
          <button
            type="button"
            className="btn btn-success Todo-button"
            onClick={handleAddButtonClicked}>
            <MdAddToQueue />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
