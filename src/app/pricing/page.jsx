'use client'

import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from "@nextui-org/react"
import { useAuth } from "@/context/AuthContext"
import stripePromise from '@/lib/stripe'
import { useState } from "react"

export default function Pricing() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (priceId) => {
    if (!user) {
      // 提示用户登录
      alert('请先登录后再订阅')
      return
    }

    try {
      setLoading(true)
      
      // 创建 checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          userId: user.uid,
        }),
      })

      const { sessionId } = await response.json()

      // 重定向到 Stripe Checkout
      const stripe = await stripePromise
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      })

      if (error) {
        console.error('Stripe Checkout error:', error)
        alert('支付发生错误，请稍后重试')
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('支付发生错误，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  const plans = [
    {
      name: "Trial",
      duration: 3,
      price: 9,
      originalPrice: 15,
      perDayPrice: 3,
      priceId: "price_xxx",
      features: [
        "Unlimited Reading",
        "Personalized Recommendations",
        "Ad-free Experience",
        "3-day Trial",
      ],
      buttonText: "Start Trial",
      isPro: false,
      tag: "Trial Price"
    },
    {
      name: "Weekly",
      duration: 7,
      price: 19,
      originalPrice: 35,
      perDayPrice: 2.7,
      features: [
        "Unlimited Reading",
        "Personalized Recommendations",
        "Ad-free Experience",
        "Offline Download",
        "7-day Membership",
      ],
      buttonText: "Get Weekly",
      isPro: false,
      tag: "Best Value"
    },
    {
      name: "Monthly",
      duration: 30,
      price: 39,
      originalPrice: 99,
      perDayPrice: 1.3,
      features: [
        "Unlimited Reading",
        "Personalized Recommendations",
        "Ad-free Experience",
        "Offline Download",
        "Exclusive Benefits",
        "30-day Membership",
      ],
      buttonText: "Get Monthly",
      isPro: true,
      tag: "Most Popular"
    },
    {
      name: "Quarterly",
      duration: 90,
      price: 99,
      originalPrice: 297,
      perDayPrice: 1.1,
      features: [
        "Unlimited Reading",
        "Personalized Recommendations",
        "Ad-free Experience",
        "Offline Download",
        "Exclusive Benefits",
        "90-day Membership",
        "Quarterly Limited Edition",
      ],
      buttonText: "Get Quarterly",
      isPro: false,
      tag: "Best Deal"
    },
    {
      name: "Yearly",
      duration: 365,
      price: 299,
      originalPrice: 1188,
      perDayPrice: 0.82,
      features: [
        "Unlimited Reading",
        "Personalized Recommendations",
        "Ad-free Experience",
        "Offline Download",
        "Exclusive Benefits",
        "365-day Membership",
        "Yearly Limited Edition",
        "Birthday Bonus",
      ],
      buttonText: "Get Yearly",
      isPro: false,
      tag: "Most Cost-Effective"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h1>
        <p className="text-xl text-gray-600">Flexible subscription options for your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`${plan.isPro ? "border-2 border-primary" : ""} relative`}
          >
            {plan.tag && (
              <div className="absolute -top-3 right-4">
                <Chip 
                  color={plan.isPro ? "primary" : "secondary"} 
                  variant="shadow"
                  className="font-semibold"
                >
                  {plan.tag}
                </Chip>
              </div>
            )}
            <CardHeader className="flex flex-col gap-2 pt-8">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">¥{plan.price}</span>
                <span className="text-small text-default-500 line-through">¥{plan.originalPrice}</span>
              </div>
              <div className="text-tiny text-default-500">
                ≈ ¥{plan.perDayPrice}/天
              </div>
            </CardHeader>
            <CardBody>
              <div className="text-small text-default-500 mb-4">
                {plan.duration}天会员时长
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
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
                    {feature}
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                color={plan.isPro ? "primary" : "default"}
                variant={plan.isPro ? "shadow" : "bordered"}
                className="w-full"
                size="lg"
                onClick={() => handleSubscribe(plan.priceId)}
                isLoading={loading}
              >
                {loading ? "处理中..." : plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-2xl mx-auto">
        <Card>
          <CardBody>
            <h3 className="text-xl font-bold mb-4">Membership Benefits</h3>
            <ul className="space-y-2">
              <li>• Unlimited Reading: Access all premium content</li>
              <li>• Personalized Recommendations: Smart content curation</li>
              <li>• Ad-free Experience: Pure reading environment</li>
              <li>• Offline Download: Read stories offline</li>
              <li>• Exclusive Benefits: Monthly special gifts</li>
              <li>• Birthday Bonus: Extra 7 days on your birthday month</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  )
} 