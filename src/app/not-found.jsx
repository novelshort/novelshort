import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">页面未找到</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          抱歉，您访问的页面不存在或已被移除。请检查URL是否正确，或返回首页继续浏览。
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            as={Link}
            href="/"
            color="primary"
            variant="solid"
            size="lg"
          >
            返回首页
          </Button>
          <Button
            as={Link}
            href="/library"
            variant="bordered"
            size="lg"
          >
            浏览图书馆
          </Button>
        </div>
      </div>

      <div className="mt-12 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-16 h-[1px] bg-gray-300"></span>
          <span>NovelShorts</span>
          <span className="w-16 h-[1px] bg-gray-300"></span>
        </div>
      </div>
    </div>
  )
} 