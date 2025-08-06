'use client';

import React, { useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect, useChainId } from 'wagmi';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AlertCircle, CheckCircle, Wallet, X, ExternalLink } from 'lucide-react';
import { formatAddress } from '@/lib/utils';

export const ConnectWallet = () => {
  const { isConnected, address, isConnecting, isDisconnected } = useAccount();
  const { connect, connectors, error, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  
  const [showError, setShowError] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'connected' | 'error'>('idle');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (error) {
      setConnectionStatus('error');
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
        setConnectionStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    } else if (isConnected) {
      setConnectionStatus('connected');
    } else if (isConnecting) {
      setConnectionStatus('connecting');
    } else {
      setConnectionStatus('idle');
    }
  }, [isConnected, isConnecting, error]);

  const handleConnect = async () => {
    try {
      setConnectionStatus('connecting');
      await connect({ connector: connectors[0] });
    } catch (err) {
      console.error('Connection error:', err);
      setConnectionStatus('error');
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setConnectionStatus('idle');
  };

  const getNetworkName = (chainId: number) => {
    const networks: { [key: number]: string } = {
      1: 'Ethereum',
      56: 'BSC',
      137: 'Polygon',
      43114: 'Avalanche',
      42161: 'Arbitrum',
      10: 'Optimism',
    };
    return networks[chainId] || 'Unknown';
  };

  const getNetworkColor = (chainId: number) => {
    const colors: { [key: number]: string } = {
      1: 'text-blue-400',
      56: 'text-yellow-400',
      137: 'text-purple-400',
      43114: 'text-red-400',
      42161: 'text-blue-300',
      10: 'text-red-300',
    };
    return colors[chainId] || 'text-gray-400';
  };

  if (!isMounted) {
    return (
      <Button size="sm" variant="outline" disabled>
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      </Button>
    );
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-lg p-3 text-sm text-red-400 z-50"
          >
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4" />
              <span>{error?.message || 'Connection failed'}</span>
              <button onClick={() => setShowError(false)} className="hover:text-red-300">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isConnected && address ? (
          <motion.div
            key="connected"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center space-x-3"
          >
            <div className="glass-card px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-legacy-light">
                  {formatAddress(address)}
                </span>
              </div>
              <div className={`text-xs mt-1 ${getNetworkColor(chainId)}`}>
                {getNetworkName(chainId)}
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDisconnect}
              className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500/70 transition-colors"
            >
              Disconnect
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="disconnected"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <Button
              size="sm"
              variant="outline"
              onClick={handleConnect}
              disabled={isPending || connectionStatus === 'connecting'}
              className="relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Wallet className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>
                  {connectionStatus === 'connecting' ? 'Connecting...' : 'Connect Wallet'}
                </span>
              </span>
              {connectionStatus === 'connecting' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
