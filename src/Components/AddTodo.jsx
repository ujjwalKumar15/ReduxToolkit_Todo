// src/components/Todo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo} from '../reduxToolkit/todoSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
        // If we are not editing, add a new todo
        dispatch(addTodo(todoText));
        setTodoText('');
      }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default Todo;
