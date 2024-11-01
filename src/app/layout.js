'use client'

import { NextUIProvider } from '@nextui-org/react'
import { AuthProvider } from '@/context/AuthContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NextUIProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </NextUIProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
