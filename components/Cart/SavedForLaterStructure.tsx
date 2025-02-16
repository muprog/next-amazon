'use client'
import { cartDataProps } from '@/Types'
import React from 'react'
import Button from '../Button/Button'
import { useContext } from 'react'
import MyContext from '../ContextApi/MyContext'
interface savedForLaterType {
  save: cartDataProps
  // savedForLater: cartDataProps[]
  // setSavedForLater: React.Dispatch<React.SetStateAction<cartDataProps[]>>
}

export default function SavedForLaterStructure({
  save,
}: // savedForLater,
// setSavedForLater,
savedForLaterType) {
  const context = useContext(MyContext)
  if (!context) return <div>Loading</div>

  const { cartData, setCartData, savedForLater, setSavedForLater } = context
  function handleMoveToCart() {
    const filtered = savedForLater?.filter(
      (saved) =>
        saved.product.description === save.product.description &&
        saved.product.id === save.product.id
    )
    const filtered1: cartDataProps[] = cartData.filter(
      (filter) =>
        filter.product.description === save.product.description &&
        filter.product.id === save.product.id
    )
    console.log(filtered1.length)
    setCartData((prev) => {
      if (filtered1.length === 0) {
        return [...prev, save]
      } else {
        return prev
      }
    })
    setSavedForLater((prev) => {
      return savedForLater.filter((saved) => filtered[0] != saved)
    })
  }

  function handleDelete1() {
    const filtered = savedForLater.filter(
      (saved) =>
        saved.product.description === save.product.description &&
        saved.product.id === save.product.id
    )
    // console.log(filtered)
    if (filtered.length > 0) {
      setSavedForLater((prev) => {
        return prev.filter(
          (saved) =>
            saved.product.description != filtered[0].product.description &&
            saved.product.id != filtered[0].product.id
        )
      })
    }
  }
  return (
    <div className='w-[240px]  flex flex-col border pb-10 p-2'>
      <div className='w-full flex justify-center'>
        <div className='relative w-[200px] h-[200px]'>
          <img
            src={`${save.product.image?.[0]}`}
            alt='image'
            className='object-contain h-[200px]'
          />
        </div>
      </div>

      <div className=''>{save.product.description}</div>
      <div className='font-bold'>${save.product.price}</div>
      <Button
        title='Move to cart'
        btnType='button'
        btnStyle=' w-[90%] border border-black rounded-full my-2'
        handleClick={handleMoveToCart}
      />
      <div
        className='text-blue-500 hover:underline w-[50px] cursor-pointer text-[13px]'
        onClick={handleDelete1}
      >
        Delete
      </div>
    </div>
  )
}
