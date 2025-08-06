import { ethers } from 'ethers';

export const getProvider = () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
  // Fallback to Infura
  return new ethers.providers.InfuraProvider(
    'mainnet',
    process.env.NEXT_PUBLIC_INFURA_ID
  );
};

export const getSigner = () => {
  const provider = getProvider();
  return provider.getSigner();
};

export const connectWallet = async () => {
  try {
    const provider = getProvider();
    if (provider instanceof ethers.providers.Web3Provider) {
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const network = await provider.getNetwork();
      return { address, chainId: network.chainId };
    }
  } catch (error) {
    console.error('Error connecting wallet:', error);
    throw error;
  }
};

export const switchNetwork = async (chainId: number) => {
  try {
    const provider = getProvider();
    if (provider instanceof ethers.providers.Web3Provider) {
      await provider.send('wallet_switchEthereumChain', [
        { chainId: ethers.utils.hexValue(chainId) },
      ]);
    }
  } catch (error) {
    console.error('Error switching network:', error);
    throw error;
  }
};