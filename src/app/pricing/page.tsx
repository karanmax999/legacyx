import { motion } from 'framer-motion';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'per year',
      description: 'Perfect for individuals getting started with crypto inheritance',
      features: [
        'Up to $100K in assets',
        '3 beneficiaries',
        'Basic will creation',
        'Email support',
        'Standard security'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'per year',
      description: 'Ideal for crypto enthusiasts with larger portfolios',
      features: [
        'Up to $1M in assets',
        '10 beneficiaries',
        'Advanced will features',
        'Priority support',
        'Enhanced security',
        'Multi-chain support',
        'Family DAO setup'
      ],
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: 'per year',
      description: 'For institutions and high-net-worth individuals',
      features: [
        'Unlimited assets',
        'Unlimited beneficiaries',
        'Custom will solutions',
        '24/7 dedicated support',
        'Enterprise security',
        'All chains supported',
        'Custom integrations',
        'White-glove onboarding',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-legacy-dark to-blue-900/20 pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-legacy-gray max-w-3xl mx-auto">
            Choose the plan that's right for you. All plans include our core security features and 24/7 monitoring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-xl border-2 p-8 ${
                plan.popular 
                  ? 'border-legacy-gold bg-legacy-blue/20' 
                  : 'border-legacy-blue/30 bg-legacy-blue/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-legacy-gold text-legacy-dark px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-legacy-gray">/{plan.period}</span>
              </div>
              <p className="text-legacy-gray mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-legacy-gold mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-bold transition ${
                  plan.popular 
                    ? 'bg-legacy-gold text-legacy-dark hover:bg-yellow-500' 
                    : 'bg-legacy-blue text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What happens if I need to update my will?",
                answer: "You can update your will at any time. Each new version is stored securely on the blockchain, creating an immutable record of changes."
              },
              {
                question: "How secure is my data?",
                answer: "We use military-grade encryption, multi-party computation, and zero-knowledge proofs to ensure your data remains secure and private."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. Your data will remain accessible until the end of your billing period."
              },
              {
                question: "Do you support all blockchains?",
                answer: "We support all major blockchains including Bitcoin, Ethereum, Polygon, Arbitrum, and more. Enterprise plans can add custom chain support."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-legacy-blue/20 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-legacy-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}