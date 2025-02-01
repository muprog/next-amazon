import { ButtonProps } from '@/Types'
import React from 'react'

export default function Button({ btnType, title, btnStyle }: ButtonProps) {
  return (
    <div>
      <button className={`${btnStyle}`} type={`${btnType}`}>
        {title}
      </button>
    </div>
  )
}
