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
    setNewTodo({ id: id + 1, title: "" })
  }

  const onUpdateTodo = (todoUpdated: TodoData, action: TodoAction) => {
    if (action === TodoAction.Edit) {
      return setTodos(todos.map((todo: TodoData) => {
        if (todoUpdated.id === todo.id) {
          return {
            ...todo,
            title: todoUpdated.title
          }
        } else {
          return todo
        }
      }))
    } else if (action === TodoAction.Delete) {
      console.log("todoUpdated", todoUpdated.id)
      let updatedTodos = todos.filter((todo: TodoData) => todo.id !== todoUpdated.id)
      return setTodos(updatedTodos)
    }
  }

  console.log("todos", todos)

  const newTodoElement = () => {
    if (newTodo) {
      return <Todo
        todo={newTodo}
        action={TodoAction.Creation}
        onAction={(todo: TodoData, _action) => {
          setNewTodo(null)
          setTodos([...todos, todo])
        }}
        onClose={() => setNewTodo(null)}
      />
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
        {newTodoElement()}
      </div>
      <div className='flex flex-col justify-center creation-area'>
        {
          todos.length <= 0 ? <div className='text-center'>Todo not found</div>
            :
            todos.map((todo: TodoData, index: number) => {
              return <Todo
                key={`todo-item-${index}`}
                className={`todo-${todo.id}`}
                todo={todo}
                action={TodoAction.Idle}
                onAction={(targetTodo: TodoData, action: TodoAction) => onUpdateTodo(targetTodo, action)} />
            })
        }
      </div>
    </div>
  )
}

export default TodosContainer
