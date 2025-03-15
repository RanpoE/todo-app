import React from 'react'
import TodoItem from './TodoItem'
import { useTodoContext } from '../../context/TodoContext'

const TodoList: React.FC = () => {
    const { todos } = useTodoContext();
    return (
        <ul className="todo-list">
            {todos.length === 0 ? (
                <p>No todos yet! Add one above.</p>
            ) : (
                todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            )}
        </ul>
    );
}

export default TodoList
