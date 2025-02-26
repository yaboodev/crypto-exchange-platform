// src/context/DemoTradingContext.js
import { createContext, useContext, useState, useEffect } from 'react';

// Available cryptocurrencies (hardcoded for this demo)
const availableCoins = [
  { id: 'bitcoin', name: 'Bitcoin', price: 40000 }, // Example price
  { id: 'ethereum', name: 'Ethereum', price: 3000 },
  { id: 'litecoin', name: 'Litecoin', price: 150 },
];

const DemoTradingContext = createContext();

export const DemoTradingProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem('demoBalance');
    return savedBalance ? parseFloat(savedBalance) : 10000; // Default: $10,000
  });

  const [portfolio, setPortfolio] = useState(() => {
    const savedPortfolio = localStorage.getItem('demoPortfolio');
    return savedPortfolio ? JSON.parse(savedPortfolio) : {};
  });

  const [tradeHistory, setTradeHistory] = useState(() => {
    const savedHistory = localStorage.getItem('demoTradeHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('demoBalance', balance);
    localStorage.setItem('demoPortfolio', JSON.stringify(portfolio));
    localStorage.setItem('demoTradeHistory', JSON.stringify(tradeHistory));
  }, [balance, portfolio, tradeHistory]);

  // Buy a cryptocurrency
  const buy = (coinId, amount, price) => {
    const totalCost = amount * price;
    if (totalCost > balance) {
      alert('Insufficient funds!');
      return;
    }

    setBalance(prev => prev - totalCost);
    setPortfolio(prev => ({
      ...prev,
      [coinId]: (prev[coinId] || 0) + amount,
    }));
    setTradeHistory(prev => [
      ...prev,
      { type: 'buy', coinId, amount, price, timestamp: new Date() },
    ]);
  };

  // Sell a cryptocurrency
  const sell = (coinId, amount, price) => {
    if (!portfolio[coinId] || portfolio[coinId] < amount) {
      alert('Insufficient coins!');
      return;
    }

    const totalValue = amount * price;
    setBalance(prev => prev + totalValue);
    setPortfolio(prev => ({
      ...prev,
      [coinId]: prev[coinId] - amount,
    }));
    setTradeHistory(prev => [
      ...prev,
      { type: 'sell', coinId, amount, price, timestamp: new Date() },
    ]);
  };

  // Reset demo data
  const resetDemo = () => {
    setBalance(10000);
    setPortfolio({});
    setTradeHistory([]);
  };

  return (
    <DemoTradingContext.Provider
      value={{
        balance,
        portfolio,
        tradeHistory,
        buy,
        sell,
        resetDemo,
        availableCoins, // Provide available coins list to components
      }}
    >
      {children}
    </DemoTradingContext.Provider>
  );
};

export const useDemoTrading = () => useContext(DemoTradingContext);
