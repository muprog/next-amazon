import React from 'react'
import FourProducts from './FourProducts'
const fourProducts = [
  {
    id: 1,
    title: 'Gaming accessories',
    link: 'see more',
    images: [
      '/image/home-products/headSet.jpg',
      '/image/home-products/keyboard.jpg',
      '/image/home-products/computerMice.jpg',
      '/image/home-products/Chair.jpg',
    ],
    category: ['Audio', 'Keyboards', 'Mice', 'Chairs'],
    name: ['Headsets', 'Keyboards', 'Computer mice', 'Chairs'],
    more: 'Game',
  },
  {
    id: 2,
    title: 'Get your game on',
    link: 'shop gaming',
    images: ['/image/home-products/game.jpg'],
    category: ['Game'],
    name: ['Game'],
    more: 'Game',
  },
  {
    id: 3,
    title: 'Shop for your home essentials',
    link: 'Discover more in Home',
    images: [
      '/image/home-products/cleaning.jpg',
      '/image/home-products/homeStorage.jpg',
      '/image/home-products/homeDecor.jpg',
      '/image/home-products/bedding.jpg',
    ],
    category: ['Cleaning', 'Storage', 'Decor', 'Bedding'],
    name: ['Cleaning', 'Storage', 'Decor', 'Bedding'],
    more: 'home',
  },
  {
    id: 4,
    title: 'New home arrivals',
    link: 'Shop the latest from Home',
    images: [
      '/image/home-products/kitchenAndDining.jpg',
      '/image/home-products/homeImprovement.jpg',
      '/image/home-products/Decor.jpg',
      '/image/home-products/beddingAndBath.jpg',
    ],
    category: ['kitchen', 'home', 'Decor', 'Bedding'],
    name: ['Kitchen & dining', 'Home impovement', 'Decor', 'Bedding & bath'],
    more: 'kitchen',
  },
  {
    id: 5,
    title: 'Toys for everyone',
    link: 'shop now',
    images: ['/image/home-products/toysUnder25$.jpg'],
    category: ['Toy'],
    name: ['Toy'],
    more: 'Toy',
  },
  {
    id: 6,
    title: 'shop deals in Fashion',
    link: 'see all deals',
    images: [
      '/image/home-products/Jeans.jpg',
      '/image/home-products/Tops.jpg',
      '/image/home-products/Dresses.jpg',
      '/image/home-products/Shoes.jpg',
    ],
    category: ['Jeans', 'Tops', 'Dresses', 'Shoes'],
    name: ['Jeans', 'Tops', 'Dresses', 'Shoes'],
    more: 'fashion',
  },
]
export default function Products() {
  return (
    <div className=' w-full flex justify-center items-center p-5 mt-6 sm:mt-10 md:mt-16'>
      <div className='grid max-w-[1350px] w-full  lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
        {fourProducts.map((product) => (
          <FourProducts key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
