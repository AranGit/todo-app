'use client'
import React, { useEffect, useState } from 'react'
import { TodoAction, TodoData } from '../data/todo'
import Todo from '../components/Todo'
import AddIcon from '../Icons/AddIcon'

function TodosContainer() {
  const [todos, setTodos] = useState<TodoData[]>([])
  const [newTodo, setNewTodo] = useState<TodoData | null>(null)

  const onCreate = () => {
    const id = todos.reduce((maxID: number, todo: TodoData) => Math.max(maxID, todo.id), 0)
    setNewTodo({ id: id, title: "" })
  }
  const onClearTodoCreation = () => {
    setNewTodo(null)
  }

  const todoCreation = () => {
    if (newTodo) {
      return <Todo todo={newTodo} action={TodoAction.Creation} onClose={() => setNewTodo(null)} />
    } else {
      return null
    }
  }

  return (
    <div className='flex flex-col w-full max-w-[500px] gap-y-4'>
      <div className='flex flex-col gap-y-4 creation-area'>
        <button
          className="flex justify-center items-center select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={onCreate}
        >
          <AddIcon /> <span className='ml-2'>CREAT</span>
        </button>
        {todoCreation()}
      </div>
      <div className='flex flex-col gap-y-4 justify-center creation-area'>
        {
          todos.length <= 0 ? <div className='text-center'>Todo not found</div>
            :
            todos.map((todo: TodoData, index: number) => {
              return <Todo key={`todo-item-${index}`} todo={todo} action={TodoAction.Idle} />
            })
        }
      </div>
    </div>
  )
}

export default TodosContainer
