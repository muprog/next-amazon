// 'use client'

// import React, { createContext, Dispatch, useState } from 'react'
// interface MyContextType {
//   state: string
//   setState: Dispatch<React.SetStateAction<string>>
//   cartData: any[]
//   setCartData: Dispatch<React.SetStateAction<any[]>>
// }
// const MyContext = createContext<MyContextType | undefined>(undefined)
// export const MyProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, setState] = useState('initial state')
//   const [cartData, setCartData] = useState<any[]>([])

//   return (
//     <MyContext.Provider value={{ state, setState, cartData, setCartData }}>
//       {children}
//     </MyContext.Provider>
//   )
// }

// export default MyContext

'use client'

import { cartDataProps } from '@/Types'
import React, { createContext, Dispatch, useEffect, useState } from 'react'

interface MyContextType {
  state: string
  setState: Dispatch<React.SetStateAction<string>>
  cartData: cartDataProps[]
  setCartData: Dispatch<React.SetStateAction<cartDataProps[]>>
  savedForLater: cartDataProps[]
  setSavedForLater: Dispatch<React.SetStateAction<cartDataProps[]>>
}

const MyContext = createContext<MyContextType | undefined>(undefined)

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [savedForLater, setSavedForLater] = useState<cartDataProps[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('savedForLater')
      return storedCart ? JSON.parse(storedCart) : []
    }
    return []
  })
  const [state, setState] = useState('initial state')
  const [cartData, setCartData] = useState<cartDataProps[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cartData')
      return storedCart ? JSON.parse(storedCart) : []
    }
    return []
  })

  // Save cartData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData))
  }, [cartData, setCartData])

  // useEffect(() => {
  //   localStorage.setItem('savedForLater', JSON.stringify(savedForLater))
  // }, [savedForLater, setSavedForLater])
  // Save savedForLater to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('savedForLater', JSON.stringify(savedForLater))
  }, [savedForLater, setSavedForLater])

  return (
    <MyContext.Provider
      value={{
        state,
        setState,
        cartData,
        setCartData,
        savedForLater,
        setSavedForLater,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContext
