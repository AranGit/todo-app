'use client'
import React, { useState } from 'react'
import { TodoData, TodoWithAction } from '../data/todo'
import Todo from '../components/Todo'

function TodosContainer() {
  const [todos, setTodos] = useState<TodoWithAction[]>([])
  const [targetTodo, setTargetTodo] = useState<TodoWithAction | null>(null)

  return (
    <div className='flex flex-col'>
      {
        todos.map((todoWithAction: TodoWithAction, index: number) =>
          <Todo key={`todo-item-${index}`} todoWithAction={todoWithAction} />
        )
      }
    </div>
  )
}

export default TodosContainer
