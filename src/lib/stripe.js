import { loadStripe } from '@stripe/stripe-js';

// 替换为您的 Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default stripePromise; 