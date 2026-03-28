import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  // Add near other useState declarations
const [blinkitData, setBlinkitData] = useState<any>(null);
  async function fetchBlinkitPrice(product: string) {
  try {
    const response = await fetch(`http://localhost:5000/api/blinkit/${product}`);
    const data = await response.json();
    setBlinkitData(data); // update state
  } catch (err) {
    console.error("Error fetching Blinkit data:", err);
  }
}
fetch("http://localhost:5000/prices")
  .then(res => res.json())
  .then(data => console.log(data));
fetchBlinkitPrice(searchInputValue); // your search input
  AlertTriangle,
  ArrowRight,
  BarChart2,
  Bell,
  Bot,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Flame,
  MapPin,
  Menu,
  Package,
  RefreshCw,
  Search,
  Send,
  Shield,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingDown,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Page = "home" | "compare" | "deals" | "pricing" | "dashboard";

interface PlatformPrice {
  platform: string;
  color: string;
  price: number;
  deliveryFee: number;
  surgeFee: number;
  deliveryTime: number;
  available: boolean;
}

interface ChatMessage {
  role: "user" | "ai";
  text: string;
  time: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  { id: "milk", name: "Amul Toned Milk 1L", brand: "Amul", category: "Dairy" },
  {
    id: "maggi",
    name: "Maggi 2-Minute Noodles 420g",
    brand: "Nestle",
    category: "Instant Food",
  },
  { id: "butter", name: "Amul Butter 500g", brand: "Amul", category: "Dairy" },
  {
    id: "bread",
    name: "Britannia Brown Bread 400g",
    brand: "Britannia",
    category: "Bakery",
  },
  {
    id: "rice",
    name: "India Gate Basmati Rice 5kg",
    brand: "India Gate",
    category: "Grains",
  },
  {
    id: "eggs",
    name: "Farm Fresh Eggs 12pcs",
    brand: "Country Fresh",
    category: "Eggs",
  },
  {
    id: "cola",
    name: "Coca-Cola 2L",
    brand: "Coca-Cola",
    category: "Beverages",
  },
  {
    id: "biscuit",
    name: "Parle-G Biscuits 800g",
    brand: "Parle",
    category: "Snacks",
  },
];

const PLATFORM_DATA: Record<string, PlatformPrice[]> = {
  milk: [
    {
      platform: "Blinkit",
      color: "#FFD700",
      price: 68,
      deliveryFee: 15,
      surgeFee: 0,
      deliveryTime: 10,
      available: true,
    },
    {
      platform: "Zepto",
      color: "#7C3AED",
      price: 65,
      deliveryFee: 20,
      surgeFee: 5,
      deliveryTime: 8,
      available: true,
    },
    {
      platform: "Swiggy Instamart",
      color: "#FF6B00",
      price: 70,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 15,
      available: true,
    },
    {
      platform: "BigBasket",
      color: "#22C55E",
      price: 63,
      deliveryFee: 30,
      surgeFee: 0,
      deliveryTime: 120,
      available: true,
    },
    {
      platform: "Flipkart Minutes",
      color: "#2563EB",
      price: 67,
      deliveryFee: 18,
      surgeFee: 0,
      deliveryTime: 12,
      available: true,
    },
    {
      platform: "Amazon Now",
      color: "#FF9900",
      price: 72,
      deliveryFee: 25,
      surgeFee: 0,
      deliveryTime: 20,
      available: false,
    },
  ],
  maggi: [
    {
      platform: "Blinkit",
      color: "#FFD700",
      price: 72,
      deliveryFee: 15,
      surgeFee: 0,
      deliveryTime: 9,
      available: true,
    },
    {
      platform: "Zepto",
      color: "#7C3AED",
      price: 75,
      deliveryFee: 20,
      surgeFee: 0,
      deliveryTime: 7,
      available: true,
    },
    {
      platform: "Swiggy Instamart",
      color: "#FF6B00",
      price: 68,
      deliveryFee: 0,
      surgeFee: 5,
      deliveryTime: 14,
      available: true,
    },
    {
      platform: "BigBasket",
      color: "#22C55E",
      price: 65,
      deliveryFee: 30,
      surgeFee: 0,
      deliveryTime: 110,
      available: true,
    },
    {
      platform: "Flipkart Minutes",
      color: "#2563EB",
      price: 70,
      deliveryFee: 18,
      surgeFee: 0,
      deliveryTime: 11,
      available: true,
    },
    {
      platform: "Amazon Now",
      color: "#FF9900",
      price: 73,
      deliveryFee: 25,
      surgeFee: 0,
      deliveryTime: 22,
      available: true,
    },
  ],
  butter: [
    {
      platform: "Blinkit",
      color: "#FFD700",
      price: 268,
      deliveryFee: 15,
      surgeFee: 0,
      deliveryTime: 10,
      available: true,
    },
    {
      platform: "Zepto",
      color: "#7C3AED",
      price: 255,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 9,
      available: true,
    },
    {
      platform: "Swiggy Instamart",
      color: "#FF6B00",
      price: 272,
      deliveryFee: 0,
      surgeFee: 10,
      deliveryTime: 13,
      available: true,
    },
    {
      platform: "BigBasket",
      color: "#22C55E",
      price: 248,
      deliveryFee: 30,
      surgeFee: 0,
      deliveryTime: 120,
      available: true,
    },
    {
      platform: "Flipkart Minutes",
      color: "#2563EB",
      price: 260,
      deliveryFee: 18,
      surgeFee: 0,
      deliveryTime: 14,
      available: false,
    },
    {
      platform: "Amazon Now",
      color: "#FF9900",
      price: 278,
      deliveryFee: 25,
      surgeFee: 0,
      deliveryTime: 20,
      available: true,
    },
  ],
  bread: [
    {
      platform: "Blinkit",
      color: "#FFD700",
      price: 45,
      deliveryFee: 15,
      surgeFee: 0,
      deliveryTime: 10,
      available: true,
    },
    {
      platform: "Zepto",
      color: "#7C3AED",
      price: 42,
      deliveryFee: 20,
      surgeFee: 0,
      deliveryTime: 8,
      available: true,
    },
    {
      platform: "Swiggy Instamart",
      color: "#FF6B00",
      price: 48,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 15,
      available: true,
    },
    {
      platform: "BigBasket",
      color: "#22C55E",
      price: 40,
      deliveryFee: 30,
      surgeFee: 0,
      deliveryTime: 110,
      available: true,
    },
    {
      platform: "Flipkart Minutes",
      color: "#2563EB",
      price: 44,
      deliveryFee: 18,
      surgeFee: 0,
      deliveryTime: 13,
      available: true,
    },
    {
      platform: "Amazon Now",
      color: "#FF9900",
      price: 50,
      deliveryFee: 25,
      surgeFee: 5,
      deliveryTime: 18,
      available: true,
    },
  ],
  rice: [
    {
      platform: "Blinkit",
      color: "#FFD700",
      price: 365,
      deliveryFee: 15,
      surgeFee: 0,
      deliveryTime: 12,
      available: true,
    },
    {
      platform: "Zepto",
      color: "#7C3AED",
      price: 378,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 10,
      available: true,
    },
    {
      platform: "Swiggy Instamart",
      color: "#FF6B00",
      price: 370,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 18,
      available: false,
    },
    {
      platform: "BigBasket",
      color: "#22C55E",
      price: 348,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 120,
      available: true,
    },
    {
      platform: "Flipkart Minutes",
      color: "#2563EB",
      price: 355,
      deliveryFee: 18,
      surgeFee: 0,
      deliveryTime: 15,
      available: true,
    },
    {
      platform: "Amazon Now",
      color: "#FF9900",
      price: 360,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 25,
      available: true,
    },
  ],
  eggs: [
    {
      platform: "Blinkit",
      color: "#FFD700",
      price: 88,
      deliveryFee: 15,
      surgeFee: 0,
      deliveryTime: 11,
      available: true,
    },
    {
      platform: "Zepto",
      color: "#7C3AED",
      price: 85,
      deliveryFee: 20,
      surgeFee: 0,
      deliveryTime: 8,
      available: true,
    },
    {
      platform: "Swiggy Instamart",
      color: "#FF6B00",
      price: 90,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 16,
      available: true,
    },
    {
      platform: "BigBasket",
      color: "#22C55E",
      price: 80,
      deliveryFee: 30,
      surgeFee: 0,
      deliveryTime: 120,
      available: true,
    },
    {
      platform: "Flipkart Minutes",
      color: "#2563EB",
      price: 86,
      deliveryFee: 18,
      surgeFee: 5,
      deliveryTime: 13,
      available: true,
    },
    {
      platform: "Amazon Now",
      color: "#FF9900",
      price: 92,
      deliveryFee: 25,
      surgeFee: 0,
      deliveryTime: 22,
      available: false,
    },
  ],
  cola: [
    {
      platform: "Blinkit",
      color: "#FFD700",
      price: 95,
      deliveryFee: 15,
      surgeFee: 0,
      deliveryTime: 10,
      available: true,
    },
    {
      platform: "Zepto",
      color: "#7C3AED",
      price: 90,
      deliveryFee: 20,
      surgeFee: 0,
      deliveryTime: 9,
      available: true,
    },
    {
      platform: "Swiggy Instamart",
      color: "#FF6B00",
      price: 98,
      deliveryFee: 0,
      surgeFee: 5,
      deliveryTime: 14,
      available: true,
    },
    {
      platform: "BigBasket",
      color: "#22C55E",
      price: 85,
      deliveryFee: 30,
      surgeFee: 0,
      deliveryTime: 120,
      available: true,
    },
    {
      platform: "Flipkart Minutes",
      color: "#2563EB",
      price: 92,
      deliveryFee: 18,
      surgeFee: 0,
      deliveryTime: 12,
      available: false,
    },
    {
      platform: "Amazon Now",
      color: "#FF9900",
      price: 100,
      deliveryFee: 25,
      surgeFee: 0,
      deliveryTime: 20,
      available: true,
    },
  ],
  biscuit: [
    {
      platform: "Blinkit",
      color: "#FFD700",
      price: 58,
      deliveryFee: 15,
      surgeFee: 0,
      deliveryTime: 10,
      available: true,
    },
    {
      platform: "Zepto",
      color: "#7C3AED",
      price: 55,
      deliveryFee: 20,
      surgeFee: 0,
      deliveryTime: 8,
      available: true,
    },
    {
      platform: "Swiggy Instamart",
      color: "#FF6B00",
      price: 60,
      deliveryFee: 0,
      surgeFee: 0,
      deliveryTime: 15,
      available: true,
    },
    {
      platform: "BigBasket",
      color: "#22C55E",
      price: 52,
      deliveryFee: 30,
      surgeFee: 0,
      deliveryTime: 115,
      available: true,
    },
    {
      platform: "Flipkart Minutes",
      color: "#2563EB",
      price: 57,
      deliveryFee: 18,
      surgeFee: 5,
      deliveryTime: 12,
      available: true,
    },
    {
      platform: "Amazon Now",
      color: "#FF9900",
      price: 62,
      deliveryFee: 25,
      surgeFee: 0,
      deliveryTime: 21,
      available: true,
    },
  ],
};

