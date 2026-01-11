import { Wallet, Plus, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockUser } from "@/data/mockData";

const WalletCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 glow-effect animate-pulse-glow">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-electric/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Wallet Balance</p>
              <p className="text-xs text-muted-foreground">{mockUser.name}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Fund
          </Button>
        </div>
        
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            ₦{mockUser.walletBalance.toLocaleString()}<span className="text-xl text-muted-foreground">.00</span>
          </h2>
        </div>
        
        <div className="flex gap-3">
          <Button variant="primary" className="flex-1 gap-2">
            <ArrowUpRight className="w-4 h-4" />
            Send
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <ArrowDownLeft className="w-4 h-4" />
            Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
