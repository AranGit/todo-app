import React from 'react'
import PenIcon from '../Icons/PenIcon'
import TrashIcon from '../Icons/TrashIcon'

function TodoHandleButtons({ onEdit, onDelete }: { onEdit: () => void, onDelete: () => void }) {
  return (
    <>
      <button
        className="select-none rounded-lg border bg-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={(_e) => onEdit()}
      >
        <PenIcon />
      </button>
      <button
        className="flex justify-center items-center select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={(_e) => onDelete()}
      >
        <TrashIcon />
      </button>
    </>
  )
}

export default TodoHandleButtons
