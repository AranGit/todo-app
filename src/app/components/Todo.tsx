import React from 'react'
import { TodoData, TodoWithAction } from '../data/todo'

function Todo({ todoWithAction, className }: { todoWithAction: TodoWithAction, className?: string }) {
  return (
    <div className={`todo-item ${className}`}>

    </div>
  )
}

export default Todo
