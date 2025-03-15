import React, { useState } from 'react'
import { useTodoContext } from '../../context/TodoContext'

const AddTodoForm: React.FC = () => {
    const [text, setText] = useState('');
    const { addTodo } = useTodoContext();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (text.trim()) {
        addTodo(text);
        setText('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    );
  };

export default AddTodoForm
