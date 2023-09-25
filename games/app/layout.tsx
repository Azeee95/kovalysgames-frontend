import '../styles/globals.css'
import '../styles/button.css'
import '../styles/title.css'
import '../styles/regles.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kovalys Connect - Games',
  description: "Votre accélérateur d'affaires",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
