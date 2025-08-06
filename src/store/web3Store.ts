import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Web3State {
  account: string | null;
  chainId: number | null;
  isConnected: boolean;
  isConnecting: boolean;
  setAccount: (account: string | null) => void;
  setChainId: (chainId: number | null) => void;
  setIsConnected: (isConnected: boolean) => void;
  setIsConnecting: (isConnecting: boolean) => void;
  reset: () => void;
}

export const useWeb3Store = create<Web3State>()(
  persist(
    (set) => ({
      account: null,
      chainId: null,
      isConnected: false,
      isConnecting: false,
      setAccount: (account) => set({ account }),
      setChainId: (chainId) => set({ chainId }),
      setIsConnected: (isConnected) => set({ isConnected }),
      setIsConnecting: (isConnecting) => set({ isConnecting }),
      reset: () => set({ 
        account: null, 
        chainId: null, 
        isConnected: false, 
        isConnecting: false 
      }),
    }),
    {
      name: 'web3-storage',
    }
  )
);