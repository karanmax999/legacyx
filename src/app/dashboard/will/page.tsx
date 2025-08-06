'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';

export default function WillPage() {
  const { isConnected } = useAccount();
  const [activeStep, setActiveStep] = useState(0);
  const [willContent, setWillContent] = useState('');
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [beneficiaryDistribution, setBeneficiaryDistribution] = useState<Record<string, number>>({});

  const steps = [
    { title: 'Introduction', description: 'Learn about creating a digital will' },
    { title: 'Asset Selection', description: 'Choose which assets to include' },
    { title: 'Beneficiary Distribution', description: 'Specify how assets should be distributed' },
    { title: 'Special Instructions', description: 'Add any special conditions or messages' },
    { title: 'Review & Sign', description: 'Review and finalize your will' }
  ];

  const assets = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', value: 22500 },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', value: 4500 },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC', value: 5000 },
    { id: 'matic', name: 'Polygon', symbol: 'MATIC', value: 800 }
  ];

  const beneficiaries = [
    { id: 'john', name: 'John Doe' },
    { id: 'jane', name: 'Jane Smith' },
    { id: 'bob', name: 'Bob Johnson' }
  ];

  const toggleAssetSelection = (assetId: string) => {
    setSelectedAssets(prev => 
      prev.includes(assetId) 
        ? prev.filter(id => id !== assetId)
        : [...prev, assetId]
    );
  };

  const updateDistribution = (beneficiaryId: string, percentage: number) => {
    setBeneficiaryDistribution(prev => ({
      ...prev,
      [beneficiaryId]: percentage
    }));
  };

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
              Please connect your wallet to create your digital will.
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
        <h1 className="text-3xl font-bold mb-2">Create Your Digital Will</h1>
        <p className="text-legacy-gray">Follow the steps to create a legally binding digital will for your crypto assets</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                index <= activeStep ? 'bg-legacy-gold text-legacy-dark' : 'bg-legacy-blue/30 text-legacy-gray'
              }`}>
                {index + 1}
              </div>
              <span className={`text-xs text-center ${
                index <= activeStep ? 'text-legacy-gold' : 'text-legacy-gray'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full h-2 bg-legacy-blue/30 rounded-full">
          <div 
            className="h-full bg-legacy-gold rounded-full transition-all duration-300"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-legacy-blue/20 p-8 rounded-xl border border-legacy-blue/30 mb-8"
      >
        {activeStep === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to Will Creation</h2>
            <p className="text-legacy-gray mb-6">
              A digital will on LegacyX allows you to specify how your crypto assets should be distributed after your passing. 
              Your will is encrypted and stored securely on the blockchain, ensuring it can only be accessed when predetermined conditions are met.
            </p>
            <div className="bg-legacy-blue/10 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-3 text-legacy-gold">Key Benefits:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-legacy-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Legally binding in multiple jurisdictions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-legacy-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Supports multiple blockchain assets</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-legacy-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatic execution when conditions are met</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-legacy-gold mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Option to include personal messages for beneficiaries</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Select Assets</h2>
            <p className="text-legacy-gray mb-6">
              Choose which crypto assets you want to include in your will. You can select multiple assets.
            </p>
            <div className="space-y-3">
              {assets.map((asset) => (
                <div 
                  key={asset.id}
                  onClick={() => toggleAssetSelection(asset.id)}
                  className={`p-4 rounded-lg border cursor-pointer transition ${
                    selectedAssets.includes(asset.id)
                      ? 'border-legacy-gold bg-legacy-gold/10'
                      : 'border-legacy-blue/30 hover:border-legacy-blue/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        selectedAssets.includes(asset.id) ? 'bg-legacy-gold' : 'bg-legacy-blue/30'
                      }`}>
                        <span className={selectedAssets.includes(asset.id) ? 'text-legacy-dark' : 'text-legacy-light'}>
                          {asset.symbol.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{asset.name}</p>
                        <p className="text-sm text-legacy-gray">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${asset.value.toLocaleString()}</p>
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        selectedAssets.includes(asset.id) 
                          ? 'border-legacy-gold bg-legacy-gold' 
                          : 'border-legacy-blue/30'
                      }`}>
                        {selectedAssets.includes(asset.id) && (
                          <svg className="w-3 h-3 text-legacy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Beneficiary Distribution</h2>
            <p className="text-legacy-gray mb-6">
              Specify how your selected assets should be distributed among your beneficiaries.
            </p>
            <div className="space-y-4">
              {beneficiaries.map((beneficiary) => (
                <div key={beneficiary.id} className="p-4 rounded-lg border border-legacy-blue/30">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold">{beneficiary.name}</h3>
                    <div className="flex items-center">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={beneficiaryDistribution[beneficiary.id] || 0}
                        onChange={(e) => updateDistribution(beneficiary.id, parseInt(e.target.value) || 0)}
                        className="w-20 px-3 py-1 bg-legacy-dark border border-legacy-blue/30 rounded text-right"
                      />
                      <span className="ml-2">%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-legacy-blue/30 rounded-full">
                    <div 
                      className="h-full bg-legacy-gold rounded-full"
                      style={{ width: `${beneficiaryDistribution[beneficiary.id] || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-legacy-blue/10 rounded-lg">
              <p className="text-sm text-legacy-gray">
                Total distribution: {Object.values(beneficiaryDistribution).reduce((sum, val) => sum + val, 0)}%
                {Object.values(beneficiaryDistribution).reduce((sum, val) => sum + val, 0) !== 100 && (
                  <span className="text-yellow-400 ml-2">
                    (Must equal 100%)
                  </span>
                )}
              </p>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Special Instructions</h2>
            <p className="text-legacy-gray mb-6">
              Add any special conditions, messages, or instructions for your beneficiaries or executors.
            </p>
            <textarea
              value={willContent}
              onChange={(e) => setWillContent(e.target.value)}
              placeholder="Enter your special instructions here..."
              className="w-full h-48 px-4 py-3 bg-legacy-dark border border-legacy-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-legacy-gold resize-none"
            ></textarea>
            <div className="mt-4 bg-legacy-blue/10 p-4 rounded-lg">
              <h3 className="font-bold mb-2 text-legacy-gold">Tips for Special Instructions:</h3>
              <ul className="text-sm text-legacy-gray space-y-1">
                <li>• Include personal messages for your beneficiaries</li>
                <li>• Specify any conditions for asset release</li>
                <li>• Provide contact information for your legal representative</li>
                <li>• Include instructions for accessing encrypted files or passwords</li>
              </ul>
            </div>
          </div>
        )}

        {activeStep === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Review & Sign</h2>
            <p className="text-legacy-gray mb-6">
              Review your will details and sign it with your wallet to finalize it.
            </p>
            
            <div className="bg-legacy-blue/10 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-4 text-legacy-gold">Will Summary</h3>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Selected Assets:</h4>
                <div className="space-y-2">
                  {selectedAssets.map(assetId => {
                    const asset = assets.find(a => a.id === assetId);
                    return asset ? (
                      <div key={assetId} className="flex justify-between">
                        <span>{asset.name} ({asset.symbol})</span>
                        <span>${asset.value.toLocaleString()}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Beneficiary Distribution:</h4>
                <div className="space-y-2">
                  {Object.entries(beneficiaryDistribution).map(([id, percentage]) => {
                    const beneficiary = beneficiaries.find(b => b.id === id);
                    return beneficiary ? (
                      <div key={id} className="flex justify-between">
                        <span>{beneficiary.name}</span>
                        <span>{percentage}%</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
              
              {willContent && (
                <div>
                  <h4 className="font-medium mb-2">Special Instructions:</h4>
                  <p className="text-sm text-legacy-gray">{willContent}</p>
                </div>
              )}
            </div>
            
            <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2 text-yellow-400">Important:</h3>
              <p className="text-sm text-legacy-gray">
                Once signed, your will will be encrypted and stored on the blockchain. It can only be modified by creating a new version, which will require additional fees.
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className={`px-6 py-3 rounded-lg font-medium ${
              activeStep === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-legacy-blue text-white hover:bg-blue-700'
            }`}
          >
            Previous
          </button>
          
          {activeStep < steps.length - 1 ? (
            <button
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              className="px-6 py-3 bg-legacy-gold text-legacy-dark font-bold rounded-lg hover:bg-yellow-500 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => {
                // Handle will signing logic
                alert('Will signed and stored successfully!');
              }}
              className="px-6 py-3 bg-legacy-gold text-legacy-dark font-bold rounded-lg hover:bg-yellow-500 transition"
            >
              Sign Will
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}