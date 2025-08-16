import { useEffect, useRef } from "react";

interface TradingViewWidgetProps {
  symbols?: string[];
  width?: string;
  height?: string;
  colorTheme?: "light" | "dark";
  isTickerTape?: boolean;
}

const TradingViewWidget = ({ 
  symbols = ["GOLD", "BTCUSD", "EURUSD"], 
  width = "100%", 
  height = "400",
  colorTheme = "dark",
  isTickerTape = false
}: TradingViewWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-real-time-chart.js';
    script.type = 'text/javascript';
    script.async = true;

    if (isTickerTape) {
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
          { proName: "FOREXCOM:NSXUSD", title: "US 100" },
          { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
          { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
          { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
          { proName: "FOREXCOM:DJI", title: "Dow 30" },
          { proName: "INDEX:NKY", title: "Nikkei 225" },
          { proName: "INDEX:DEU40", title: "DAX Index" },
          { proName: "FOREXCOM:UKXGBP", title: "UK 100" }
        ],
        showSymbolLogo: true,
        colorTheme: colorTheme,
        isTransparent: true,
        displayMode: "adaptive",
        locale: "en"
      });
    } else {
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: symbols[0] || "GOLD",
        interval: "1",
        timezone: "Etc/UTC",
        theme: colorTheme,
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: true,
        save_image: false,
        container_id: "tradingview_chart"
      });
    }

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [symbols, colorTheme, isTickerTape]);

  return (
    <div 
      ref={containerRef} 
      className="tradingview-widget-container"
      style={{ height: isTickerTape ? "46px" : height, width }}
    >
      <div 
        id="tradingview_chart" 
        style={{ height: isTickerTape ? "46px" : height, width }}
      />
    </div>
  );
};

export default TradingViewWidget;