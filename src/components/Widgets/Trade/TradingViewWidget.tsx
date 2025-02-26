import React, { useEffect, useRef } from 'react';

interface TradingViewProps {
  symbol: string;
}

const TradingViewWidget: React.FC<TradingViewProps> = ({ symbol }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: `BINANCE:${symbol}USDT`,
        width: '100%',
        height: 400,
        theme: 'dark',
        style: 1,
        locale: 'en',
        interval: 'D',
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
      });

      containerRef.current.innerHTML = ''; // Clear previous content
      containerRef.current.appendChild(script);
    }
  }, [symbol]);

  return <div ref={containerRef} />;
};

export default TradingViewWidget;
