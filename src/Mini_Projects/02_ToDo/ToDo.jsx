import { useState, useRef } from 'react';
import './ToDo.css';

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  const addTodo = (e) => {
    // Prevent Default Form Submission
    e.preventDefault();

    // Grabbing the entered todo
    const todoTxt = inputRef.current.value.trim();

    // Validate Input field
    if (todoTxt === '') return;

    // NewTodo Object
    const newTodo = {
      id: Date.now(),
      todo: todoTxt,
    };

    // Update State
    setTodoList([...todoList, newTodo]);

    // Reset Input field
    inputRef.current.value = '';
  };

  return (
    <div className="todo-container">
      <form className="input-btn-wrapper">
        <input type="text" id="todo-input" ref={inputRef} />
        <button id="todo-btn" onClick={addTodo}>
          Add ToDo
        </button>
      </form>
      <div className="listItems-wrapper">
        <ul>
          {todoList.map((todoObj) => (
            <li key={todoObj.id}>{todoObj.todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
