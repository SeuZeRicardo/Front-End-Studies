import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  /**
   * Generic types - Permite inicializar a varivel e permite eu salvar dados tipo String
   * caso for outro tipo vai dar erro
   **/
  const [input, setInput] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const { addTodo } = useTodo()

  // It specifies that the function expects an event object of type React.FormEvent to be passed as an argument.
  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      addTodo(input)
      setInput('')
      toast.success('Todo added successfully')
    } else {
      toast.error('Todo field cannot be empty!')
    }
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placehodler:text-zinc-500 focus:border-white"
          placeholder="Add a todo..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
