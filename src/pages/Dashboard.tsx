import Header from "@/components/layout/Header";
import WalletCard from "@/components/dashboard/WalletCard";
import QuickActions from "@/components/dashboard/QuickActions";
import TransactionList from "@/components/dashboard/TransactionList";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Manage your payments and transactions</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Wallet & Quick Actions */}
            <div className="lg:col-span-2 space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <WalletCard />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <TransactionList />
              </div>
            </div>
            
            {/* Right Column - Quick Actions */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <QuickActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
