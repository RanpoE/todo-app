import React from "react";

import { render, screen, fireEvent } from "@testing-library/react"

import { TodoProvider, useTodoContext } from "../../context/TodoContext";


const TestComponent = () => {
    const { todos, addTodo } = useTodoContext()

    return (
        <div>
            <span data-testid="todo-count">{todos.length}</span>
            <button onClick={() => addTodo('Test Todo')}>Add todo</button>
        </div>
    )
}

describe('TodoContext', () => {
    test('provides todo functionality to components', () => {
        render(
            <TodoProvider>
                <TestComponent />
            </TodoProvider>
        );

        expect(screen.getByTestId('todo-count')).toHaveTextContent('0')

        fireEvent.click(screen.getByText('Add todo'))

        expect(screen.getByTestId('todo-count')).toHaveTextContent('1')

    })

    // Init


})