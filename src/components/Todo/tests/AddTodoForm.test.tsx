import React from "react";

import { render, screen, fireEvent } from "@testing-library/react"

import { TodoProvider } from "../../../context/TodoContext";

import AddTodoForm from "../AddTodoForm";


describe('AddTodoForm', () => {
    test('renders input and button', () => {
        render(
            <TodoProvider>
                <AddTodoForm />
            </TodoProvider>
        )
        
        expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
        expect(screen.getByText('Add')).toBeInTheDocument();
    })

    test('allow typing in the input field', () => {
        render(
            <TodoProvider>
                <AddTodoForm />
            </TodoProvider>
        )
        
        const input = screen.getByPlaceholderText('Add a new todo')
        fireEvent.change(input, { target: { value: 'New test todo'}})

        expect(input).toHaveValue('New test todo')
    })

    test('clears input after submitting the form', () => {
        render(
            <TodoProvider>
                <AddTodoForm />
            </TodoProvider>
        )

        const input = screen.getByPlaceholderText('Add a new todo')
        fireEvent.change(input, { target: { value: 'New test todo'}})
        fireEvent.submit(input.closest('form')!)

        expect(input).toHaveValue('')
    })
})