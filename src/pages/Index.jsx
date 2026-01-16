import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { Phone, Wifi, Tv, ArrowRight, Shield, Zap, Clock } from "lucide-react";
import Header from "@/components/layout/Header.jsx";
import ServiceCard from "@/components/services/ServiceCard.jsx";

const services = [
  {
    title: "Buy Airtime",
    description: "Instant airtime top-up for all networks. MTN, Airtel, Glo, 9mobile at the best rates.",
    icon: Phone,
    path: "/airtime",
    gradient: "from-yellow-500/30 to-orange-500/30",
  },
  {
    title: "Data Bundles",
    description: "Get affordable data plans for all networks. Stay connected with our best deals.",
    icon: Wifi,
    path: "/data",
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "TV Subscriptions",
    description: "Pay for DSTV, GOtv, StarTimes and more. Never miss your favorite shows.",
    icon: Tv,
    path: "/tv",
    gradient: "from-purple-500/30 to-pink-500/30",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "All transactions are processed within seconds",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-level security for all your transactions",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Our services are available round the clock",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric/5 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: "3s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6 animate-[fade-in_0.5s_ease-out_forwards]">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Trusted by 50,000+ users</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: "0.1s" }}>
              Pay Bills <span className="gradient-text">Instantly</span>
              <br />
              From Anywhere
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: "0.2s" }}>
              The fastest and most reliable way to buy airtime, data bundles, and pay your TV subscriptions in Nigeria.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: "0.3s" }}>
              <Link to="/dashboard">
                <Button variant="glow" size="xl" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/airtime">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Buy Airtime Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Quick, secure, and affordable solutions for all your utility payments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="text-center animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(210_100%_50%/0.1)_0%,transparent_70%)]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join thousands of users who trust PayQuick for their daily utility payments.
              </p>
              <Link to="/dashboard">
                <Button variant="glow" size="xl">
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-electric flex items-center justify-center">
                <span className="text-sm font-bold text-accent-foreground">P</span>
              </div>
              <span className="font-semibold">PayQuick</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 PayQuick. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
