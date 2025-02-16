import type { Metadata } from 'next'
import { MyProvider } from '@/components/ContextApi/MyContext'
import './globals.css'
import Header from '@/components/HeaderAndFooter/Header'
import Footer from '@/components/HeaderAndFooter/Footer'

export const metadata: Metadata = {
  title: 'Next Amazon',
  description: 'Developed by Adoniyas Seid',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <MyProvider>
        <body className='overflow-x-auto min-w-[720px] flex flex-col h-full bg-slate-100 bg-opacity-30'>
          <div>
            <Header />
          </div>
          <div className='min-h-[50vh]'>{children}</div>

          <div>
            <Footer />
          </div>
        </body>
      </MyProvider>
    </html>
  )
}
