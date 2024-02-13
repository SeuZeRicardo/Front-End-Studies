import React, { createContext } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

/**
 * Interfaces are a way to define the
 * structure and shape of an object.
 */

interface TodoContextProps {
  todos: Todo[]
  addTodo: (text: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, text: string) => void
  updateTodoStatus: (id: string) => void
}
export interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: 'undone',
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string, text: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text } : todo)))
  }

  const updateTodoStatus = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'undone' ? 'completed' : 'undone',
            }
          : todo,
      )
    })
  }

  const value: TodoContextProps = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus,
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
