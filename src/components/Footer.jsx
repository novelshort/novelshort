'use client'

import { Link } from "@nextui-org/react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">NovelShorts</h3>
          <p className="text-gray-600">
            The Best Platform to Discover Short Stories
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/library">Library</Link>
            <Link href="/pricing">Subscription</Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <div className="flex flex-col gap-2">
            <Link href="#">Help Center</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">FAQ</Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200">
        <p className="text-center text-gray-600">
          © 2024 NovelShorts. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
} 