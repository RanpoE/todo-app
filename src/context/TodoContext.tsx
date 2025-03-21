import React, { createContext, useContext, useState, useMemo } from 'react'

// Define type
type Todo =  {
    id: number,
    text: string,
    completed: boolean
}


interface TodoContextType  {
    todos: Todo[],
    filteredTodos: Todo[],
    searchTerm: string,
    setSearchTerm: (text: string) => void,
    addTodo: (text:string) => void,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
}

const TodoContext = createContext<TodoContextType>({
    todos: [],
    filteredTodos: [],
    searchTerm: '',
    setSearchTerm: () => {},
    addTodo: () => {},
    toggleTodo: () => {},
    deleteTodo: () => {},
})

export const useTodoContext = () => useContext(TodoContext)


export const TodoProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')


    // Memoize filter
    const filteredTodos = useMemo(() => {
      if (!searchTerm.trim()) return todos;

      const lowerCaseSearch = searchTerm.toLowerCase()
      return todos.filter(todo => 
        todo.text.toLowerCase().includes(lowerCaseSearch)
      )
    }, [todos, searchTerm])


    const addTodo = (text: string) => {
        setTodos([
            ...todos,
            { id: Date.now(), text, completed: false}
        ])
    } 

    const toggleTodo = (id: number) => {
        setTodos(
          todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    
      const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      // Memoize context value
      const contextValue = useMemo(() => ({
        todos,
        filteredTodos,
        searchTerm,
        setSearchTerm,
        addTodo,
        toggleTodo,
        deleteTodo
      }), [todos, filteredTodos, searchTerm]);

      return (
        <TodoContext.Provider value={contextValue}>
          {children}
        </TodoContext.Provider>
      );

}