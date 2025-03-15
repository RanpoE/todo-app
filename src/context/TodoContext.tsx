import React, { createContext, useContext, useState} from 'react'

// Define type
interface Todo {
    id: number,
    text: string,
    completed: boolean
}


interface TodoContextType  {
    todos: Todo[],
    addTodo: (text:string) => void,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
}

const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    toggleTodo: () => {},
    deleteTodo: () => {},
})

export const useTodoContext = () => useContext(TodoContext)


export const TodoProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([])

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

      return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
          {children}
        </TodoContext.Provider>
      );

}