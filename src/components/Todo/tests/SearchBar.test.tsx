import React from "react";

import { render, screen, fireEvent } from "@testing-library/react"

import { TodoProvider } from "../../../context/TodoContext";

import SearchBar from "../SearchBar";


describe('SearchBar', () => {
    test('render search bar', () => {
        render(
            <TodoProvider>
                <SearchBar />
            </TodoProvider>
        )
    
        expect(screen.getByPlaceholderText('Search todos...')).toBeInTheDocument();
    })

    test('it allows typing on input field and clear button appears', () => {
        render(
            <TodoProvider>
                <SearchBar />
            </TodoProvider>
        )

        const input = screen.getByPlaceholderText('Search todos...')
        fireEvent.change(input, { target: { value: 'Walk'}})

        expect(input).toHaveValue('Walk')

        expect(screen.getByText('✕')).toBeInTheDocument()

    })
})