export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-legacy-dark">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-legacy-blue/20 border-r border-legacy-blue/30 min-h-screen p-6">
          <h2 className="text-xl font-bold text-legacy-gold mb-8">Dashboard</h2>
          <nav className="space-y-4">
            <a href="/dashboard" className="block text-legacy-light hover:text-legacy-gold transition">
              Overview
            </a>
            <a href="/dashboard/vault" className="block text-legacy-light hover:text-legacy-gold transition">
              My Vault
            </a>
            <a href="/dashboard/will" className="block text-legacy-light hover:text-legacy-gold transition">
              My Will
            </a>
            <a href="/dashboard/beneficiaries" className="block text-legacy-light hover:text-legacy-gold transition">
              Beneficiaries
            </a>
            <a href="/dashboard/settings" className="block text-legacy-light hover:text-legacy-gold transition">
              Settings
            </a>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}