// src/components/TradeComponent.js
import React, { useState } from 'react';
import { useDemoTrading } from '../../context/DemoTradingContext';

const TradeComponent = () => {
  const { balance, portfolio, tradeHistory, buy, sell, resetDemo, availableCoins } = useDemoTrading();

  const [selectedCoin, setSelectedCoin] = useState(availableCoins[0].id); // Default to the first coin
  const [amount, setAmount] = useState(0);

  const handleBuy = () => {
    const coin = availableCoins.find(coin => coin.id === selectedCoin);
    if (coin) {
      buy(selectedCoin, amount, coin.price);
    }
  };

  const handleSell = () => {
    const coin = availableCoins.find(coin => coin.id === selectedCoin);
    if (coin) {
      sell(selectedCoin, amount, coin.price);
    }
  };

  const handleReset = () => {
    resetDemo();
  };

  return (
    <div>
      <h1>Balance: ${balance}</h1>
      <h2>Portfolio:</h2>
      <pre>{JSON.stringify(portfolio, null, 2)}</pre>

      {/* Cryptocurrency Selection */}
      <label>Select a cryptocurrency:</label>
      <select
        value={selectedCoin}
        onChange={e => setSelectedCoin(e.target.value)}
      >
        {availableCoins.map(coin => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>

      {/* Amount Input */}
      <label>Amount to Trade:</label>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(parseFloat(e.target.value))}
        placeholder="Amount"
      />

      {/* Buy and Sell Buttons */}
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>

      {/* Trade History */}
      <h3>Trade History:</h3>
      <pre>{JSON.stringify(tradeHistory, null, 2)}</pre>

      {/* Reset Button */}
      <button onClick={handleReset}>Reset Demo</button>
    </div>
  );
};

export default TradeComponent;
