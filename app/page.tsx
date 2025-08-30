import Advertisement from '@/components/Ads/Advertisement'
import BooksHorizontalScoll from '@/components/HorizontalScroll/BooksHorizontalScoll'
import Products from '@/components/Products/Products'
export default function Home() {
  return (
    <div className='min-h-[50vh] h-auto pb-5 flex-shrink-0 relative z-0'>
      <Advertisement />
      <Products />
      <BooksHorizontalScoll />
    </div>
  )
}
