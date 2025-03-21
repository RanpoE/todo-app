import React from "react";

import { render, screen, fireEvent } from "@testing-library/react"

import { TodoProvider } from "../../../context/TodoContext";

import TodoItem from "../TodoItem";


describe('TodoItem', () => {
    const mockTodo = {
        id: 1,
        text: 'Mock todo',
        completed: false
    };

    test('renders todo text', () => {
        render(
            <TodoProvider>
                <TodoItem todo={mockTodo} />
            </TodoProvider>
        )

        expect(screen.getByText('Mock todo')).toBeInTheDocument();
    });

    test('toggle completion when button was clicked', () => {
        render(
            <TodoProvider>
                <TodoItem todo={mockTodo} />
            </TodoProvider>
        )

        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).not.toBeChecked()

        fireEvent.click(checkbox)

    })
})