'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Users, Lock, Globe, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Multi-party computation and zero-knowledge proofs ensure your assets remain secure across generations.",
    color: "text-green-400"
  },
  {
    icon: Zap,
    title: "Multi-Chain Support",
    description: "Unified management of assets across Bitcoin, Ethereum, and all major blockchains from a single interface.",
    color: "text-blue-400"
  },
  {
    icon: Users,
    title: "Family DAOs",
    description: "Create decentralized autonomous organizations for your family to manage collective assets and inheritance.",
    color: "text-purple-400"
  },
  {
    icon: Lock,
    title: "Encrypted Storage",
    description: "All data encrypted with AES-256 and stored on decentralized IPFS for maximum security and availability.",
    color: "text-red-400"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Access your vault from anywhere in the world with just your wallet and biometric authentication.",
    color: "text-yellow-400"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Track your portfolio performance with live price feeds and comprehensive analytics dashboard.",
    color: "text-orange-400"
  }
];

export function Features() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-legacy-dark to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-legacy-gold">LegacyX</span>
          </h2>
          <p className="text-xl text-legacy-gray max-w-3xl mx-auto">
            The world's most advanced platform for crypto inheritance and multi-generational wealth management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-legacy-blue/20 p-6 rounded-xl border border-legacy-blue/30 hover:border-legacy-gold/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <feature.icon className={`w-8 h-8 ${feature.color} mr-3`} />
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-legacy-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
