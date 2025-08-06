'use client';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { WalletConnect } from '@/components/WalletConnect';
import { useState, useEffect } from 'react';
import { RealTimeAssets } from '@/components/RealTimeAssets';

interface Activity {
  id: string;
  type: string;
  description: string;
  amount?: string;
  timestamp: string;
}

export default function Dashboard() {
  const { isConnected, address } = useAccount();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching activities data
    const fetchActivities = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockActivities: Activity[] = [
        { id: '1', type: 'deposit', description: 'Added BTC to vault', amount: '+0.5 BTC', timestamp: '2 hours ago' },
        { id: '2', type: 'update', description: 'Updated beneficiary', amount: 'John Doe', timestamp: '1 day ago' },
        { id: '3', type: 'create', description: 'Created will', amount: 'Version 1.0', timestamp: '3 days ago' },
        { id: '4', type: 'deposit', description: 'Added ETH to vault', amount: '+1.0 ETH', timestamp: '5 days ago' },
        { id: '5', type: 'security', description: 'Enabled 2FA', timestamp: '1 week ago' },
      ];
      
      setActivities(mockActivities);
      setLoading(false);
    };

    fetchActivities();
  }, []);

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
              Please connect your wallet to access the LegacyX dashboard and manage your digital legacy.
            </p>
            <div className="flex justify-center">
              <WalletConnect />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome to Your Dashboard</h1>
            <p className="text-legacy-gray mb-2">Manage your digital legacy and assets</p>
            <p className="text-sm text-legacy-gray">
              Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          </div>
          <WalletConnect />
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-legacy-blue/20 p-4 md:p-6 rounded-xl border border-legacy-blue/30"
        >
          <h2 className="text-lg md:text-xl font-bold mb-2 text-legacy-gold">Your Assets</h2>
          <p className="text-sm text-legacy-gray">Real-time portfolio value</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-legacy-blue/20 p-4 md:p-6 rounded-xl border border-legacy-blue/30"
        >
          <h2 className="text-lg md:text-xl font-bold mb-2 text-legacy-gold">Beneficiaries</h2>
          <p className="text-2xl md:text-3xl font-bold mb-1">4</p>
          <p className="text-sm text-legacy-gray">2 verified</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-legacy-blue/20 p-4 md:p-6 rounded-xl border border-legacy-blue/30"
        >
          <h2 className="text-lg md:text-xl font-bold mb-2 text-legacy-gold">Security Score</h2>
          <p className="text-2xl md:text-3xl font-bold mb-1">98%</p>
          <p className="text-sm text-legacy-gray">Excellent</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-legacy-blue/20 p-4 md:p-6 rounded-xl border border-legacy-blue/30"
        >
          <h2 className="text-lg md:text-xl font-bold mb-2 text-legacy-gold">Will Status</h2>
          <p className="text-2xl md:text-3xl font-bold mb-1">Active</p>
          <p className="text-sm text-legacy-gray">Last updated 3 days ago</p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-legacy-blue/20 p-4 md:p-6 rounded-xl border border-legacy-blue/30 hover:border-legacy-gold transition text-left">
            <div className="text-2xl md:text-3xl mb-2">📝</div>
            <h3 className="font-bold mb-1">Create Will</h3>
            <p className="text-sm text-legacy-gray">Set up your digital inheritance plan</p>
          </button>
          <button className="bg-legacy-blue/20 p-4 md:p-6 rounded-xl border border-legacy-blue/30 hover:border-legacy-gold transition text-left">
            <div className="text-2xl md:text-3xl mb-2">👥</div>
            <h3 className="font-bold mb-1">Add Beneficiary</h3>
            <p className="text-sm text-legacy-gray">Add a new beneficiary to your will</p>
          </button>
          <button className="bg-legacy-blue/20 p-4 md:p-6 rounded-xl border border-legacy-blue/30 hover:border-legacy-gold transition text-left">
            <div className="text-2xl md:text-3xl mb-2">🔒</div>
            <h3 className="font-bold mb-1">Security Settings</h3>
            <p className="text-sm text-legacy-gray">Manage your vault security options</p>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Asset Distribution - RealTimeAssets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-legacy-blue/20 p-6 md:p-8 rounded-xl border border-legacy-blue/30"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6">Your Assets</h2>
          <RealTimeAssets />
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-legacy-blue/20 p-6 md:p-8 rounded-xl border border-legacy-blue/30"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6">Recent Activity</h2>
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-legacy-gold"></div>
              <p className="mt-2 text-legacy-gray">Loading activities...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex justify-between items-center pb-4 border-b border-legacy-blue/20 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      activity.type === 'deposit' ? 'bg-green-500/20' :
                      activity.type === 'update' ? 'bg-blue-500/20' :
                      activity.type === 'create' ? 'bg-purple-500/20' :
                      'bg-yellow-500/20'
                    }`}>
                      {activity.type === 'deposit' && <span className="text-green-400">↓</span>}
                      {activity.type === 'update' && <span className="text-blue-400">✏️</span>}
                      {activity.type === 'create' && <span className="text-purple-400">📝</span>}
                      {activity.type === 'security' && <span className="text-yellow-400">🔒</span>}
                    </div>
                    <div>
                      <p className="font-medium">{activity.description}</p>
                      <p className="text-sm text-legacy-gray">{activity.timestamp}</p>
                    </div>
                  </div>
                  {activity.amount && (
                    <p className="text-legacy-gold font-medium">{activity.amount}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 bg-gradient-to-r from-legacy-blue to-blue-800 p-6 md:p-8 rounded-xl"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">AI Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-legacy-dark/50 p-4 md:p-6 rounded-lg">
            <h3 className="font-bold mb-2 text-legacy-gold">Diversify Your Portfolio</h3>
            <p className="text-sm text-legacy-gray mb-3">
              Your portfolio is heavily weighted towards Bitcoin. Consider diversifying into other assets to reduce risk.
            </p>
            <button className="text-legacy-gold hover:text-yellow-400 text-sm font-medium">
              Learn More →
            </button>
          </div>
          <div className="bg-legacy-dark/50 p-4 md:p-6 rounded-lg">
            <h3 className="font-bold mb-2 text-legacy-gold">Update Beneficiary Information</h3>
            <p className="text-sm text-legacy-gray mb-3">
              Two of your beneficiaries have outdated contact information. Please update their details.
            </p>
            <button className="text-legacy-gold hover:text-yellow-400 text-sm font-medium">
              Update Now →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
