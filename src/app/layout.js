import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '../redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manage Leads Dashboard',
  description: 'A dashboard to manage leads, created with Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
