import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saepul Malik Portofolio',
  description: 'Web Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, 'max-w-desktop', 'xl:m-auto', 'm-auto py-1 sm:py-8')} >{children}</body>
    </html>
  )
}
