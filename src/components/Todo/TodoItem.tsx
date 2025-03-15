import React from 'react'
import { useTodoContext } from '../../context/TodoContext'


interface TodoItemProps {
    todo: {
        id: number,
        text: string,
        completed: boolean
    }
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { toggleTodo, deleteTodo } = useTodoContext();
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem
