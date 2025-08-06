import { motion } from 'framer-motion';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-legacy-dark to-blue-900/20 pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
          <p className="text-xl text-legacy-gray max-w-3xl mx-auto">
            LegacyX provides everything you need to secure your digital assets and ensure they're passed on according to your wishes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Encrypted On-Chain Wills",
              description: "Create legally binding wills directly on the blockchain. Your instructions are encrypted and stored immutably.",
              icon: "📜"
            },
            {
              title: "AI-Driven Guidance",
              description: "Our AI assistant helps you create comprehensive inheritance plans and keeps them updated as your portfolio changes.",
              icon: "🤖"
            },
            {
              title: "Multi-Chain Support",
              description: "Manage assets across Bitcoin, Ethereum, and other major blockchains from a single unified interface.",
              icon: "⛓️"
            },
            {
              title: "Family DAOs",
              description: "Create decentralized autonomous organizations for your family to manage collective assets and inheritance rules.",
              icon: "👨‍👩‍👧‍👦"
            },
            {
              title: "Biometric Authentication",
              description: "Optional biometric triggers add an extra layer of security for accessing your vault.",
              icon: "🔐"
            },
            {
              title: "IPFS Storage",
              description: "Store important documents and last messages on IPFS for permanent, tamper-proof access.",
              icon: "📁"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="text-legacy-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}