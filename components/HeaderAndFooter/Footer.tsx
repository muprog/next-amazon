'use client'
import Image from 'next/image'
import { getFooter } from '@/utils'
import { useEffect, useState } from 'react'
import Link from 'next/link'
export default function Footer() {
  const getFooters = async () => {
    try {
      const result = await getFooter()
      setFooterData(result)
    } catch (error) {
      console.log(error)
    }
  }

  const [footerData, setFooterData] = useState([])

  useEffect(() => {
    getFooters()
  }, [])
  return (
    <div className='w-full bg-black text-gray-300 p-5 text-[7px] font-bold relative flex-shrink-0 top-[150px]'>
      <div className='w-full  flex justify-center'>
        {footerData?.length > 0 ? (
          <div className='w-[80%] grid grid-cols-5 gap-2'>
            {footerData.map((footer: any) => (
              <div key={footer?.id} className='w-[50px] text-wrap'>
                <h1>{footer?.title}</h1>
                <div className='text-gray-500'>{footer?.description}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>Oops no result!</div>
        )}
      </div>
      <div className='w-full flex flex-col items-center pt-5'>
        <div className='w-full flex justify-center gap-2 mb-2'>
          <Link href='/' className='hover:underline'>
            Conditions of Use
          </Link>
          <Link href='/' className='hover:underline'>
            Privacy Notice
          </Link>
          <Link href='/' className='hover:underline'>
            Customer Health Data Privacy Disclosure
          </Link>
          <Link href='/' className='hover:underline'>
            Your Ads Privacy Choices
          </Link>
        </div>
        <div>&copy; 1996-2025, Amazon.com, inc. or its affiliates</div>
      </div>
    </div>
  )
}
