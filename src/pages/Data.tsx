import { useState } from "react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { airtimeProviders, dataPlans } from "@/data/mockData";
import { toast } from "sonner";

const Data = () => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const filteredPlans = dataPlans.filter(
    (plan) => plan.provider.toLowerCase() === selectedProvider
  );

  const currentPlan = dataPlans.find((p) => p.id === selectedPlan);

  const handlePurchase = () => {
    if (!selectedProvider || !phone || !selectedPlan) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success(`Successfully purchased ${currentPlan?.name}!`);
    setPhone("");
    setSelectedPlan(null);
    setSelectedProvider(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Page Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Buy Data</h1>
            <p className="text-muted-foreground">Affordable data bundles for all networks</p>
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
                    onClick={() => {
                      setSelectedProvider(provider.id);
                      setSelectedPlan(null);
                    }}
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

            {/* Data Plans */}
            {selectedProvider && (
              <div className="animate-fade-in">
                <label className="text-sm font-medium text-muted-foreground block mb-3">
                  Select Data Plan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {filteredPlans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                        selectedPlan === plan.id
                          ? "border-accent bg-accent/10"
                          : "border-border/50 hover:border-accent/50 bg-secondary/30"
                      }`}
                    >
                      <p className="font-semibold mb-1">{plan.name}</p>
                      <p className="text-accent font-bold">₦{plan.price.toLocaleString()}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            {currentPlan && (
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/30 animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium">{currentPlan.name}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Provider</span>
                  <span className="font-medium">{currentPlan.provider}</span>
                </div>
                <div className="border-t border-border/30 my-3" />
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-bold gradient-text">
                    ₦{currentPlan.price.toLocaleString()}
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
              disabled={!selectedProvider || !phone || !selectedPlan}
            >
              Buy Data
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Data;
