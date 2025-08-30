import type { Metadata, Viewport } from 'next'
import { MyProvider } from '@/components/ContextApi/MyContext'
import './globals.css'
import Header from '@/components/HeaderAndFooter/Header'
import Footer from '@/components/HeaderAndFooter/Footer'

export const metadata: Metadata = {
  title: 'Next Amazon',
  description: 'Developed by Adoniyas Seid',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='overflow-x-hidden '>
      <MyProvider>
        <body className='overflow-x-hidden'>
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