const PLATFORM_BADGES = [
  { name: "Blinkit", color: "#FFD700", bg: "rgba(255,215,0,0.1)", emoji: "🟡" },
  { name: "Zepto", color: "#7C3AED", bg: "rgba(124,58,237,0.1)", emoji: "🟣" },
  {
    name: "Swiggy Instamart",
    color: "#FF6B00",
    bg: "rgba(255,107,0,0.1)",
    emoji: "🟠",
  },
  {
    name: "BigBasket",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    emoji: "🟢",
  },
  {
    name: "Flipkart Minutes",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.1)",
    emoji: "🔵",
  },
  {
    name: "Amazon Now",
    color: "#FF9900",
    bg: "rgba(255,153,0,0.1)",
    emoji: "🟤",
  },
];

const FLASH_DEALS = [
  {
    product: "Lay's Classic Chips 52g",
    platform: "Zepto",
    platformColor: "#7C3AED",
    originalPrice: 20,
    dealPrice: 12,
    discount: 40,
    deliveryTime: 8,
    emoji: "🍟",
    endsIn: true,
    grabbed: "1,247",
  },
  {
    product: "Aashirvaad Atta 5kg",
    platform: "Blinkit",
    platformColor: "#FFD700",
    originalPrice: 280,
    dealPrice: 199,
    discount: 29,
    deliveryTime: 10,
    emoji: "🌾",
    endsIn: true,
    grabbed: "856",
  },
  {
    product: "Tropicana Orange 1L",
    platform: "BigBasket",
    platformColor: "#22C55E",
    originalPrice: 130,
    dealPrice: 89,
    discount: 32,
    deliveryTime: 120,
    emoji: "🍊",
    endsIn: false,
    grabbed: "2,103",
  },
  {
    product: "Dove Shampoo 340ml",
    platform: "Swiggy Instamart",
    platformColor: "#FF6B00",
    originalPrice: 295,
    dealPrice: 199,
    discount: 33,
    deliveryTime: 15,
    emoji: "🧴",
    endsIn: false,
    grabbed: "678",
  },
  {
    product: "Britannia Good Day 200g",
    platform: "Flipkart Minutes",
    platformColor: "#2563EB",
    originalPrice: 45,
    dealPrice: 29,
    discount: 36,
    deliveryTime: 12,
    emoji: "🍪",
    endsIn: false,
    grabbed: "1,590",
  },
  {
    product: "Red Bull 250ml x4",
    platform: "Amazon Now",
    platformColor: "#FF9900",
    originalPrice: 480,
    dealPrice: 349,
    discount: 27,
    deliveryTime: 22,
    emoji: "🥤",
    endsIn: false,
    grabbed: "423",
  },
];

