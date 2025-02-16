'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ProductDetail from '@/components/Products/ProductDetail'
import {
  getGameData,
  getHomeData,
  getToyData,
  getFashionData,
  getKitchenData,
} from '@/utils'
import { ProductDetailProps } from '@/Types'
// import { div, object } from 'framer-motion/client'

export default function DynamicPage() {
  const params = useParams()
  const { name } = params

  const [search, setSearch] = useState<ProductDetailProps[]>([])
  const gameData = async (name: string) => {
    const result = await getGameData()
    setSearch(
      result.filter((product: ProductDetailProps) => {
        return product.category === name
      })
    )
    if (name === 'Game') setSearch(result)
  }
  const homeData = async (name: string) => {
    const result = await getHomeData()
    if (name === 'home') {
      setSearch(result)
    } else {
      setSearch(
        result.filter((product: ProductDetailProps) => {
          return product.category === name
        })
      )
    }
  }
  const toyData = async (name: string) => {
    const result = await getToyData()
    setSearch(
      result.filter((product: ProductDetailProps) => {
        return (
          product.category &&
          product.category.toLowerCase().includes(name.toLowerCase())
        )
      })
    )
  }
  const fashionData = async (name: string) => {
    const result = await getFashionData()
    if (name === 'Fashions') {
      setSearch(result)
    } else {
      setSearch(
        result.filter((product: ProductDetailProps) => {
          return product.category === name
        })
      )
    }
  }
  const kitchenData = async () => {
    const result = await getKitchenData()
    setSearch(result)
  }

  // const bookData = async (name: string) => {
  //   const result = await getBookData()
  //   setSearch(
  //     result.filter((product: ProductDetailProps) => {
  //       return product.category === name
  //     })
  //   )
  // }
  const formattedName =
    typeof name === 'string'
      ? name.replace(/%20/gi, ' ').replace(/%26/g, ' & ')
      : ''

  useEffect(() => {
    if (name === 'Game') gameData(formattedName)
    if (
      name === 'Audio' ||
      name === 'Keyboards' ||
      name === 'Mice' ||
      name === 'Chairs'
    )
      gameData(formattedName)
    if (
      name === 'Cleaning' ||
      name === 'Storage' ||
      name === 'Decor' ||
      name === 'Bedding' ||
      name === 'home'
    )
      homeData(formattedName)
    if (name === 'Toy') toyData(formattedName)
    if (
      name === 'Jeans' ||
      name === 'Tops' ||
      name === 'Dresses' ||
      name === 'Shoes' ||
      name === 'Fashions'
    )
      fashionData(formattedName)
    if (name === 'kitchen') kitchenData()
  }, [formattedName, name])

  const [indexOfRating, setIndexOfRating] = useState(-1)
  return (
    <div className='bg-white px-2'>
      {search.length > 0 && (
        <div className='text-slate-900 bg-white'>
          1-{search.length} results available
        </div>
      )}
      {search.length > 0 ? (
        <div className='shadow-inner shadow-gray-300 pt-5 pl-1'>
          <h3 className='text-[24px] font-bold'>Results</h3>
          <div className='flex flex-col gap-4'>
            {search.map((product: ProductDetailProps, index) => {
              return (
                <div key={index}>
                  <ProductDetail
                    indexOfRating={indexOfRating}
                    setIndexOfRating={setIndexOfRating}
                    product={product}
                  />
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div>Oops no result</div>
      )}
    </div>
  )
}
