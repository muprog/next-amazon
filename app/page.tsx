import Advertisement from '@/components/Ads/Advertisement'
import BooksHorizontalScoll from '@/components/HorizontalScroll/BooksHorizontalScoll'
import Products from '@/components/Products/Products'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='min-h-[50vh] h-auto pb-5 flex-shrink-0 relative z-10'>
      <Advertisement />
      <Products />
      <BooksHorizontalScoll />
    </div>
  )
}