const TREND_DATA = [
  { day: "Mon", Blinkit: 70, Zepto: 68, Swiggy: 72 },
  { day: "Tue", Blinkit: 68, Zepto: 65, Swiggy: 70 },
  { day: "Wed", Blinkit: 72, Zepto: 70, Swiggy: 74 },
  { day: "Thu", Blinkit: 69, Zepto: 64, Swiggy: 71 },
  { day: "Fri", Blinkit: 75, Zepto: 72, Swiggy: 76 },
  { day: "Sat", Blinkit: 68, Zepto: 65, Swiggy: 70 },
  { day: "Sun", Blinkit: 68, Zepto: 65, Swiggy: 70 },
];

const SAVINGS_DATA = [
  { month: "Oct", saved: 320 },
  { month: "Nov", saved: 580 },
  { month: "Dec", saved: 890 },
  { month: "Jan", saved: 1247 },
];

const AI_RESPONSES = [
  "Based on current prices in your area, **Zepto** offers the best deals today. Milk is ₹65, Bread is ₹42. Total cart estimate: ₹380. You'd save ₹67 vs Swiggy Instamart. 🛒",
  "Smart recommendation: Split your cart! Buy dairy items from **Zepto** and dry goods from **Blinkit**. This saves you ₹43 in total compared to ordering from one platform. 💡",
  "Price alert: **Amul Butter** is at its lowest price this week on Zepto at ₹255. Stock up now — prices typically rise on weekends by 8-12%. ⚡",
  "Your area (110001) has excellent quick commerce coverage. All 6 platforms deliver here. For fresh produce, **BigBasket** has the best prices but slowest delivery (2 hrs). For urgent needs, **Zepto** delivers in 8 mins. 📍",
  "Hidden fees alert: Swiggy Instamart shows ₹70 for milk but adds a ₹10 handling charge at checkout. True cost is ₹80. **Blinkit at ₹83** is actually cheaper! 🔍",
];

function getNow() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── COUNTDOWN TIMER HOOK ─────────────────────────────────────────────────────

function useCountdown(initial: number) {
  const [seconds, setSeconds] = useState(initial);
  useEffect(() => {
    const id = setInterval(
      () => setSeconds((s) => (s > 0 ? s - 1 : initial)),
      1000,
    );
    return () => clearInterval(id);
  }, [initial]);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ─── LIVE USER COUNT HOOK ────────────────────────────────────────────────────

function useLiveCount(base: number) {
  const [count, setCount] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) - 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return count;
}

// ─── PLATFORM BADGE ───────────────────────────────────────────────────────────

function PlatformBadge({
  platform,
  color,
  bg,
}: { platform: string; color: string; bg: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
      style={{ color, backgroundColor: bg, border: `1px solid ${color}30` }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {platform}
    </span>
  );
}

// ─── COMPARISON TABLE COMPONENT ──────────────────────────────────────────────

function ComparisonTable({ productId }: { productId: string }) {
  const data = PLATFORM_DATA[productId] ?? PLATFORM_DATA.milk;
  const available = data.filter((d) => d.available);
  const withTotal = data.map((d) => ({
    ...d,
    total: d.price + d.deliveryFee + d.surgeFee,
  }));
  const cheapest = available.reduce((a, b) =>
    a.price + a.deliveryFee + a.surgeFee < b.price + b.deliveryFee + b.surgeFee
      ? a
      : b,
  );
  const fastest = available.reduce((a, b) =>
    a.deliveryTime < b.deliveryTime ? a : b,
  );

  return (
    <div className="overflow-x-auto rounded-2xl" data-ocid="comparison.table">
      <table className="w-full min-w-[720px]">
        <thead>
          <tr className="border-b border-white/5">
            {[
              "Platform",
              "Price",
              "Delivery Time",
              "Delivery Fee",
              "Surge Fee",
              "Total Cost",
              "Status",
              "Action",
            ].map((h) => (
              <th
                key={h}
                className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white/40"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {withTotal.map((row, i) => {
            const isBest = row.available && row.platform === cheapest.platform;
            const isFastest =
              row.available && row.platform === fastest.platform;
            return (
              <tr
                key={row.platform}
                data-ocid={`comparison.row.${i + 1}`}
                className={`transition-all duration-300 ${
                  isBest
                    ? "best-deal-row"
                    : "border-b border-white/[0.04] hover:bg-white/[0.02]"
                } ${!row.available ? "opacity-50" : ""}`}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: row.color }}
                    />
                    <span className="font-medium text-sm text-white/90">
                      {row.platform}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="font-mono font-bold text-white">
                    ₹{row.price}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-white/70">
                    {row.deliveryTime >= 60
                      ? `${Math.round(row.deliveryTime / 60)}h`
                      : `${row.deliveryTime} mins`}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-mono ${row.deliveryFee === 0 ? "text-emerald-400" : "text-white/70"}`}
                  >
                    {row.deliveryFee === 0 ? "FREE" : `₹${row.deliveryFee}`}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-sm font-mono ${row.surgeFee > 0 ? "text-orange-400" : "text-white/40"}`}
                  >
                    {row.surgeFee > 0 ? `+₹${row.surgeFee}` : "—"}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`font-mono font-bold text-base ${isBest ? "text-emerald-400" : "text-white"}`}
                  >
                    ₹{row.total}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-1">
                    {!row.available && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10">
                        OUT OF STOCK
                      </span>
                    )}
                    {isBest && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        BEST DEAL
                      </span>
                    )}
                    {isFastest && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        FASTEST
                      </span>
                    )}
                    {row.available && !isBest && !isFastest && (
                      <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4">
                  {row.available ? (
                    <button
                      type="button"
                      data-ocid={`comparison.buy.${i + 1}`}
                      className="text-xs px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${row.color}33, ${row.color}22)`,
                        border: `1px solid ${row.color}44`,
                        color: row.color,
                      }}
                    >
                      Buy →
                    </button>
                  ) : (
                    <span className="text-xs text-white/20">Unavailable</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-between px-4 py-2 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-white/40">Updated 3 mins ago</span>
        </div>
        <span className="text-xs text-white/30">
          📍 Prices for pincode: 110001
        </span>
      </div>
    </div>
  );
}

// ─── AI RECOMMENDATION BOX ───────────────────────────────────────────────────

