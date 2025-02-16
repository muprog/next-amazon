// 'use client'
// import React, { useEffect, useState } from 'react'
// import { useContext } from 'react'
// import MyContext from '@/components/ContextApi/MyContext'
// import {
//   getGameData,
//   getHomeData,
//   getToyData,
//   getFashionData,
//   getKitchenData,
//   getBookData,
// } from '@/utils'
// import { useParams, useSearchParams } from 'next/navigation'
// import SingleProductDetail from '@/components/Products/SingleProductDetail'
// import { cartDataProps, ProductDetailProps } from '@/Types'

// export default function page() {
//   const param = useParams()
//   const { id } = param
//   const seasrchParams = useSearchParams()
//   const category = seasrchParams.get('category')

//   const [singleProduct, setSingleProduct] = useState<ProductDetailProps[] | []>(
//     []
//   )

//   const [related, setRelated] = useState<ProductDetailProps[]>()

//   const gameData = async () => {
//     const result = await getGameData()
//     setSingleProduct(result.filter((product: object | any) => product.id == id))
//     setRelated(result)
//   }
//   const homeData = async () => {
//     const result = await getHomeData()
//     setSingleProduct(result.filter((product: object | any) => product.id == id))
//     setRelated(result)
//   }
//   const fashionData = async () => {
//     const result = await getFashionData()
//     setSingleProduct(result.filter((product: object | any) => product.id == id))
//     setRelated(result)
//   }
//   const kitchenData = async () => {
//     const result = await getKitchenData()
//     setSingleProduct(result.filter((product: object | any) => product.id == id))
//     setRelated(result)
//   }
//   const toyData = async () => {
//     const result = await getToyData()
//     setSingleProduct(result.filter((product: object | any) => product.id == id))
//     setRelated(result)
//   }

//   const bookData = async () => {
//     const result = await getBookData()
//     setSingleProduct(result.filter((product: object | any) => product.id == id))
//     setRelated(result)
//   }
//   // console.log(category)
//   useEffect(() => {
//     if (
//       category === 'Game' ||
//       category === 'Audio' ||
//       category === 'Keyboards' ||
//       category === 'Mice' ||
//       category === 'Chairs'
//     ) {
//       gameData()
//     }

//     if (
//       category === 'Cleaning' ||
//       category === 'Storage' ||
//       category === 'Decor' ||
//       category === 'Bedding' ||
//       category === 'home'
//     ) {
//       homeData()
//     }
//     if (category === 'Kitchen') {
//       kitchenData()
//     }

//     if (
//       category === 'Jeans' ||
//       category === 'Tops' ||
//       category === 'Dresses' ||
//       category === 'Shoes'
//     ) {
//       fashionData()
//     }
//     if (category?.toLowerCase().includes('toy')) {
//       toyData()
//     }
//     if (category === 'book') {
//       // alert('ksdfk')
//       bookData()
//     }
//   }, [])
//   // console.log(cartData)
//   const context = useContext(MyContext)
//   if (!context) {
//     return <div className='text-center text-[50px]'>Loading</div>
//   }
//   const { cartData, setCartData } = context
//   const [quantity, setQuantity] = useState(1)

//   function handleCartChange() {
//     try {
//       setCartData((prevCarData) => {
//         if (prevCarData.length === 0 && singleProduct[0]) {
//           return [{ product: singleProduct[0], quantity: quantity }]
//         }
//         if (prevCarData.length > 0 && singleProduct[0]) {
//           const filtered: cartDataProps[] = prevCarData.filter(
//             (item: cartDataProps) =>
//               item.product.description === singleProduct[0].description &&
//               item.product.id === singleProduct[0].id
//           )

//           // if (
//           //   filtered[0].singleProduct.stock <=
//           //   cartData[cartData.indexOf(filtered[0])].quantity + 1
//           // ) {
//           //   alert('Maximum quantity reached')
//           // }

//           if (filtered.length > 0) {
//             return [
//               ...prevCarData.filter(
//                 (product) => product?.product != filtered[0].product
//               ),
//               {
//                 ...filtered[0],
//                 quantity:
//                   filtered[0].product.stock ||
//                   filtered[0].quantity >= filtered[0].quantity + 1
//                     ? filtered[0].quantity + 1
//                     : filtered[0].quantity,
//               },
//             ]
//           }

