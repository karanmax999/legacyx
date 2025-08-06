import { motion } from 'framer-motion';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-legacy-dark to-blue-900/20 pt-24">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Enterprise-Grade Security</h1>
          <p className="text-xl text-legacy-gray max-w-3xl mx-auto">
            We've implemented multiple layers of protection to ensure your digital assets are safe and secure.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-legacy-gold">Security Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Zero-Trust Model",
                  description: "No single point of failure. Every action requires cryptographic proof."
                },
                {
                  title: "Multi-Party Computation",
                  description: "Your private keys are split and distributed, never stored in one place."
                },
                {
                  title: "End-to-End Encryption",
                  description: "All data is encrypted with AES-256 before being stored on-chain or off-chain."
                },
                {
                  title: "Regular Audits",
                  description: "Our smart contracts undergo regular security audits by leading firms."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-legacy-gold">{item.title}</h3>
                  <p className="text-legacy-gray">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-legacy-blue to-blue-800 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Security Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["SOC 2 Type II", "ISO 27001", "GDPR Compliant", "CCPA Compliant"].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-legacy-dark/50 p-4 rounded-lg text-center"
                >
                  <p className="font-bold text-legacy-gold">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}