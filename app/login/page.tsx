'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Link from 'next/link'
export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])
  return (
    <div className='w-full h-[100vh] flex flex-col justify-start items-center text-[14px] pt-10'>
      <div className='relative w-[105px] h-[51px] mb-4 flex-shrink-0 hover:border-[3px] hover:border-black p-2 rounded-[5px]'>
        <Link href={'/'} className='w-full h-full '>
          <Image
            src={'/image/black-amazon-logo.png'}
            alt='amazon'
            fill
            className='w-[100px] h-[100px]'
          />
        </Link>
      </div>
      <div className='w-[320px] h-[350px] border border-blue-300 rounded-[10px] p-4 flex-shrink-0'>
        <h1 className='text-[30px]'>Sign in</h1>
        <form action='' className='flex flex-col gap-4'>
          <div>
            <label htmlFor='username' className='font-bold'>
              Email or mobile phone number
            </label>
            <input
              ref={inputRef}
              type='text'
              name='username'
              id='username'
              className='border border-gray-400 w-full rounded-md thick-outline outline-8 outline-offset-4 outline-blue-500 px-2 py-1 shadow-inner shadow-slate-200 '
            />
          </div>
          <div>
            <Button
              title='Continue'
              btnType='submit'
              btnStyle='bg-yellow-400 w-full rounded-full py-1'
            />
          </div>
          <div>
            <p>
              By continuing, you agree to Amazon&apos;s{' '}
              <Link
                href={'conditions_of_use'}
                className='text-amazon-blue underline'
              >
                Conditions of Use{' '}
              </Link>{' '}
              and{' '}
              <Link
                href={'Privacy_Notice'}
                className='text-amazon-blue underline'
              >
                Privacy Notice
              </Link>
            </p>
            <div>Need help?</div>
            <hr className='my-4 border-gray-300' />
            <div className='flex w-full h-full flex-1 flex-col gap-2'>
              <div className='font-bold'>Buying for work?</div>
              <div>
                <Link
                  href={'/amazon-business'}
                  className='text-amazon-blue hover:text-red-600 hover:underline'
                >
                  Shop on Amazon Business
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <fieldset className='border-t border-t-gray-300 w-[300px] text-center my-6 pt-2'>
        <legend className='text-gray-500 text-[12px]'>New to Amazon</legend>
        <Link href={'/signup'}>
          <Button
            title='Create your Amazon account'
            btnType='button'
            btnStyle='w-full border border-gray-400 py-1 rounded-full hover:bg-slate-50'
          />
        </Link>
      </fieldset>

      <hr className='border border-gray-300 w-full' />
      <div className='w-full h-[100px] flex flex-col items-center justify-center text-[12px] flex-shrink-0'>
        <div className='w-full flex justify-center gap-4'>
          <Link href={'conditions_of_use'} className='text-amazon-blue'>
            Conditions of Use{' '}
          </Link>
          <Link href={'Privacy_Notice'} className='text-amazon-blue'>
            Privacy Notice
          </Link>
          <Link href={'Help'} className='text-amazon-blue'>
            Help
          </Link>
        </div>
        <div className='text-gray-600'>
          &copy; 1996-2025, Amazon.com, inc. or its affiliates
        </div>
      </div>
    </div>
  )
}
