'use client'
import React, { useEffect, useState } from 'react'
import { TodoAction, TodoData } from '../data/todo'
import PenIcon from '../Icons/PenIcon'
import TrashIcon from '../Icons/TrashIcon'
import ConfirmationButtons from './ConfirmationButtons'
import TodoHandleButtons from './TodoHandleButtons'

function Todo(
  { todo, className, action, onAction, onClose }:
    {
      todo: TodoData,
      className?: string,
      action: TodoAction,
      onAction: (todo: TodoData, action: TodoAction) => void,
      onClose?: () => void
    }
) {
  const [currentTodo, setCurrentTodo] = useState<TodoData>(todo)
  const [currentAction, setCurrentAction] = useState<TodoAction>(action)

  useEffect(() => {
    setCurrentTodo(todo)
  }, [todo])

  const onCancelEdit = () => {
    setCurrentAction(TodoAction.Idle)
    setCurrentTodo(todo)
  }

  const onUpdateTodo = () => {
    onAction(currentTodo, TodoAction.Edit);
    setCurrentAction(TodoAction.Idle)
  }

  const buttons = () => {
    switch (currentAction) {
      case TodoAction.Creation:
        return <ConfirmationButtons
          disabledConfirm={currentTodo.title === ""}
          onCancel={() => onClose ? onClose() : null}
          onConfirm={() => onAction(currentTodo, TodoAction.Creation)}
        />
      case TodoAction.Edit:
        return <ConfirmationButtons
          disabledConfirm={currentTodo.title === ""}
          onCancel={() => onCancelEdit()}
          onConfirm={() => onUpdateTodo()}
        />
      default:
        return <TodoHandleButtons
          onEdit={() => setCurrentAction(TodoAction.Edit)}
          onDelete={() => onAction(currentTodo, TodoAction.Delete)}
        />
    }
  }

  return (
    <div className={`todo-item p-2 ${className}`}>
      <div className="flex flex-row flex-wrap items-center gap-2 w-full min-w-[200px]">
        <input
          className="w-full h-full text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
          placeholder="Enter todo title"
          value={currentTodo.title}
          onChange={(e) => setCurrentTodo({ ...currentTodo, title: e.target.value })}
          disabled={currentAction === TodoAction.Idle || currentAction === TodoAction.Delete}
        />
        <div className="flex flex-row flex-wrap items-center justify-end gap-2 w-full">
          {buttons()}
        </div>
      </div>

    </div>
  )
}

export default Todo
