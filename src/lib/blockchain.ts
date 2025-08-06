import { publicClient } from './wagmi';

export const fetchBalance = async (address: string, tokenAddress?: string) => {
  try {
    if (tokenAddress) {
      // Fetch ERC-20 token balance
      const balance = await publicClient.readContract({
        address: tokenAddress as `0x${string}`,
        abi: [
          {
            name: 'balanceOf',
            type: 'function',
            stateMutability: 'view',
            inputs: [{ name: 'account', type: 'address' }],
            outputs: [{ name: '', type: 'uint256' }],
          },
        ],
        functionName: 'balanceOf',
        args: [address as `0x${string}`],
      });
      return balance;
    } else {
      // Fetch native token balance (ETH, MATIC, etc.)
      const balance = await publicClient.getBalance({
        address: address as `0x${string}`,
      });
      return balance;
    }
  } catch (error) {
    console.error('Error fetching balance:', error);
    return 0n;
  }
};

export const fetchTokenPrice = async (tokenSymbol: string) => {
  try {
    // This is a mock implementation - in production, you'd use a price oracle API
    const mockPrices: Record<string, number> = {
      BTC: 45000,
      ETH: 2500,
      MATIC: 0.8,
      USDC: 1,
      USDT: 1,
      LINK: 12,
      UNI: 6,
    };
    return mockPrices[tokenSymbol] || 0;
  } catch (error) {
    console.error('Error fetching token price:', error);
    return 0;
  }
};