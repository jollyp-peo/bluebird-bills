import { useState } from "react";
import Header from "@/components/layout/Header.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { tvProviders, tvPackages } from "@/data/mockData.js";
import { toast } from "sonner";

const TV = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [smartCardNumber, setSmartCardNumber] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filteredPackages = tvPackages.filter(
    (pkg) => pkg.provider.toLowerCase() === selectedProvider
  );

  const currentPackage = tvPackages.find((p) => p.id === selectedPackage);

  const handlePurchase = () => {
    if (!selectedProvider || !smartCardNumber || !selectedPackage) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success(`Successfully subscribed to ${currentPackage?.name}!`);
    setSmartCardNumber("");
    setSelectedPackage(null);
    setSelectedProvider(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Page Header */}
          <div className="mb-8 animate-[fade-in_0.5s_ease-out_forwards]">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">TV Subscriptions</h1>
            <p className="text-muted-foreground">Pay for DSTV, GOtv, StarTimes and more</p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 space-y-8 animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: "0.1s" }}>
            {/* Provider Selection */}
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-3">
                Select TV Provider
              </label>
              <div className="grid grid-cols-3 gap-3">
                {tvProviders.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => {
                      setSelectedProvider(provider.id);
                      setSelectedPackage(null);
                    }}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      selectedProvider === provider.id
                        ? "border-accent bg-accent/10"
                        : "border-border/50 hover:border-accent/50 bg-secondary/30"
                    }`}
                  >
                    <div className="text-3xl mb-2">{provider.logo}</div>
                    <span className="text-sm font-medium">{provider.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Smart Card Number */}
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-3">
                Smart Card / IUC Number
              </label>
              <Input
                type="text"
                placeholder="Enter your smart card number"
                value={smartCardNumber}
                onChange={(e) => setSmartCardNumber(e.target.value)}
                className="h-14 text-lg bg-secondary/30 border-border/50 focus:border-accent"
              />
            </div>

            {/* Packages */}
            {selectedProvider && (
              <div className="animate-[fade-in_0.5s_ease-out_forwards]">
                <label className="text-sm font-medium text-muted-foreground block mb-3">
                  Select Package
                </label>
                <div className="space-y-3">
                  {filteredPackages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all duration-300 ${
                        selectedPackage === pkg.id
                          ? "border-accent bg-accent/10"
                          : "border-border/50 hover:border-accent/50 bg-secondary/30"
                      }`}
                    >
                      <div className="text-left">
                        <p className="font-semibold">{pkg.name}</p>
                        <p className="text-sm text-muted-foreground">{pkg.provider}</p>
                      </div>
                      <p className="text-accent font-bold text-lg">₦{pkg.price.toLocaleString()}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            {currentPackage && (
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/30 animate-[fade-in_0.5s_ease-out_forwards]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Package</span>
                  <span className="font-medium">{currentPackage.name}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Provider</span>
                  <span className="font-medium">{currentPackage.provider}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">30 Days</span>
                </div>
                <div className="border-t border-border/30 my-3" />
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-bold gradient-text">
                    ₦{currentPackage.price.toLocaleString()}
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
              disabled={!selectedProvider || !smartCardNumber || !selectedPackage}
            >
              Pay Subscription
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TV;
