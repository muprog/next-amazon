// import React from 'react'
// import { ProductDetailProps } from '@/Types'

// type RelatedProductsProps = {
//   products: ProductDetailProps[]
//   currentProductId: number
// }

// const RelatedProducts: React.FC<RelatedProductsProps> = ({
//   products,
//   currentProductId,
// }) => {
//   const filteredProducts = products.filter(
//     (product) => product.id !== Number(currentProductId)
//   )

//   return (
//     <div className='mt-10'>
//       <h2 className='text-2xl font-semibold mb-5'>Related Products</h2>
//       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className='p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-300'
//           >
//             <img
//               src={product.image?.[0]}
//               alt={product.name}
//               className='w-full h-40 object-cover rounded-lg mb-3'
//             />
//             <h3 className='text-lg font-medium'>{product.name}</h3>
//             <p className='text-gray-600'>{product.description}</p>
//             <p className='text-primary font-semibold mt-2'>${product.price}</p>
//             <button className='mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default RelatedProducts

import React from 'react'
import { ProductDetailProps } from '@/Types'
import Image from 'next/image'

type RelatedProductsProps = {
  products: ProductDetailProps[]
  currentProductId: number
  onViewDetails: (product: ProductDetailProps) => void
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  currentProductId,
  onViewDetails,
}) => {
  const filteredProducts = products.filter(
    (product) => product.id !== currentProductId
  )

  return (
    <div className='mt-10'>
      <h2 className='text-2xl font-semibold mb-5'>Related Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className='p-4 border rounded-lg shadow-lg hover:shadow-xl transition duration-300'
          >
            <div className='relative w-full h-40'>
              <Image
                src={
                  product.image?.[0] ? product.image?.[0] : '/image/noimage.png'
                }
                alt={`${product.name}`}
                fill
                className='w-full h-40 object-cover rounded-lg mb-3'
              />
            </div>

            <h3 className='text-lg font-medium'>{product.name}</h3>
            <p className='text-gray-600'>{product.description}</p>
            <p className='text-primary font-semibold mt-2'>${product.price}</p>
            <button
              className='mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
              onClick={() => onViewDetails(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
