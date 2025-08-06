'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';

interface Asset {
  id: string;
  name: string;
  symbol: string;
  chain: string;
  amount: number;
  valueUSD: number;
}

interface Beneficiary {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
  sharePercentage: number;
  isVerified: boolean;
}

export default function VaultPage() {
  const { isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState<'assets' | 'beneficiaries' | 'settings'>('assets');
  
  const [assets, setAssets] = useState<Asset[]>([
    { id: '1', name: 'Bitcoin', symbol: 'BTC', chain: 'Bitcoin', amount: 0.5, valueUSD: 22500 },
    { id: '2', name: 'Ethereum', symbol: 'ETH', chain: 'Ethereum', amount: 2.5, valueUSD: 4500 },
    { id: '3', name: 'USD Coin', symbol: 'USDC', chain: 'Ethereum', amount: 5000, valueUSD: 5000 },
    { id: '4', name: 'Polygon', symbol: 'MATIC', chain: 'Polygon', amount: 1000, valueUSD: 800 },
  ]);

  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', walletAddress: '0x123...456', sharePercentage: 40, isVerified: true },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', walletAddress: '0x789...012', sharePercentage: 35, isVerified: true },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', walletAddress: '0x345...678', sharePercentage: 25, isVerified: false },
  ]);

  const totalValue = assets.reduce((sum, asset) => sum + asset.valueUSD, 0);

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30"
          >
            <h1 className="text-3xl font-bold mb-4">Connect Your Wallet</h1>
            <p className="text-legacy-gray mb-6">
              Please connect your wallet to access your vault and manage your digital assets.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">My Vault</h1>
        <p className="text-legacy-gray">Manage your digital assets and inheritance settings</p>
      </motion.div>

      {/* Vault Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-legacy-blue to-blue-800 p-8 rounded-xl mb-8"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Total Value</h2>
            <p className="text-4xl font-bold">${totalValue.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-legacy-gray mb-1">Security Score</p>
            <div className="flex items-center">
              <div className="w-32 h-2 bg-legacy-dark rounded-full mr-2">
                <div className="h-full bg-legacy-gold rounded-full" style={{ width: '98%' }}></div>
              </div>
              <span className="text-legacy-gold font-bold">98%</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-legacy-dark/50 p-4 rounded-lg">
            <p className="text-legacy-gray mb-1">Assets</p>
            <p className="text-xl font-bold">{assets.length}</p>
          </div>
          <div className="bg-legacy-dark/50 p-4 rounded-lg">
            <p className="text-legacy-gray mb-1">Chains</p>
            <p className="text-xl font-bold">3</p>
          </div>
          <div className="bg-legacy-dark/50 p-4 rounded-lg">
            <p className="text-legacy-gray mb-1">Beneficiaries</p>
            <p className="text-xl font-bold">{beneficiaries.length}</p>
          </div>
          <div className="bg-legacy-dark/50 p-4 rounded-lg">
            <p className="text-legacy-gray mb-1">Last Updated</p>
            <p className="text-xl font-bold">2h ago</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex border-b border-legacy-blue/30 mb-8">
        {[
          { id: 'assets', label: 'Assets' },
          { id: 'beneficiaries', label: 'Beneficiaries' },
          { id: 'settings', label: 'Settings' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.id
                ? 'text-legacy-gold border-b-2 border-legacy-gold'
                : 'text-legacy-gray hover:text-legacy-light'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'assets' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Assets</h2>
            <button className="px-4 py-2 bg-legacy-gold text-legacy-dark rounded-lg font-medium hover:bg-yellow-500 transition">
              Add Asset
            </button>
          </div>
          
          <div className="bg-legacy-blue/20 rounded-xl border border-legacy-blue/30 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-legacy-blue/30 font-semibold">
              <div className="col-span-5">Asset</div>
              <div className="col-span-3">Chain</div>
              <div className="col-span-2">Amount</div>
              <div className="col-span-2">Value</div>
            </div>
            {assets.map((asset) => (
              <div key={asset.id} className="grid grid-cols-12 gap-4 p-4 border-b border-legacy-blue/20 last:border-0">
                <div className="col-span-5 flex items-center">
                  <div className="w-10 h-10 bg-legacy-gold rounded-full flex items-center justify-center mr-3">
                    <span className="text-legacy-dark font-bold">{asset.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{asset.name}</p>
                    <p className="text-sm text-legacy-gray">{asset.symbol}</p>
                  </div>
                </div>
                <div className="col-span-3 flex items-center">
                  {asset.chain}
                </div>
                <div className="col-span-2 flex items-center">
                  {asset.amount}
                </div>
                <div className="col-span-2 flex items-center font-medium">
                  ${asset.valueUSD.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'beneficiaries' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Beneficiaries</h2>
            <button className="px-4 py-2 bg-legacy-gold text-legacy-dark rounded-lg font-medium hover:bg-yellow-500 transition">
              Add Beneficiary
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beneficiaries.map((beneficiary) => (
              <motion.div
                key={beneficiary.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-legacy-blue/20 p-6 rounded-xl border border-legacy-blue/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{beneficiary.name}</h3>
                    <p className="text-legacy-gray">{beneficiary.email}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    beneficiary.isVerified 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {beneficiary.isVerified ? 'Verified' : 'Pending'}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-legacy-gray mb-1">Wallet Address</p>
                  <p className="font-mono text-sm">{beneficiary.walletAddress}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-legacy-gray mb-1">Share</p>
                    <p className="font-bold">{beneficiary.sharePercentage}%</p>
                  </div>
                  <button className="text-legacy-gold hover:text-yellow-400 text-sm">
                    Edit
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'settings' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Vault Settings</h2>
          
          <div className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30 mb-8">
            <h3 className="text-xl font-bold mb-4">Security Settings</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-legacy-blue/20">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-legacy-gray">Add an extra layer of security to your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-legacy-gold"></div>
                </label>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-legacy-blue/20">
                <div>
                  <p className="font-medium">Biometric Authentication</p>
                  <p className="text-sm text-legacy-gray">Use fingerprint or face recognition to access your vault</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-legacy-gold"></div>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Social Recovery</p>
                  <p className="text-sm text-legacy-gray">Designate trusted contacts to help recover your vault</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-legacy-gold"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30">
            <h3 className="text-xl font-bold mb-4">Inheritance Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-legacy-light mb-2">Inactivity Period</label>
                <select className="w-full px-4 py-3 bg-legacy-dark border border-legacy-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-legacy-gold">
                  <option>6 months</option>
                  <option selected>1 year</option>
                  <option>2 years</option>
                  <option>5 years</option>
                </select>
              </div>
              
              <div>
                <label className="block text-legacy-light mb-2">Notification Method</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Email notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>SMS notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Push notifications</span>
                  </label>
                </div>
              </div>
              
              <button className="px-6 py-3 bg-legacy-gold text-legacy-dark font-bold rounded-lg hover:bg-yellow-500 transition">
                Save Settings
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}