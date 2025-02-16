import { ButtonProps } from '@/Types'
import React from 'react'

export default function Button({
  btnType,
  title,
  btnStyle,
  handleClick,
}: ButtonProps) {
  return (
    <div>
      <button
        className={`${btnStyle}`}
        type={`${btnType}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  )
}
