'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import { WalletConnect } from '@/components/web3/ConnectWallet';

export function Hero() {
  const router = useRouter();
  const { isConnected } = useAccount();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-legacy-dark via-blue-900/20 to-legacy-blue/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-legacy-gold/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-legacy-light to-legacy-gold bg-clip-text text-transparent">
              Secure Your
            </span>
            <br />
            <span className="text-legacy-gold">Digital Legacy</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-legacy-gray leading-relaxed">
            The world's first decentralized platform for crypto inheritance, 
            vault management, and multi-generational wealth transfer
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            {isConnected ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/dashboard')}
                className="px-8 py-4 bg-legacy-gold text-legacy-dark font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-legacy-gold/25"
              >
                Go to Dashboard
              </motion.button>
            ) : (
              <WalletConnect />
            )}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/features')}
              className="px-8 py-4 border-2 border-legacy-gold text-legacy-gold font-bold rounded-lg hover:bg-legacy-gold hover:text-legacy-dark transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-legacy-blue/20 p-6 rounded-xl border border-legacy-blue/30"
            >
              <div className="text-3xl font-bold text-legacy-gold">$2.5B+</div>
              <div className="text-sm text-legacy-gray">Assets Secured</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-legacy-blue/20 p-6 rounded-xl border border-legacy-blue/30"
            >
              <div className="text-3xl font-bold text-legacy-gold">50K+</div>
              <div className="text-sm text-legacy-gray">Active Vaults</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-legacy-blue/20 p-6 rounded-xl border border-legacy-blue/30"
            >
              <div className="text-3xl font-bold text-legacy-gold">99.9%</div>
              <div className="text-sm text-legacy-gray">Uptime</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-legacy-gold rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-legacy-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
