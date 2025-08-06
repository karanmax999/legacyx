'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const WalletConnect = () => {
  const { isConnected, address } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="flex items-center space-x-3">
        <span className="hidden sm:block text-sm text-legacy-light">
          {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
        </span>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2 bg-legacy-blue text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      disabled={isPending}
      className="px-4 py-2 bg-legacy-gold text-legacy-dark rounded-lg font-medium hover:bg-yellow-500 transition"
    >
      {isPending ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
};