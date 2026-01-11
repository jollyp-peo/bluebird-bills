import { useState } from "react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { airtimeProviders } from "@/data/mockData";
import { toast } from "sonner";

const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

const Airtime = () => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handlePurchase = () => {
    if (!selectedProvider || !phone || !amount) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success(`Successfully purchased ₦${Number(amount).toLocaleString()} airtime!`);
    setPhone("");
    setAmount("");
    setSelectedProvider(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Page Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Buy Airtime</h1>
            <p className="text-muted-foreground">Instant airtime top-up for all networks</p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Network Selection */}
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-3">
                Select Network
              </label>
              <div className="grid grid-cols-4 gap-3">
                {airtimeProviders.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => setSelectedProvider(provider.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedProvider === provider.id
                        ? "border-accent bg-accent/10"
                        : "border-border/50 hover:border-accent/50 bg-secondary/30"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: provider.color }}
                    />
                    <span className="text-sm font-medium">{provider.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-3">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="08012345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-14 text-lg bg-secondary/30 border-border/50 focus:border-accent"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-3">
                Amount
              </label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-14 text-lg bg-secondary/30 border-border/50 focus:border-accent mb-4"
              />
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt.toString())}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      amount === amt.toString()
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    ₦{amt.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            {amount && (
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/30 animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-medium">₦{Number(amount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-medium text-success">-₦{Math.floor(Number(amount) * 0.02).toLocaleString()}</span>
                </div>
                <div className="border-t border-border/30 my-3" />
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-bold gradient-text">
                    ₦{Math.floor(Number(amount) * 0.98).toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              variant="glow"
              size="xl"
              className="w-full"
              onClick={handlePurchase}
              disabled={!selectedProvider || !phone || !amount}
            >
              Buy Airtime
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Airtime;