function AIRecommendationBox({ productId }: { productId: string }) {
  const data = PLATFORM_DATA[productId] ?? PLATFORM_DATA.milk;
  const available = data.filter((d) => d.available);
  const withTotal = available.map((d) => ({
    ...d,
    total: d.price + d.deliveryFee + d.surgeFee,
  }));
  const cheapest = withTotal.reduce((a, b) => (a.total < b.total ? a : b));
  const fastest = available.reduce((a, b) =>
    a.deliveryTime < b.deliveryTime ? a : b,
  );
  const bestValue = withTotal.reduce((a, b) => (a.total < b.total ? a : b));
  const mostExpensive = withTotal.reduce((a, b) => (a.total > b.total ? a : b));
  const savings = mostExpensive.total - cheapest.total;
  const avgTotal = Math.round(
    withTotal.reduce((s, d) => s + d.total, 0) / withTotal.length,
  );

  return (
    <div className="glass-card p-6" data-ocid="ai.recommendation.card">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-display font-bold text-white">
            AI Recommendation
          </h3>
          <p className="text-xs text-white/40">
            Powered by GroFast Intelligence Engine
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div
          className="rounded-xl p-3"
          style={{
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          <div className="text-xs text-emerald-400 font-semibold mb-1">
            💚 CHEAPEST
          </div>
          <div className="font-bold text-white">{cheapest.platform}</div>
          <div className="text-xs text-white/50 mt-0.5">
            Save ₹{savings} vs most expensive
          </div>
        </div>
        <div
          className="rounded-xl p-3"
          style={{
            background: "rgba(34,211,238,0.08)",
            border: "1px solid rgba(34,211,238,0.2)",
          }}
        >
          <div className="text-xs text-cyan-400 font-semibold mb-1">
            ⚡ FASTEST
          </div>
          <div className="font-bold text-white">{fastest.platform}</div>
          <div className="text-xs text-white/50 mt-0.5">
            Arrives in {fastest.deliveryTime} mins
          </div>
        </div>
        <div
          className="rounded-xl p-3"
          style={{
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          <div className="text-xs text-purple-400 font-semibold mb-1">
            🏆 BEST VALUE
          </div>
          <div className="font-bold text-white">{bestValue.platform}</div>
          <div className="text-xs text-white/50 mt-0.5">
            ₹{bestValue.total} total cost incl. fees
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div
          className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl"
          style={{
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.15)",
          }}
        >
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-sm text-white/80">
            You save{" "}
            <span className="text-emerald-400 font-bold">
              ₹{avgTotal - cheapest.total}
            </span>{" "}
            compared to average
          </span>
        </div>
        <div
          className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl"
          style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.15)",
          }}
        >
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
          <span className="text-sm text-white/70">
            ⚠️ Price may increase soon —{" "}
            <span className="text-white/90 font-semibold">847 users</span>{" "}
            viewing this
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── HIDDEN FEE DETECTOR ─────────────────────────────────────────────────────

function HiddenFeeDetector({ productId }: { productId: string }) {
  const data = PLATFORM_DATA[productId] ?? PLATFORM_DATA.milk;
  const withHiddenFees = data
    .filter((d) => d.surgeFee > 0 || d.deliveryFee > 0)
    .slice(0, 2);

  return (
    <div className="glass-card p-6" data-ocid="hidden.fees.card">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(251,146,60,0.15)",
            border: "1px solid rgba(251,146,60,0.3)",
          }}
        >
          <Shield className="w-5 h-5 text-orange-400" />
        </div>
        <div>
          <h3 className="font-display font-bold text-white">
            Hidden Fee Detector
          </h3>
          <p className="text-xs text-white/40">True cost transparency</p>
        </div>
      </div>

      <div className="space-y-3">
        {withHiddenFees.map((d) => (
          <div
            key={d.platform}
            className="rounded-xl p-4"
            style={{
              background: "rgba(251,146,60,0.05)",
              border: "1px solid rgba(251,146,60,0.15)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                <span className="font-semibold text-white text-sm">
                  {d.platform}
                </span>
              </div>
              <span className="text-orange-400 text-xs font-bold">
                +₹{d.deliveryFee + d.surgeFee} hidden charges
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-white/50">
                <span>Base price</span>
                <span className="font-mono">₹{d.price}</span>
              </div>
              {d.deliveryFee > 0 && (
                <div className="flex justify-between text-xs">
                  <span className="text-orange-400/80">+ Delivery fee</span>
                  <span className="font-mono text-orange-400">
                    ₹{d.deliveryFee}
                  </span>
                </div>
              )}
              {d.surgeFee > 0 && (
                <div className="flex justify-between text-xs">
                  <span className="text-red-400/80">+ Surge pricing 🔥</span>
                  <span className="font-mono text-red-400">₹{d.surgeFee}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold border-t border-white/10 pt-1.5 mt-1.5">
                <span className="text-white">True Total</span>
                <span className="font-mono text-orange-300">
                  ₹{d.price + d.deliveryFee + d.surgeFee}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SMART CART SPLIT ─────────────────────────────────────────────────────────

function SmartCartSplit() {
  return (
    <div className="glass-card p-6" data-ocid="cart.split.card">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          <ShoppingCart className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="font-display font-bold text-white">
            Smart Cart Split
          </h3>
          <p className="text-xs text-white/40">
            AI-optimized multi-platform ordering
          </p>
        </div>
        <div className="ml-auto">
          <span
            className="text-xs px-3 py-1 rounded-full font-bold"
            style={{
              background: "rgba(16,185,129,0.15)",
              color: "#10B981",
              border: "1px solid rgba(16,185,129,0.3)",
            }}
          >
            Save ₹47
          </span>
        </div>
      </div>

      <div
        className="mb-4 p-3 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="text-xs text-white/40 mb-2">YOUR CART</div>
        <div className="flex flex-wrap gap-2">
          {["Milk 1L", "Butter 500g", "Maggi 420g", "Bread 400g"].map(
            (item) => (
              <span
                key={item}
                className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-white/70 border border-white/10"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="space-y-2 mb-5">
        <div className="text-xs text-white/40 uppercase tracking-wider mb-2">
          Optimized Split
        </div>
        {[
          {
            items: "Milk & Butter",
            platform: "Zepto",
            color: "#7C3AED",
            saving: "₹18",
            reason: "Lowest combined price",
          },
          {
            items: "Maggi",
            platform: "Blinkit",
            color: "#FFD700",
            saving: "₹12",
            reason: "Cheapest + free delivery",
          },
          {
            items: "Bread",
            platform: "Swiggy Instamart",
            color: "#FF6B00",
            saving: "₹17",
            reason: "No delivery fee",
          },
        ].map((row) => (
          <div
            key={row.items}
            className="flex items-center justify-between p-3 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${row.color}20`,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: row.color }}
              />
              <div>
                <div className="text-sm font-semibold text-white">
                  {row.items}
                </div>
                <div className="text-xs text-white/40">{row.reason}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-semibold"
                style={{ color: row.color }}
              >
                {row.platform}
              </span>
              <span className="text-xs text-emerald-400 font-bold">
                {row.saving} saved
              </span>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-between p-4 rounded-xl"
        style={{
          background: "rgba(16,185,129,0.08)",
          border: "1px solid rgba(16,185,129,0.2)",
        }}
      >
        <div>
          <div className="text-xs text-emerald-400">
            vs buying all from one platform
          </div>
          <div className="font-bold text-white">
            Total Savings with Smart Split
          </div>
        </div>
        <div className="text-2xl font-display font-bold text-emerald-400">
          ₹47
        </div>
      </div>
    </div>
  );
}

// ─── PRICE TREND GRAPH ────────────────────────────────────────────────────────

function PriceTrendGraph({ productName }: { productName: string }) {
  return (
    <div className="glass-card p-6" data-ocid="price.trend.card">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display font-bold text-white">
            Price Trend — 7 Days
          </h3>
          <p className="text-xs text-white/40">{productName}</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-yellow-400" />
            <span className="text-white/50">Blinkit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-purple-500" />
            <span className="text-white/50">Zepto</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-orange-500" />
            <span className="text-white/50">Swiggy</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={TREND_DATA}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.05)"
          />
          <XAxis
            dataKey="day"
            tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `₹${v}`}
          />
          <Tooltip
            contentStyle={{
              background: "rgba(5,5,16,0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
            }}
            labelStyle={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}
            itemStyle={{ fontSize: "12px" }}
            formatter={(value: number) => [`₹${value}`, ""]}
          />
          <Line
            type="monotone"
            dataKey="Blinkit"
            stroke="#FFD700"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Zepto"
            stroke="#7C3AED"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Swiggy"
            stroke="#FF6B00"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── FLASH DEALS ─────────────────────────────────────────────────────────────

function FlashDeals() {
  const countdown1 = useCountdown(2 * 3600 + 34 * 60 + 15);
  const countdown2 = useCountdown(5 * 3600 + 12 * 60 + 40);
  const countdowns = [countdown1, countdown2];
  let cdIdx = 0;

  return (
    <section className="py-20 px-4" data-ocid="deals.section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <Flame className="w-4 h-4 text-red-400" />
            <span className="text-sm font-semibold text-red-400">
              Flash Deals
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Best Deals <span className="gradient-text">Right Now</span>
          </h2>
          <p className="text-white/50">
            Limited time offers across all platforms — updated in real-time
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FLASH_DEALS.map((deal, i) => {
            const hasTimer = deal.endsIn;
            const timerVal = hasTimer ? countdowns[cdIdx++] : null;
            return (
              <div
                key={deal.product}
                data-ocid={`deals.item.${i + 1}`}
                className="glass-card p-5 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {deal.emoji}
                  </div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(239,68,68,0.15)",
                      color: "#F87171",
                      border: "1px solid rgba(239,68,68,0.25)",
                    }}
                  >
                    {deal.discount}% OFF
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm leading-snug mb-1">
                    {deal.product}
                  </h4>
                  <PlatformBadge
                    platform={deal.platform}
                    color={deal.platformColor}
                    bg={`${deal.platformColor}18`}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-display font-bold text-white">
                    ₹{deal.dealPrice}
                  </span>
                  <span className="text-sm text-white/30 line-through">
                    ₹{deal.originalPrice}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <Clock className="w-3.5 h-3.5" />
                    {deal.deliveryTime >= 60
                      ? `${Math.round(deal.deliveryTime / 60)}h delivery`
                      : `${deal.deliveryTime} min delivery`}
                  </div>
                  <span className="text-xs text-white/40">
                    🔥 {deal.grabbed} grabbed
                  </span>
                </div>
                {hasTimer && timerVal && (
                  <div
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "#F87171" }}
                  >
                    <Clock className="w-3 h-3" />
                    <span>
                      Ends in{" "}
                      <span className="font-mono font-bold">{timerVal}</span>
                    </span>
                  </div>
                )}
                <button
                  type="button"
                  data-ocid={`deals.grab.${i + 1}`}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${deal.platformColor}33, ${deal.platformColor}22)`,
                    border: `1px solid ${deal.platformColor}44`,
                    color: deal.platformColor,
                  }}
                >
                  Grab Deal →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING SECTION ─────────────────────────────────────────────────────────

function PricingSection() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Get started with basics",
      badge: null,
      highlight: false,
      features: [
        "5 searches/day",
        "Basic comparison table",
        "Price history (7 days)",
        "Web only",
        "No cart split",
      ],
      notIncluded: [
        "Unlimited comparisons",
        "Price alerts",
        "Smart cart split",
        "AI chatbot",
        "API access",
      ],
      cta: "Get Started Free",
      ctaStyle: "outline",
    },
    {
      name: "Smart Saver",
      price: { monthly: 99, yearly: 79 },
      description: "Save ₹500–₹2000/month on groceries",
      badge: "MOST POPULAR",
      highlight: true,
      features: [
        "Unlimited comparisons",
        "Price alerts (10)",
        "Hidden fee detector",
        "7-day price history",
        "Mobile + Web",
        "Faster data refresh",
      ],
      notIncluded: ["Smart cart split", "AI chatbot", "API access"],
      cta: "Start Saving →",
      ctaStyle: "gradient",
    },
    {
      name: "Pro Max",
      price: { monthly: 499, yearly: 399 },
      description: "Everything you need, nothing you don't",
      badge: "BEST VALUE",
      highlight: false,
      gold: true,
      features: [
        "Everything in Smart Saver",
        "Smart cart split",
        "AI chatbot assistant",
        "Unlimited price alerts",
        "Priority real-time refresh",
        "API access",
        "Advanced analytics",
        "CSV export",
      ],
      notIncluded: [],
      cta: "Go Pro Max →",
      ctaStyle: "gold",
    },
  ];

  return (
    <section className="py-20 px-4" id="pricing" data-ocid="pricing.section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-white/50 mb-8">
            Stop overpaying. Start saving from day one.
          </p>
          <div
            className="inline-flex items-center gap-3 p-1 rounded-full"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <button
              type="button"
              data-ocid="pricing.monthly.toggle"
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${!yearly ? "bg-white/10 text-white" : "text-white/40"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              data-ocid="pricing.yearly.toggle"
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${yearly ? "bg-white/10 text-white" : "text-white/40"}`}
            >
              Yearly
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "rgba(16,185,129,0.2)", color: "#10B981" }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              data-ocid={`pricing.plan.${i + 1}`}
              className={`relative rounded-3xl p-7 flex flex-col transition-all duration-300 ${
                plan.highlight ? "glow-purple" : "hover:border-white/15"
              }`}
              style={{
                background: plan.highlight
                  ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(37,99,235,0.1))"
                  : plan.gold
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.03)",
                border: plan.highlight
                  ? "1px solid rgba(124,58,237,0.4)"
                  : plan.gold
                    ? "1px solid rgba(255,180,0,0.3)"
                    : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                    style={{
                      background: plan.highlight
                        ? "linear-gradient(135deg,#7C3AED,#2563EB)"
                        : "linear-gradient(135deg,#B45309,#D97706)",
                      color: "white",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-white/40">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="font-display text-5xl font-bold text-white">
                    ₹{yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-white/40 mb-2">/mo</span>
                </div>
                {yearly && plan.price.yearly > 0 && (
                  <span className="text-xs text-emerald-400">
                    Billed ₹{plan.price.yearly * 12}/year
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-white/70"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-white/25"
                  >
                    <X className="w-4 h-4 text-white/15 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                data-ocid={`pricing.cta.${i + 1}`}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] ${
                  plan.ctaStyle === "gradient"
                    ? "btn-gradient text-white"
                    : plan.ctaStyle === "gold"
                      ? ""
                      : "text-white/70 hover:text-white"
                }`}
                style={{
                  ...(plan.ctaStyle === "outline"
                    ? {
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "transparent",
                      }
                    : {}),
                  ...(plan.ctaStyle === "gold"
                    ? {
                        background: "linear-gradient(135deg,#B45309,#D97706)",
                        color: "white",
                        boxShadow: "0 0 20px rgba(212,135,6,0.3)",
                      }
                    : {}),
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          No credit card required · Cancel anytime · Prices in INR
        </p>
      </div>
    </section>
  );
}

// ─── DASHBOARD SECTION ────────────────────────────────────────────────────────

function DashboardSection() {
  return (
    <section className="py-10 px-4" data-ocid="dashboard.section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold text-white mb-1">
            Your Dashboard
          </h2>
          <p className="text-white/40">
            Track your savings and manage price alerts
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Saved",
              value: "₹1,247",
              icon: TrendingDown,
              color: "text-emerald-400",
              bg: "rgba(16,185,129,0.1)",
            },
            {
              label: "Comparisons",
              value: "89",
              icon: BarChart2,
              color: "text-cyan-400",
              bg: "rgba(34,211,238,0.1)",
            },
            {
              label: "Active Alerts",
              value: "3",
              icon: Bell,
              color: "text-purple-400",
              bg: "rgba(124,58,237,0.1)",
            },
            {
              label: "Products Saved",
              value: "12",
              icon: Package,
              color: "text-yellow-400",
              bg: "rgba(234,179,8,0.1)",
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              data-ocid={`dashboard.stat.${i + 1}`}
              className="glass-card p-5 flex items-center gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: stat.bg }}
              >
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className={`text-xl font-display font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Saved Products */}
          <div className="glass-card p-6" data-ocid="dashboard.saved.card">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <Package className="w-4 h-4 text-yellow-400" /> Saved Products
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "Amul Toned Milk 1L",
                  best: "Zepto",
                  bestPrice: 65,
                  change: -3,
                  color: "#7C3AED",
                },
                {
                  name: "Britannia Brown Bread 400g",
                  best: "BigBasket",
                  bestPrice: 70,
                  change: 2,
                  color: "#22C55E",
                },
                {
                  name: "Farm Fresh Eggs 12pcs",
                  best: "Zepto",
                  bestPrice: 105,
                  change: -5,
                  color: "#7C3AED",
                },
                {
                  name: "Parle-G Biscuits 800g",
                  best: "Blinkit",
                  bestPrice: 73,
                  change: 0,
                  color: "#FFD700",
                },
              ].map((p, i) => (
                <div
                  key={p.name}
                  data-ocid={`dashboard.product.${i + 1}`}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                >
                  <div>
                    <div className="text-sm font-medium text-white">
                      {p.name}
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">
                      Best: <span style={{ color: p.color }}>{p.best}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-white">
                      ₹{p.bestPrice}
                    </div>
                    <div
                      className={`text-xs font-semibold ${p.change < 0 ? "text-emerald-400" : p.change > 0 ? "text-red-400" : "text-white/30"}`}
                    >
                      {p.change < 0
                        ? `↓ ₹${Math.abs(p.change)}`
                        : p.change > 0
                          ? `↑ ₹${p.change}`
                          : "Stable"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Alerts */}
          <div className="glass-card p-6" data-ocid="dashboard.alerts.card">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <Bell className="w-4 h-4 text-purple-400" /> Price Alerts
            </h3>
            <div className="space-y-3">
              {[
                {
                  product: "Amul Butter 500g",
                  target: "₹250",
                  current: "₹255",
                  status: "watching",
                  platform: "Any",
                },
                {
                  product: "India Gate Basmati 5kg",
                  target: "₹340",
                  current: "₹348",
                  status: "watching",
                  platform: "BigBasket",
                },
                {
                  product: "Coca-Cola 2L",
                  target: "₹80",
                  current: "₹85",
                  status: "triggered",
                  platform: "Zepto",
                },
              ].map((alert, i) => (
                <div
                  key={alert.product}
                  data-ocid={`dashboard.alert.${i + 1}`}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                >
                  <div>
                    <div className="text-sm font-medium text-white">
                      {alert.product}
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">
                      Alert when below {alert.target} · {alert.platform}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm text-white">
                      {alert.current}
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${alert.status === "triggered" ? "bg-emerald-500/15 text-emerald-400" : "bg-white/5 text-white/40"}`}
                    >
                      {alert.status === "triggered"
                        ? "✓ Triggered"
                        : "Watching"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Savings Graph */}
        <div className="glass-card p-6">
          <h3 className="font-display font-bold text-white mb-5 flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-emerald-400" /> Monthly
            Savings
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={SAVINGS_DATA}
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.04)"
              />
              <XAxis
                dataKey="month"
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `₹${v}`}
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(5,5,16,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                }}
                labelStyle={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [`₹${value}`, "Saved"]}
              />
              <Bar
                dataKey="saved"
                fill="url(#barGradient)"
                radius={[6, 6, 0, 0]}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity={0.6} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

// ─── AI CHATBOT ───────────────────────────────────────────────────────────────

function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "Hi! I'm GroFast AI 🤖 Ask me anything about grocery prices, deals, or where to buy!",
      time: getNow(),
    },
    {
      role: "user",
      text: "Where should I buy groceries today?",
      time: getNow(),
    },
    { role: "ai", text: AI_RESPONSES[0], time: getNow() },
  ]);
  const [typing, setTyping] = useState(false);
  const aiResponseIdx = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scrollRef is a stable ref
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    const now = getNow();
    setMessages((prev) => [...prev, { role: "user", text, time: now }]);
    setInput("");
    setTyping(true);
    const idx = aiResponseIdx.current % AI_RESPONSES.length;
    aiResponseIdx.current++;
    setTimeout(
      () => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: AI_RESPONSES[idx], time: getNow() },
        ]);
      },
      1200 + Math.random() * 800,
    );
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        data-ocid="chatbot.open_modal_button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"}`}
        style={{
          background: "linear-gradient(135deg,#7C3AED,#2563EB)",
          boxShadow: "0 0 30px rgba(124,58,237,0.5)",
        }}
        aria-label="Open AI assistant"
      >
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "rgba(124,58,237,0.3)" }}
        />
        <Bot className="w-6 h-6 text-white relative z-10" />
      </button>

      {/* Chat panel */}
      {open && (
        <div
          data-ocid="chatbot.dialog"
          className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] rounded-3xl overflow-hidden slide-up"
          style={{
            background: "rgba(10,10,25,0.97)",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow:
              "0 0 60px rgba(124,58,237,0.2), 0 25px 50px rgba(0,0,0,0.6)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#2563EB)",
                }}
              >
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">
                  GroFast AI
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-emerald-400">Online</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              data-ocid="chatbot.close_button"
              onClick={() => setOpen(false)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={`${msg.time}-${msg.role}-${i}`}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={{
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg,#7C3AED,#2563EB)"
                        : "rgba(255,255,255,0.06)",
                    color:
                      msg.role === "user" ? "white" : "rgba(255,255,255,0.85)",
                    borderRadius:
                      msg.role === "user"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 rounded-2xl text-sm"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "18px 18px 18px 4px",
                  }}
                >
                  <div className="flex gap-1.5">
                    {[0, 0.2, 0.4].map((delay) => (
                      <span
                        key={delay}
                        className="w-2 h-2 rounded-full bg-white/40 animate-bounce"
                        style={{ animationDelay: `${delay}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div
            className="p-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex gap-2">
              <input
                data-ocid="chatbot.input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && !e.shiftKey && sendMessage()
                }
                placeholder="Ask about grocery prices..."
                className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-white/30 outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              <button
                type="button"
                data-ocid="chatbot.submit_button"
                onClick={sendMessage}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#2563EB)",
                }}
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState("milk");
  const [pincode, setPincode] = useState("110001");
  const [showPincodeInput, setShowPincodeInput] = useState(false);
  const [pincodeInput, setPincodeInput] = useState("110001");
  const [updatingLocation, setUpdatingLocation] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSearchQuery, setHeroSearchQuery] = useState("");
  const liveUsers = useLiveCount(847);

  const selectedProductData =
    PRODUCTS.find((p) => p.id === selectedProduct) ?? PRODUCTS[0];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleSearch(q: string) {
    const query = q.toLowerCase().trim();
    const match = PRODUCTS.find(
      (p) =>
        p.id === query ||
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query),
    );
    if (match) {
      setSelectedProduct(match.id);
    }
    setPage("home");
    setTimeout(() => {
      document
        .getElementById("comparison")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function updatePincode() {
    if (!pincodeInput.trim()) return;
    setUpdatingLocation(true);
    setTimeout(() => {
      setPincode(pincodeInput);
      setUpdatingLocation(false);
      setShowPincodeInput(false);
    }, 1500);
  }

  const navLinks: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "Compare", page: "compare" },
    { label: "Deals", page: "deals" },
    { label: "Pricing", page: "pricing" },
    { label: "Dashboard", page: "dashboard" },
  ];

  return (
    <div className="min-h-screen grid-bg" style={{ background: "#050510" }}>
      {/* ── NAVBAR ── */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-dark" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            data-ocid="nav.logo.link"
            onClick={() => setPage("home")}
            className="flex items-center gap-2 font-display font-bold text-xl"
          >
            <span className="text-2xl">⚡</span>
            <span className="gradient-text">GroFast</span>
            <span className="text-white/60 font-normal text-sm hidden sm:inline">
              Compare
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.page}
                data-ocid={`nav.${link.page}.link`}
                onClick={() => setPage(link.page)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  page === link.page
                    ? "text-white bg-white/8"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="nav.get_started.button"
              className="hidden sm:flex btn-gradient text-white text-sm font-semibold px-5 py-2 rounded-xl"
            >
              Get Started
            </button>
            <button
              type="button"
              data-ocid="nav.mobile_menu.toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-dark border-t border-white/5 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.page}
                data-ocid={`nav.mobile.${link.page}.link`}
                onClick={() => {
                  setPage(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  page === link.page
                    ? "text-white bg-white/8"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              className="w-full btn-gradient text-white text-sm font-semibold px-5 py-3 rounded-xl mt-2"
            >
              Get Started
            </button>
          </div>
        )}

        {/* Location bar */}
        <div
          className="border-t border-white/[0.04]"
          style={{ background: "rgba(5,5,16,0.6)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-white/40">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              {updatingLocation ? (
                <span className="text-purple-400 animate-pulse">
                  Updating prices for your area...
                </span>
              ) : (
                <span>
                  Delivering to:{" "}
                  <span className="text-white/70 font-mono">{pincode}</span>{" "}
                  (New Delhi)
                </span>
              )}
            </div>
            <button
              type="button"
              data-ocid="location.change.button"
              onClick={() => setShowPincodeInput(!showPincodeInput)}
              className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
            >
              Change Location
              {showPincodeInput ? (
                <ChevronUp className="w-3 h-3" />
              ) : (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
          </div>
          {showPincodeInput && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-3 flex items-center gap-2">
              <input
                data-ocid="location.pincode.input"
                value={pincodeInput}
                onChange={(e) => setPincodeInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && updatePincode()}
                placeholder="Enter 6-digit pincode"
                maxLength={6}
                className="w-48 px-3 py-1.5 rounded-lg text-sm text-white placeholder:text-white/30 outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <button
                type="button"
                data-ocid="location.update.button"
                onClick={updatePincode}
                className="px-3 py-1.5 rounded-lg text-sm font-medium btn-gradient text-white"
              >
                Update
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ── PAGE CONTENT ── */}
      <main>
        {page === "dashboard" ? (
          <DashboardSection />
        ) : page === "deals" ? (
          <FlashDeals />
        ) : page === "pricing" ? (
          <>
            <PricingSection />
          </>
        ) : (
          <>
            {/* ── HERO ── */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-16 pb-20 overflow-hidden">
              <div className="orb-1" />
              <div className="orb-2" />
              <div className="orb-3" />

              {/* Live indicator */}
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full mb-8 fade-in"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-white/60">
                  <span className="text-white font-semibold">
                    {liveUsers.toLocaleString()}
                  </span>{" "}
                  users checking prices right now
                </span>
              </div>

              <h1
                className="font-display text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-4xl leading-tight fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Stop Overpaying.
                <br />
                <span className="gradient-text">Compare Prices</span> Across
                <br />
                All Apps Instantly.
              </h1>

              <p
                className="text-center text-white/50 text-lg mb-10 max-w-2xl fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                AI-powered price intelligence across Blinkit, Zepto, Swiggy
                Instamart, BigBasket, Flipkart Minutes & Amazon Now
              </p>

              {/* Search bar */}
              <div
                className="w-full max-w-2xl mb-4 fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div
                  className="search-glow rounded-2xl flex items-center gap-3 p-2 pl-5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Search className="w-5 h-5 text-white/40 shrink-0" />
                  <input
                    data-ocid="hero.search.input"
                    value={heroSearchQuery}
                    onChange={(e) => setHeroSearchQuery(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      heroSearchQuery.trim() &&
                      handleSearch(heroSearchQuery)
                    }
                    placeholder='Try "Milk", "Maggi", "Amul Butter"...'
                    className="flex-1 bg-transparent text-white placeholder:text-white/30 outline-none text-base py-2"
                  />
                  <button
                    type="button"
                    data-ocid="hero.search.button"
                    onClick={() =>
                      heroSearchQuery.trim() && handleSearch(heroSearchQuery)
                    }
                    className="btn-gradient text-white px-6 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap"
                  >
                    Compare Now →
                  </button>
                </div>
                {/* Quick search chips */}
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {PRODUCTS.slice(0, 5).map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      data-ocid={`hero.quick.${p.id}.button`}
                      onClick={() => handleSearch(p.id)}
                      className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {p.name.split(" ").slice(0, 2).join(" ")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pincode input */}
              <div
                className="flex items-center gap-2 mb-10 fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <MapPin className="w-4 h-4 text-purple-400" />
                <input
                  data-ocid="hero.pincode.input"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter pincode for accurate prices"
                  className="text-sm px-3 py-1.5 rounded-lg text-white/70 placeholder:text-white/30 outline-none w-56 text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                />
              </div>

              {/* Stats bar */}
              <div
                className="flex flex-wrap justify-center gap-6 sm:gap-10 fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                {[
                  { label: "saved by users", value: "₹2.4Cr" },
                  { label: "comparisons", value: "50L+" },
                  { label: "platforms", value: "6" },
                  { label: "data", value: "Live" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold text-2xl gradient-text">
                      {s.value}
                    </div>
                    <div className="text-xs text-white/40">{s.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── PLATFORM LOGOS BAR ── */}
            <section
              className="py-12 px-4"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="max-w-5xl mx-auto">
                <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-8">
                  Comparing prices across
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {PLATFORM_BADGES.map((p) => (
                    <PlatformBadge
                      key={p.name}
                      platform={p.name}
                      color={p.color}
                      bg={p.bg}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* ── COMPARISON SECTION ── */}
            <section id="comparison" className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      Price Comparison
                    </h2>
                    <p className="text-white/40 text-sm mt-1">
                      {selectedProductData.name} ·{" "}
                      {selectedProductData.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="relative"
                      data-ocid="compare.product.select"
                    >
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2.5 rounded-xl text-sm text-white outline-none cursor-pointer"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {PRODUCTS.map((p) => (
                          <option
                            key={p.id}
                            value={p.id}
                            style={{ background: "#0a0a1a" }}
                          >
                            {p.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                    </div>
                    <button
                      type="button"
                      data-ocid="compare.refresh.button"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-white/60 hover:text-white transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Refresh
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div
                  className="glass-card overflow-hidden mb-6"
                  style={{ borderRadius: "1.5rem" }}
                >
                  <ComparisonTable productId={selectedProduct} />
                </div>

                {/* 3-column cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
                  <div className="lg:col-span-2">
                    <AIRecommendationBox productId={selectedProduct} />
                  </div>
                  <div>
                    <HiddenFeeDetector productId={selectedProduct} />
                  </div>
                </div>

                {/* 2-column cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <SmartCartSplit />
                  <PriceTrendGraph productName={selectedProductData.name} />
                </div>
              </div>
            </section>

            {/* ── FLASH DEALS ── */}
            <FlashDeals />

            {/* ── PRICING ── */}
            <PricingSection />

            {/* ── TRUST SECTION ── */}
            <section
              className="py-16 px-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-12">
                  Trusted by{" "}
                  <span className="gradient-text">Smart Shoppers</span> across
                  India
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Priya S.",
                      city: "Mumbai",
                      text: "Saved ₹1,200 last month! GroFast found a milk price difference I never noticed.",
                      stars: 5,
                    },
                    {
                      name: "Rahul M.",
                      city: "Bengaluru",
                      text: "The smart cart split feature is genius. I now split orders across 3 apps every week.",
                      stars: 5,
                    },
                    {
                      name: "Anjali K.",
                      city: "Delhi",
                      text: "Hidden fee detector caught Swiggy charging ₹15 extra on every order. Game changer!",
                      stars: 5,
                    },
                  ].map((review, i) => (
                    <div
                      key={review.name}
                      data-ocid={`reviews.item.${i + 1}`}
                      className="glass-card p-6 text-left"
                    >
                      <div className="flex gap-0.5 mb-3">
                        {[1, 2, 3, 4, 5].slice(0, review.stars).map((n) => (
                          <Star
                            key={n}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        "{review.text}"
                      </p>
                      <div className="text-xs text-white/40">
                        {review.name} · {review.city}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="border-t border-white/5 py-12 px-4"
        style={{ background: "rgba(5,5,16,0.8)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <span className="font-display font-bold text-xl gradient-text">
                  GroFast
                </span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mb-4">
                India's smartest quick commerce price comparison engine. Save
                more, stress less.
              </p>
              <p className="text-xs text-white/25">
                Made with ❤️ for Indian shoppers
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white/80 text-sm mb-4">
                Product
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Compare Prices",
                  "Flash Deals",
                  "Smart Cart",
                  "Price Alerts",
                  "API",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="/"
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white/80 text-sm mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {["About", "Blog", "Careers", "Press"].map((l) => (
                  <li key={l}>
                    <a
                      href="/"
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white/80 text-sm mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Refund Policy",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="/"
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} GroFast Compare. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {PLATFORM_BADGES.map((p) => (
                <span
                  key={p.name}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: p.bg,
                    color: p.color,
                    border: `1px solid ${p.color}20`,
                  }}
                >
                  {p.name}
                </span>
              ))}
            </div>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-white/40 transition-colors flex items-center gap-1"
            >
              Built with ❤️ using caffeine.ai
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

      {/* ── AI CHATBOT ── */}
      <AIChatbot />
    </div>
  );
}
