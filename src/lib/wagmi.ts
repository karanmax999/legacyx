import { createConfig, http } from 'wagmi';
import { mainnet, polygon, arbitrum } from 'viem/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';
import { createPublicClient } from 'viem';

// Create public client for blockchain interactions
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const config = createConfig({
  chains: [mainnet, polygon, arbitrum],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'legacyx-default',
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
  },
});
