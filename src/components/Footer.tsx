import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-legacy-dark border-t border-legacy-blue/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-legacy-gold mb-4">LegacyX</h3>
            <p className="text-legacy-gray mb-4">
              Secure your digital legacy with the world's most advanced crypto inheritance platform.
            </p>
            <button className="px-4 py-2 border-2 border-legacy-gold text-legacy-gold rounded-lg">
              Get Started
            </button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-legacy-gray hover:text-legacy-gold">Features</Link></li>
              <li><Link href="/security" className="text-legacy-gray hover:text-legacy-gold">Security</Link></li>
              <li><Link href="/pricing" className="text-legacy-gray hover:text-legacy-gold">Pricing</Link></li>
              <li><Link href="/api" className="text-legacy-gray hover:text-legacy-gold">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-legacy-gray hover:text-legacy-gold">Documentation</Link></li>
              <li><Link href="/blog" className="text-legacy-gray hover:text-legacy-gold">Blog</Link></li>
              <li><Link href="/support" className="text-legacy-gray hover:text-legacy-gold">Support</Link></li>
              <li><Link href="/status" className="text-legacy-gray hover:text-legacy-gold">Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-legacy-gray hover:text-legacy-gold">About Us</Link></li>
              <li><Link href="/careers" className="text-legacy-gray hover:text-legacy-gold">Careers</Link></li>
              <li><Link href="/press" className="text-legacy-gray hover:text-legacy-gold">Press</Link></li>
              <li><Link href="/contact" className="text-legacy-gray hover:text-legacy-gold">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-legacy-blue/30 mt-8 pt-8 text-center text-legacy-gray">
          <p>&copy; {new Date().getFullYear()} LegacyX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};