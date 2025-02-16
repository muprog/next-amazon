import { RefObject } from 'react'

export interface selectedProp {
  id: number
  category: string
  List: { id: number; name: string }[]
}

export interface ListBOxProps {
  isOptionSelected: boolean
  setIsOptionSelected: React.Dispatch<React.SetStateAction<boolean>>
  // inputRef: RefObject<HTMLInputElement | null>
  handleOptionSelected: () => void
  selected: selectedProp
  setSelected: React.Dispatch<
    React.SetStateAction<{
      id: number
      category: string
      List: { id: number; name: string }[]
    }>
  >
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
  id: number
  category: string
}
export interface BookStructureType {
  book: BookStructureProps
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
  image?: string[]
  rating?: number
  brand?: string
  warranty?: string
  features?: string[]
  author?: string
}

export interface productDetailType {
  product: ProductDetailProps
  indexOfRating?: number
  setIndexOfRating?: React.Dispatch<React.SetStateAction<number>>
}

export interface ButtonProps {
  btnType: 'button' | 'submit' | 'reset'
  title: string
  btnStyle: string
  handleClick?: () => void
}
export interface indexOfRatingProps {
  indexOfRating: number
  setIndexOfRating: React.Dispatch<React.SetStateAction<number>>
}

export interface cartDataProps {
  product: ProductDetailProps
  quantity: number
}

// export interface cartDataType {
//   cartData: cartDataProps
// }
