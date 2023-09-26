// src/components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../reduxToolkit/todoSlice';


const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEditTodo = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSaveEdit = (id, text) => {
    if (text.trim() !== '') {
      dispatch(updateTodo({ id, text: text }));
      setEditingId(null);
    }
  };

  return (
    <ul>
      {todos && todos.map((todo) => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(todo.id, editedText)}>Update</button>
            </>
          ) : (
            <>
              {todo.text}
              <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
