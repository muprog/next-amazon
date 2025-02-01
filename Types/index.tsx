import { RefObject } from 'react'

export interface ListBOxProps {
  isOptionSelected: boolean
  setIsOptionSelected: React.Dispatch<React.SetStateAction<boolean>>
  // inputRef: RefObject<HTMLInputElement | null>
  handleOptionSelected: () => void
}

export interface FourProductType {
  id: number
  title: string
  link?: string
  images: string[]
  category: string[]
  name: string[]
  more: string
}
export interface FourProductsProps {
  product: FourProductType
}

export interface BookStructureProps {
  image: string
}
export interface ProductDetailProps {
  id?: number
  name?: string
  description?: string
  price?: number
  stock?: number
  category?: string
  ageGroup?: string
  dimensions?: string
  material?: string
  image?: string
  rating?: number
}

export interface productDetailType {
  product: ProductDetailProps
}

export interface ButtonProps {
  btnType: 'button' | 'submit' | 'reset'
  title: string
  btnStyle: string
}
