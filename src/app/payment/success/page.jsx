'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardBody, Button } from "@nextui-org/react"
import Link from 'next/link'

export default function PaymentSuccess() {
  const [status, setStatus] = useState('loading')
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (sessionId) {
      // 这里可以验证支付状态并更新用户会员信息
      setStatus('success')
    }
  }, [sessionId])

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-lg">
        <CardBody className="text-center py-10">
          {status === 'loading' ? (
            <div>正在确认支付状态...</div>
          ) : (
            <>
              <div className="text-success mb-6">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-4">支付成功！</h1>
              <p className="text-gray-600 mb-8">
                感谢您订阅 NovelShorts 会员服务。您现在可以享受所有会员特权了。
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  as={Link}
                  href="/library"
                  color="primary"
                >
                  前往我的书架
                </Button>
                <Button
                  as={Link}
                  href="/"
                  variant="bordered"
                >
                  返回首页
                </Button>
              </div>
            </>
          )}
        </CardBody>
      </Card>
    </div>
  )
} 