'use client'
import React, { useEffect, useState } from 'react'
import {
  getGameData,
  getHomeData,
  getToyData,
  getFashionData,
  getKitchenData,
  getBookData,
} from '@/utils'
import { useParams, useSearchParams } from 'next/navigation'
import SingleProductDetail from '@/components/Products/SingleProductDetail'

export default function page() {
  const param = useParams()
  const { id } = param
  const seasrchParams = useSearchParams()
  const category = seasrchParams.get('category')

  const [singleProduct, setSingleProduct] = useState([])

  const gameData = async () => {
    const result = await getGameData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
  }
  const homeData = async () => {
    const result = await getHomeData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
  }
  const fashionData = async () => {
    const result = await getFashionData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
  }
  const kitchenData = async () => {
    const result = await getKitchenData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
  }
  const toyData = async () => {
    const result = await getToyData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
  }
  useEffect(() => {
    if (
      category === 'Game' ||
      category === 'Audio' ||
      category === 'Keyboards' ||
      category === 'Mice' ||
      category === 'Chairs'
    ) {
      gameData()
    }

    if (
      category === 'Cleaning' ||
      category === 'Storage' ||
      category === 'Decor' ||
      category === 'Bedding' ||
      category === 'home'
    ) {
      homeData()
    }
    if (category === 'Kitchen') {
      kitchenData()
    }

    if (
      category === 'Jeans' ||
      category === 'Tops' ||
      category === 'Dresses' ||
      category === 'Shoes'
    ) {
      fashionData()
    }
    if (category?.toLowerCase().includes('toy')) {
      toyData()
    }
  }, [])
  // console.log(singleProduct)

  return (
    <div>
      {singleProduct?.length > 0 && (
        <div>
          <SingleProductDetail product={singleProduct[0]} />
        </div>
      )}
    </div>
  )
}
