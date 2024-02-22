'use client'
import React, { useState } from 'react'
import { TodoAction, TodoData } from '../data/todo'
import CheckIcon from '../Icons/CheckIcon'
import XmarkIcon from '../Icons/XmarkIcon'

function Todo(
  { todo, className, action, onAction, onClose }:
    {
      todo: TodoData,
      className?: string,
      action: TodoAction,
      onAction?: any,
      onClose?: any
    }) {
  const [currentAction, setCurrentAction] = useState<TodoAction>(action)

  return (
    <div className={`todo-item p-2 ${className}`}>
      {
        <div className="flex flex-row items-center gap-2 w-full min-w-[200px]">
          <input
            className="w-full h-full text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder="Enter todo title" />
          <button
            className="select-none rounded-lg border border-red-200 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={onClose}
          >
            <XmarkIcon />
          </button>
          <button
            className="flex justify-center items-center select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => onAction(todo)}
          >
            <CheckIcon />
          </button>
        </div>
      }
    </div>
  )
}

export default Todo
