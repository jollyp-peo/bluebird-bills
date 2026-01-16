export const mockUser = {
  name: "John Adebayo",
  email: "john@example.com",
  walletBalance: 45750.00,
};

export const mockTransactions = [
  {
    id: "TXN001",
    type: "airtime",
    provider: "MTN",
    amount: 2000,
    phone: "08012345678",
    status: "successful",
    date: "2026-01-11 14:30",
  },
  {
    id: "TXN002",
    type: "data",
    provider: "Airtel",
    amount: 5000,
    phone: "08087654321",
    status: "successful",
    date: "2026-01-11 12:15",
  },
  {
    id: "TXN003",
    type: "tv",
    provider: "DSTV",
    amount: 24500,
    status: "pending",
    date: "2026-01-10 18:45",
  },
  {
    id: "TXN004",
    type: "airtime",
    provider: "Glo",
    amount: 1000,
    phone: "08055512345",
    status: "successful",
    date: "2026-01-10 09:20",
  },
  {
    id: "TXN005",
    type: "data",
    provider: "9mobile",
    amount: 3500,
    phone: "08091234567",
    status: "failed",
    date: "2026-01-09 16:00",
  },
];

export const airtimeProviders = [
  { id: "mtn", name: "MTN", color: "#FFCC00" },
  { id: "airtel", name: "Airtel", color: "#FF0000" },
  { id: "glo", name: "Glo", color: "#00A652" },
  { id: "9mobile", name: "9mobile", color: "#006C3E" },
];

export const dataPlans = [
  { id: "1", provider: "MTN", name: "1GB - 30 Days", price: 1000 },
  { id: "2", provider: "MTN", name: "2GB - 30 Days", price: 2000 },
  { id: "3", provider: "MTN", name: "5GB - 30 Days", price: 4000 },
  { id: "4", provider: "MTN", name: "10GB - 30 Days", price: 6000 },
  { id: "5", provider: "Airtel", name: "1.5GB - 30 Days", price: 1200 },
  { id: "6", provider: "Airtel", name: "3GB - 30 Days", price: 2500 },
  { id: "7", provider: "Glo", name: "2GB - 30 Days", price: 1500 },
  { id: "8", provider: "9mobile", name: "1GB - 30 Days", price: 1000 },
];

export const tvProviders = [
  { id: "dstv", name: "DSTV", logo: "📺" },
  { id: "gotv", name: "GOtv", logo: "📡" },
  { id: "startimes", name: "StarTimes", logo: "⭐" },
];

export const tvPackages = [
  { id: "1", provider: "DSTV", name: "Premium", price: 24500 },
  { id: "2", provider: "DSTV", name: "Compact Plus", price: 16600 },
  { id: "3", provider: "DSTV", name: "Compact", price: 10500 },
  { id: "4", provider: "DSTV", name: "Confam", price: 6200 },
  { id: "5", provider: "GOtv", name: "Max", price: 4850 },
  { id: "6", provider: "GOtv", name: "Jolli", price: 3300 },
  { id: "7", provider: "StarTimes", name: "Classic", price: 2600 },
  { id: "8", provider: "StarTimes", name: "Basic", price: 1700 },
];
