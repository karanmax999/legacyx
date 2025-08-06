'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import { WalletConnect } from './WalletConnect';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isConnected } = useAccount();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-legacy-dark/90 backdrop-blur-lg border-b border-legacy-blue/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-legacy-gold">
              Legacy<span className="text-white">X</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link href="/features" className="text-legacy-light hover:text-legacy-gold transition">
                Features
              </Link>
              <Link href="/security" className="text-legacy-light hover:text-legacy-gold transition">
                Security
              </Link>
              <Link href="/pricing" className="text-legacy-light hover:text-legacy-gold transition">
                Pricing
              </Link>
              <Link href="/about" className="text-legacy-light hover:text-legacy-gold transition">
                About
              </Link>
              {isConnected && (
                <Link href="/dashboard" className="text-legacy-light hover:text-legacy-gold transition">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <WalletConnect />
            
            <button
              className="md:hidden text-legacy-light"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/features" className="text-legacy-light hover:text-legacy-gold transition">
                Features
              </Link>
              <Link href="/security" className="text-legacy-light hover:text-legacy-gold transition">
                Security
              </Link>
              <Link href="/pricing" className="text-legacy-light hover:text-legacy-gold transition">
                Pricing
              </Link>
              <Link href="/about" className="text-legacy-light hover:text-legacy-gold transition">
                About
              </Link>
              {isConnected && (
                <Link href="/dashboard" className="text-legacy-light hover:text-legacy-gold transition">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};