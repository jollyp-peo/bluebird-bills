import { Link } from "react-router-dom";
import { Phone, Wifi, Tv, Zap, CreditCard, Gift } from "lucide-react";

const actions = [
  { icon: Phone, label: "Airtime", path: "/airtime", color: "from-yellow-500/20 to-orange-500/20" },
  { icon: Wifi, label: "Data", path: "/data", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Tv, label: "TV Subs", path: "/tv", color: "from-purple-500/20 to-pink-500/20" },
  { icon: Zap, label: "Electricity", path: "#", color: "from-green-500/20 to-emerald-500/20" },
  { icon: CreditCard, label: "Bills", path: "#", color: "from-red-500/20 to-rose-500/20" },
  { icon: Gift, label: "Rewards", path: "#", color: "from-indigo-500/20 to-violet-500/20" },
];

const QuickActions = () => {
  return (
    <div className="glass-card p-6 rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action) => (
          <Link
            key={action.label}
            to={action.path}
            className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <action.icon className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
