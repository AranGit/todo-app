import React from 'react'
import XmarkIcon from '../Icons/XmarkIcon'
import CheckIcon from '../Icons/CheckIcon'

function ConfirmationButtons({ disabledConfirm, onCancel, onConfirm }: { disabledConfirm?: boolean, onCancel: () => void, onConfirm: () => void }) {
  return (
    <>
      <button
        className="select-none rounded-lg border border-red-200 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={(_e) => onCancel()}
      >
        <XmarkIcon />
      </button>
      <button
        className="flex justify-center items-center select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        disabled={disabledConfirm}
        onClick={(_e) => onConfirm()}
      >
        <CheckIcon />
      </button>
    </>
  )
}

export default ConfirmationButtons
