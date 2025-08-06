'use client';

import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
import { fetchBalance, fetchTokenPrice } from '@/lib/blockchain';

interface TokenConfig {
  symbol: string;
  name: string;
  address?: string;
  decimals: number;
  chainId: number;
}

interface AssetBalance {
  symbol: string;
  name: string;
  balance: string;
  valueUSD: number;
  chain: string;
}

export const RealTimeAssets = () => {
  const { address, isConnected } = useAccount();
  const [assets, setAssets] = useState<AssetBalance[]>([]);
  const [loading, setLoading] = useState(true);

  const tokens: TokenConfig[] = [
    { symbol: 'ETH', name: 'Ethereum', decimals: 18, chainId: 1 },
    { symbol: 'USDC', name: 'USD Coin', address: '0xA0b86a33E6417aAb7b6DbCBbe9FD4E89c0778a4B', decimals: 6, chainId: 1 },
    { symbol: 'MATIC', name: 'Polygon', address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeB0f', decimals: 18, chainId: 137 },
  ];

  useEffect(() => {
    const fetchAssets = async () => {
      if (!isConnected || !address) return;

      setLoading(true);
      const assetBalances: AssetBalance[] = [];

      for (const token of tokens) {
        try {
          const balance = await fetchBalance(address, token.address);
          const price = await fetchTokenPrice(token.symbol);
          
          const formattedBalance = (Number(balance) / Math.pow(10, token.decimals)).toFixed(4);
          const valueUSD = (Number(balance) / Math.pow(10, token.decimals)) * price;

          if (valueUSD > 0.01) { // Only show assets worth more than $0.01
            assetBalances.push({
              symbol: token.symbol,
              name: token.name,
              balance: formattedBalance,
              valueUSD,
              chain: token.chainId === 1 ? 'Ethereum' : 'Polygon',
            });
          }
        } catch (error) {
          console.error(`Error fetching ${token.symbol} balance:`, error);
        }
      }

      setAssets(assetBalances);
      setLoading(false);
    };

    fetchAssets();

    // Set up periodic refresh
    const interval = setInterval(fetchAssets, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, [address, isConnected]);

  if (!isConnected) {
    return (
      <div className="text-center py-8 text-legacy-gray">
        Connect your wallet to view your assets
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-legacy-gold"></div>
        <p className="mt-2 text-legacy-gray">Loading assets...</p>
      </div>
    );
  }

  const totalValue = assets.reduce((sum, asset) => sum + asset.valueUSD, 0);

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Portfolio Value</h3>
        <p className="text-3xl font-bold text-legacy-gold">${totalValue.toFixed(2)}</p>
      </div>
      
      <div className="space-y-3">
        {assets.map((asset, index) => (
          <div key={asset.symbol} className="flex justify-between items-center p-3 bg-legacy-blue/10 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-legacy-gold rounded-full flex items-center justify-center mr-3">
                <span className="text-legacy-dark font-bold text-sm">{asset.symbol.charAt(0)}</span>
              </div>
              <div>
                <p className="font-medium">{asset.name}</p>
                <p className="text-sm text-legacy-gray">{asset.balance} {asset.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${asset.valueUSD.toFixed(2)}</p>
              <p className="text-sm text-legacy-gray">{asset.chain}</p>
            </div>
          </div>
        ))}
      </div>
      
      {assets.length === 0 && (
        <div className="text-center py-8 text-legacy-gray">
          No assets found in your wallet
        </div>
      )}
    </div>
  );
};