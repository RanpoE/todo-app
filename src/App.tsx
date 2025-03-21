import React from 'react';
import { TodoProvider } from './context/TodoContext';
import { AddTodoForm, SearchBar, TodoList } from './components/Todo';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="todo-app">
        <h1>Todo App</h1>
        <AddTodoForm />
        <SearchBar />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
