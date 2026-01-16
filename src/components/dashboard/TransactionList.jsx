import { Phone, Wifi, Tv, CheckCircle, Clock, XCircle } from "lucide-react";
import { mockTransactions } from "@/data/mockData.js";

const getTypeIcon = (type) => {
  switch (type) {
    case "airtime":
      return Phone;
    case "data":
      return Wifi;
    case "tv":
      return Tv;
    default:
      return Phone;
  }
};

const getStatusConfig = (status) => {
  switch (status) {
    case "successful":
      return { icon: CheckCircle, color: "text-success", bg: "bg-success/10" };
    case "pending":
      return { icon: Clock, color: "text-warning", bg: "bg-warning/10" };
    case "failed":
      return { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10" };
    default:
      return { icon: CheckCircle, color: "text-success", bg: "bg-success/10" };
  }
};

const TransactionList = () => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <button className="text-sm text-accent hover:underline">View All</button>
        </div>
      </div>
      
      <div className="divide-y divide-border/30">
        {mockTransactions.map((tx, index) => {
          const TypeIcon = getTypeIcon(tx.type);
          const statusConfig = getStatusConfig(tx.status);
          const StatusIcon = statusConfig.icon;
          
          return (
            <div
              key={tx.id}
              className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <TypeIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">{tx.provider}</p>
                  <p className="text-sm text-muted-foreground">
                    {tx.phone || tx.type.toUpperCase()} • {tx.date}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-semibold">-₦{tx.amount.toLocaleString()}</p>
                  <div className={`flex items-center gap-1 text-xs ${statusConfig.color}`}>
                    <StatusIcon className="w-3 h-3" />
                    <span className="capitalize">{tx.status}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
