import { useState } from 'react';
import { Wallet } from 'lucide-react';
import { connectToWallet } from '../utils/web3';

export default function Web3Connect() {
  const [account, setAccount] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      const address = await connectToWallet();
      setAccount(address);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert(error instanceof Error ? error.message : 'Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-10">
      {account ? (
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2">
          <p className="text-sm text-gray-600">Connected:</p>
          <p className="text-xs text-gray-800 font-mono">{`${account.slice(0, 6)}...${account.slice(-4)}`}</p>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={isConnecting}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 
                   text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-lg"
        >
          <Wallet size={20} />
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
}