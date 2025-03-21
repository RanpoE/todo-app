import React from 'react'
import TodoItem from './TodoItem'
import { useTodoContext } from '../../context/TodoContext'

const TodoList: React.FC = () => {
    const { filteredTodos, searchTerm } = useTodoContext();

    if (filteredTodos.length === 0) {
        if (searchTerm) {
            return <p className='empty message'>No todos match your search.</p>
        }
        return <p className='empty-message'>No todos yet! Add one above.</p>
    }

    return (
        <ul className="todo-list">
            {
                filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>
    );
}

export default TodoList