//           if (filtered.length === 0) {
//             return [
//               ...prevCarData,
//               { product: singleProduct[0], quantity: quantity },
//             ]
//           } else {
//             return prevCarData
//           }
//         } else {
//           return prevCarData
//         }
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   // if (cartData[0]?.product?.image === undefined) return
//   // console.log(cartData[0]?.product?.image[0])

//   return (
//     <div>
//       {singleProduct?.length > 0 && (
//         <div>
//           <SingleProductDetail
//             product={singleProduct[0]}
//             handleCartChange={handleCartChange}
//           />
//         </div>
//       )}
//     </div>
//   )
// }

'use client'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import MyContext from '@/components/ContextApi/MyContext'
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
import { cartDataProps, ProductDetailProps } from '@/Types'
import RelatedProducts from '@/components/Products/RelatedProducts'

export default function Page() {
  const param = useParams()
  const { id } = param
  const seasrchParams = useSearchParams()
  const category = seasrchParams.get('category')

  const [singleProduct, setSingleProduct] = useState<ProductDetailProps[] | []>(
    []
  )

  const [related, setRelated] = useState<ProductDetailProps[]>()

  const gameData = async () => {
    const result = await getGameData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
    setRelated(result)
  }
  const homeData = async () => {
    const result = await getHomeData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
    setRelated(result)
  }
  const fashionData = async () => {
    const result = await getFashionData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
    setRelated(result)
  }
  const kitchenData = async () => {
    const result = await getKitchenData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
    setRelated(result)
  }
  const toyData = async () => {
    const result = await getToyData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
    setRelated(result)
  }

  const bookData = async () => {
    const result = await getBookData()
    setSingleProduct(result.filter((product: object | any) => product.id == id))
    setRelated(result)
  }
  // console.log(category)
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
    if (category === 'book') {
      // alert('ksdfk')
      bookData()
    }
  }, [])
  // console.log(cartData)
  const context = useContext(MyContext)
  if (!context) {
    return <div className='text-center text-[50px]'>Loading</div>
  }
  const { cartData, setCartData } = context
  const [quantity, setQuantity] = useState(1)

  function handleCartChange() {
    try {
      setCartData((prevCarData) => {
        if (prevCarData.length === 0 && singleProduct[0]) {
          return [{ product: singleProduct[0], quantity: quantity }]
        }
        if (prevCarData.length > 0 && singleProduct[0]) {
          const filtered: cartDataProps[] = prevCarData.filter(
            (item: cartDataProps) =>
              item.product.description === singleProduct[0].description &&
              item.product.id === singleProduct[0].id
          )

          // if (
          //   filtered[0].singleProduct.stock <=
          //   cartData[cartData.indexOf(filtered[0])].quantity + 1
          // ) {
          //   alert('Maximum quantity reached')
          // }

          if (filtered.length > 0) {
            return [
              ...prevCarData.filter(
                (product) => product?.product != filtered[0].product
              ),
              {
                ...filtered[0],
                quantity:
                  filtered[0].product.stock ||
                  filtered[0].quantity >= filtered[0].quantity + 1
                    ? filtered[0].quantity + 1
                    : filtered[0].quantity,
              },
            ]
          }

          if (filtered.length === 0) {
            return [
              ...prevCarData,
              { product: singleProduct[0], quantity: quantity },
            ]
          } else {
            return prevCarData
          }
        } else {
          return prevCarData
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  // if (cartData[0]?.product?.image === undefined) return
  // console.log(cartData[0]?.product?.image[0])

  function handleViewDetails(product: ProductDetailProps) {
    setSingleProduct([product]) // Update singleProduct state with the clicked product
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to the top
  }

  return (
    <div>
      {singleProduct?.length > 0 && (
        <div>
          <SingleProductDetail
            product={singleProduct[0]}
            handleCartChange={handleCartChange}
          />
          {related && related.length > 1 && (
            <RelatedProducts
              products={related}
              currentProductId={Number(singleProduct[0].id)}
              onViewDetails={handleViewDetails}
            />
          )}
        </div>
      )}
    </div>
  )
}
