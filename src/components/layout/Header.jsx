import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { Menu, X, Wallet, Bell, User } from "lucide-react";
import { mockUser } from "@/data/mockData.js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/airtime", label: "Airtime" },
    { path: "/data", label: "Data" },
    { path: "/tv", label: "TV Subs" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-electric flex items-center justify-center">
              <span className="text-xl font-bold text-accent-foreground">P</span>
            </div>
            <span className="text-xl font-bold gradient-text">PayQuick</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-secondary text-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50">
              <Wallet className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">
                ₦{mockUser.walletBalance.toLocaleString()}
              </span>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/30 animate-[fade-in_0.5s_ease-out_forwards]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? "bg-secondary text-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-4 py-3 mt-2 rounded-lg bg-secondary/50">
                <Wallet className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">
                  ₦{mockUser.walletBalance.toLocaleString()}
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
