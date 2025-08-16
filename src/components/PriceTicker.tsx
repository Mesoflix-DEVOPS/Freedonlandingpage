import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TickerData {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

const PriceTicker = () => {
  const [tickerData, setTickerData] = useState<TickerData[]>([
    { symbol: "BTC/USD", price: "43,250.00", change: "+2.5%", isPositive: true },
    { symbol: "Gold", price: "2,045.80", change: "-0.3%", isPositive: false },
    { symbol: "Volatility 75", price: "1,847.32", change: "+1.2%", isPositive: true },
    { symbol: "EUR/USD", price: "1.0890", change: "+0.8%", isPositive: true },
    { symbol: "Volatility 100", price: "2,156.44", change: "-0.5%", isPositive: false },
  ]);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerData(prev => prev.map(item => ({
        ...item,
        price: (parseFloat(item.price.replace(',', '')) + (Math.random() - 0.5) * 10).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }),
        change: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 3).toFixed(1)}%`,
        isPositive: Math.random() > 0.5
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 overflow-hidden">
      <div className="flex space-x-8 animate-ticker-slide">
        {[...tickerData, ...tickerData].map((item, index) => (
          <div 
            key={index}
            className="flex items-center space-x-2 min-w-max price-ticker"
          >
            <span className="font-semibold text-foreground">{item.symbol}</span>
            <span className="text-sm text-muted-foreground">${item.price}</span>
            <div className={`flex items-center space-x-1 text-sm ${
              item.isPositive ? 'text-chart-green' : 'text-chart-red'
            }`}>
              {item.isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              <span>{item.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;