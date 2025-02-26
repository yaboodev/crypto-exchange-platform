import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { ICryptoData } from '../Wallet/WalletScreen';
import { generateTokens } from '../../utils/tokens';
import './trade.css';

interface Contract {
  pair: string;
  timestamp: string;
  amount: string;
  direction: string;
  price: string;
  remainingTime: number;
}

interface Report {
  initial: number;
  profit: number;
  fee: number;
  final: number;
}

const Trade = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { coinData } = location.state as { coinData: ICryptoData };
  
  // State management
  const [amount, setAmount] = useState('');
  const [activePosition, setActivePosition] = useState<'long' | 'short'>('long');
  const [deliveryTime, setDeliveryTime] = useState('60');
  const [contract, setContract] = useState<Contract | null>(null);
  const [report, setReport] = useState<Report | null>(null);
  const [ticket, setTicket] = useState('');
  const [result, setResult] = useState('');
  const [tokens] = useState(() => generateTokens());

  // Handle contract submission
  const handleEntrust = () => {
    if (!amount || isNaN(Number(amount || Number(amount)))) {
      alert('Please enter a valid amount');
      return;
    }

    const newContract = {
      pair: `${coinData.symbol.toUpperCase()}/USDT`,
      timestamp: new Date().toISOString(),
      amount: `${amount} USDT`,
      direction: activePosition.toUpperCase(),
      price: coinData.current_price.toFixed(2),
      remainingTime: parseInt(deliveryTime) 
    };

    setContract(newContract);
  };

  // Countdown timer
  useEffect(() => {
    if (!contract) return;

    const timer = setInterval(() => {
      setContract(prev => {
        if (!prev || prev.remainingTime <= 0) {
          clearInterval(timer);
          generateReport();
          return null;
        }
        return { ...prev, remainingTime: prev.remainingTime - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [contract]);


  // Validate ticket
  const validateTicket = () => {
    const isValid = tokens.includes(ticket.toUpperCase());
    setResult(isValid ? '🎉 Congratulations! ' : '');
    setTicket('');
  };

  // Generate financial report
  const generateReport = () => {
    if (!contract) return;
  
    const initial =  Math.max(100, Number(amount)); // Now uses only the input amount (USDT)
    const profit = initial * 0.14; // 14% profit
    const fee = initial * 0.0005; // 0.05% fee
  
    setReport({
      initial,
      profit,
      fee,
      final: initial + profit - fee,
    });
  };
  

  

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="trade-container">
      <Header icon="arrow_back" title="Trade" onBack={() => navigate(-1)} />
      
      {/* Coin Header */}
      <div className="coin-header">
        <img src={coinData.image} alt={coinData.name} className="coin-icon" />
        <div>
          <h1>{coinData.name}</h1>
          <p>${coinData.current_price.toFixed(2)}</p>
        </div>
      </div>

      {/* Position Selector */}
      <div className="position-toggle">
        <button
          className={`toggle-btn ${activePosition === 'long' ? 'active' : ''}`}
          onClick={() => setActivePosition('long')}
        >
          Buy Long
        </button>
        <button
          className={`toggle-btn ${activePosition === 'short' ? 'active' : ''}`}
          onClick={() => setActivePosition('short')}
        >
          Buy Short
        </button>
      </div>

      {/* Contract Form */}
      <div className="trade-form">
        <div className="form-group">
          <label>Amount (USDT)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="form-group">
          <label>Delivery Time</label>
          <select
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="delivery-select"
          >
            <option value="60">1 Minute</option>
            <option value="300">5 Minutes</option>
            <option value="600">10 Minutes</option>
          </select>

          
        </div>
        <div className="form-group">
        <label>Profit or Loss </label>
          <select >
          
          <option >14%</option>
          </select>
        </div>

        <button className="entrust-btn" onClick={handleEntrust}>
          Entrust Now
        </button>
      </div>

      {/* Active Contract */}
      {contract && (
        <div className="contract-card">
          <h3>My Contract</h3>
          <div className="contract-details">
            <p>{contract.pair} | {new Date(contract.timestamp).toLocaleString()}</p>
            <p>Amount: {contract.amount}</p>
            <p>Direction: {contract.direction}</p>
            <p>Price: ${contract.price}</p>
            <div className="countdown">
              {formatTime(contract.remainingTime)}
            </div>
          </div>
        </div>
      )}

      

      {/* Ticket Validation */}
      <div className="ticket-section">
        <input
          type="text"
          value={ticket}
          onChange={(e) => setTicket(e.target.value.slice(0, 5))}
          placeholder="Enter 5-digit ticket"
          maxLength={5}
        />
        <button onClick={validateTicket} className="validate-btn">
          Validate Ticket
        </button>
        {result && <div className={`result ${result.includes('🎉') ? 'success' : 'error'}`}>{result}</div>}


        {/* Transaction Report */}
      {report && (
        <div className="report-card">
          <h3>Transaction Report</h3>
          <div className="report-details">
            <p>Initial: ${report.initial.toFixed(2)}</p>
            <p>Profit: +${report.profit.toFixed(2)}</p>
            <p>Fee: -${report.fee.toFixed(2)}</p>
            <p className="final-amount">Final: ${report.final.toFixed(2)}</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Trade;