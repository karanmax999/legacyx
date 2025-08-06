export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-legacy-dark to-blue-900/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Secure Your <span className="text-legacy-gold">Digital Legacy</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-legacy-gray">
            The world's first decentralized platform for crypto inheritance, 
            vault management, and multi-generational wealth transfer
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-legacy-gold text-legacy-dark font-bold rounded-lg hover:bg-yellow-500 transition transform hover:scale-105">
              Create Your Vault
            </button>
            <button className="px-8 py-4 border-2 border-legacy-gold text-legacy-gold font-bold rounded-lg hover:bg-legacy-gold hover:text-legacy-dark transition transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose LegacyX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30 backdrop-blur-sm">
              <div className="text-legacy-gold text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Military-Grade Security</h3>
              <p className="text-legacy-gray">
                Multi-party computation and zero-knowledge proofs ensure your assets remain secure across generations.
              </p>
            </div>
            <div className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30 backdrop-blur-sm">
              <div className="text-legacy-gold text-4xl mb-4">⛓️</div>
              <h3 className="text-2xl font-bold mb-4">Multi-Chain Support</h3>
              <p className="text-legacy-gray">
                Unified management of assets across Bitcoin, Ethereum, and all major blockchains from a single interface.
              </p>
            </div>
            <div className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30 backdrop-blur-sm">
              <div className="text-legacy-gold text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold mb-4">Family DAOs</h3>
              <p className="text-legacy-gray">
                Create decentralized autonomous organizations for your family to manage collective assets and inheritance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-legacy-blue to-blue-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Security First Approach</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-legacy-gray">
            We've built LegacyX with security as our foundation. Your digital assets are protected by multiple layers of cryptographic security.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-legacy-dark/50 p-6 rounded-lg border border-legacy-blue/20">
              <h3 className="text-lg font-bold mb-2 text-legacy-gold">Encrypted Storage</h3>
              <p className="text-sm">All data encrypted with AES-256</p>
            </div>
            <div className="bg-legacy-dark/50 p-6 rounded-lg border border-legacy-blue/20">
              <h3 className="text-lg font-bold mb-2 text-legacy-gold">MPC Technology</h3>
              <p className="text-sm">Multi-party computation for key security</p>
            </div>
            <div className="bg-legacy-dark/50 p-6 rounded-lg border border-legacy-blue/20">
              <h3 className="text-lg font-bold mb-2 text-legacy-gold">Biometric Auth</h3>
              <p className="text-sm">Multi-factor authentication options</p>
            </div>
            <div className="bg-legacy-dark/50 p-6 rounded-lg border border-legacy-blue/20">
              <h3 className="text-lg font-bold mb-2 text-legacy-gold">Audit Trail</h3>
              <p className="text-sm">Complete transparency of all actions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Legacy?</h2>
          <p className="text-xl mb-8">
            Join thousands of crypto holders who trust LegacyX with their digital inheritance.
          </p>
          <button className="px-8 py-4 bg-legacy-gold text-legacy-dark font-bold rounded-lg hover:bg-yellow-500 transition transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
