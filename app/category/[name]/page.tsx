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
  getBookData,
} from '@/utils'
import { div, object } from 'framer-motion/client'

export default function DynamicPage() {
  const params = useParams() // Fetch dynamic route params
  const { name } = params // Access the 'name' parameter from the URL

  const [search, setSearch] = useState([])
  const gameData = async (name: string) => {
    const result = await getGameData()
    setSearch(
      result.filter((product: object | any) => {
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
        result.filter((product: object | any) => {
          return product.category === name
        })
      )
    }
  }
  const toyData = async (name: string) => {
    const result = await getToyData()
    setSearch(
      result.filter((product: object | any) => {
        return product.category.toLowerCase().includes(name.toLowerCase())
      })
    )
  }
  const fashionData = async (name: string) => {
    const result = await getFashionData()
    setSearch(
      result.filter((product: object | any) => {
        return product.category === name
      })
    )
  }
  const kitchenData = async (name: string) => {
    const result = await getKitchenData()
    setSearch(result)
  }

  const bookData = async (name: string) => {
    const result = await getBookData()
    setSearch(
      result.filter((product: object | any) => {
        return product.category === name
      })
    )
  }

  // console.log(search)
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
      name === 'Shoes'
    )
      fashionData(formattedName)
    if (name === 'kitchen') kitchenData(formattedName)
    // bookData()
  }, [])

  // Check if 'name' is a string before applying replace
  const formattedName =
    typeof name === 'string'
      ? name.replace(/%20/gi, ' ').replace(/%26/g, ' & ')
      : ''

  return (
    <div className='bg-white pl-2'>
      {search.length > 0 ? (
        <div>
          <h3>Results</h3>
          <div className='flex flex-col gap-6'>
            {search.map((product: object | any, index) => {
              return (
                <div key={index}>
                  <ProductDetail product={product} />
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
