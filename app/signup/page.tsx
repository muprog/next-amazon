'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
export default function page() {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const inputRef3 = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const [inputValues, setInputValues] = useState({
    name: '',
    userName: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  // console.log(inputValues)

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!/\w+\s+\w+/.test(inputValues.name)) {
      newErrors.name = 'Enter first and last name'
    }
    if (
      !/^\S+@\S+\.\S+$/.test(inputValues.userName) &&
      !/^\d{6,10}$/.test(inputValues.userName)
    ) {
      newErrors.userName = 'Enter a valid email or phone number'
    }
    if (inputValues.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (inputValues.password !== inputValues.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const router = useRouter()
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      if (validate()) {
        // console.log('Form submitted:', inputValues)
        toast.success('success fully registered')
        router.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='w-full h-[100vh] flex flex-col justify-start items-center text-[12px] pt-10 gap-4'>
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
        <div className='w-[350px] h-[615px] border border-blue-300 rounded-[10px] p-4 flex-shrink-0'>
          <h1 className='text-[28px] mb-2'>Create account</h1>
          <form
            action='/login'
            method='POST'
            className='flex flex-col gap-4 text-[14px]'
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor='name' className='font-bold'>
                Your name
              </label>
              <input
                ref={inputRef}
                type='text'
                name='name'
                value={inputValues.name}
                id='name'
                className='border border-gray-400 w-full rounded-md thick-outline outline-8 outline-offset-4 outline-blue-500 px-2 py-1 shadow-inner shadow-slate-200 '
                placeholder='First and last name'
                onChange={handleChange}
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor='username' className='font-bold'>
                Email or mobile phone number
              </label>
              <input
                ref={inputRef1}
                type='text'
                name='userName'
                value={inputValues.userName}
                id='username'
                className='border border-gray-400 w-full rounded-md thick-outline outline-8 outline-offset-4 outline-blue-500 px-2 py-1 shadow-inner shadow-slate-200 '
                onChange={handleChange}
              />
              {errors.userName && (
                <p className='text-red-500 text-sm'>{errors.userName}</p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='font-bold'>
                Password
              </label>
              <input
                ref={inputRef2}
                type='password'
                name='password'
                value={inputValues.password}
                id='password'
                className='border border-gray-400 w-full rounded-md thick-outline outline-8 outline-offset-4 outline-blue-500 px-2 py-1 shadow-inner shadow-slate-200'
                placeholder='At least 6 character'
                onChange={handleChange}
              />
              {errors.password && (
                <p className='text-red-500 text-sm'>{errors.password}</p>
              )}
              <div className='flex gap-2 items-center mt-2'>
                <div className='w-[15px] h-[15px] relative'>
                  <Image
                    src={'/warning.png'}
                    alt=''
                    fill
                    className='object-contain'
                  />
                </div>
                <p className='text-[12px]'>
                  Password must be at least 6 characters.
                </p>
              </div>
            </div>
            <div>
              <label htmlFor='confirmPassword' className='font-bold'>
                Re-enter password
              </label>
              <input
                ref={inputRef3}
                type='password'
                name='confirmPassword'
                value={inputValues.confirmPassword}
                id='username'
                className='border border-gray-400 w-full rounded-md thick-outline outline-8 outline-offset-4 outline-blue-500 px-2 py-1 shadow-inner shadow-slate-200'
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <Button
                title='Continue'
                btnType='submit'
                btnStyle='bg-yellow-400 w-full rounded-full py-2'
              />
            </div>
            <div>
              <p className='text-[12px]'>
                By continuing, you agree to Amazon's{' '}
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
              <hr className='my-4 border-gray-300' />
              <div className='flex w-full h-full flex-1 flex-col'>
                <div className='font-bold'>Buying for work?</div>
                <div>
                  <Link
                    href={'/amazon-business'}
                    className='text-amazon-blue hover:text-red-600 hover:underline'
                  >
                    Create a free business account
                  </Link>
                </div>
                <div className='my-4'>
                  <hr className='border border-blue-100' />
                </div>

                <div className='flex gap-2'>
                  <p>Already have an account?</p>
                  <p>
                    <Link href={'/login'} className='text-blue-500 '>
                      Sign in <span className='text-[10px]'>{'>'}</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div></div>

        <div className='w-full px-10'>
          <hr className='border border-gray-300 w-full' />
        </div>

        <div className='w-full h-[100px] flex flex-col items-center py-4 flex-shrink-0'>
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
          <div>&copy; 1996-2025, Amazon.com, inc. or its affiliates</div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
