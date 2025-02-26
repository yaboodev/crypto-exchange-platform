
import React from 'react';
import './Wallet.css';

const Wallet: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Byte</h1>
        <div className="subdomain">Your Wallet</div>
      </header>

      <div className="tabs">
        <span className="tab active">Spot</span>
        <span className="tab">Contract</span>
        <span className="tab">Financial</span>
      </div>

      <div className="divider" />

      <div className="section">
        <div className="total-assets">
          <div className="label">Total assets (USDT)</div>
          <div className="amount">0 <span className="equivalent">≈ 0 USD</span></div>
        </div>
        
        {/* <div className="actions">
          <button className="action-btn">Deposit</button>
          <button className="action-btn">Withdrawal</button>
          <button className="action-btn">Financial</button>
          <button className="action-btn">Exchange</button>
        </div> */}
      </div>

      <div className="divider" />

      <div className="portfolio">
        <div className="portfolio-item">
          <div className="account-type">Spot</div>
          <div className="amount-container">
            <div className="amount">0 USDT</div>
            <span className="equivalent">≈ 0 USD</span>
          </div>
        </div>
        <div className="portfolio-item highlighted">
          <div className="account-type">Contract (U - based)</div>
          <div className="amount-container">
            <div className="amount">0 USDT</div>
            <span className="equivalent">≈ 0 USD</span>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="account-type">Delivery contract account</div>
          <div className="amount-container">
            <div className="amount">0 USDT</div>
            <span className="equivalent">≈ 0 USD</span>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="account-type">Financial account</div>
          <div className="amount-container">
            <div className="amount">0 USDT</div>
            <span className="equivalent">≈ 0 USD</span>
          </div>
        </div>
      </div>

      {/* <footer className="footer">
        <span className="footer-link">Home</span>
        <span className="footer-link">Trade</span>
        <span className="footer-link">Contract</span>
        <span className="footer-link">Financial</span>
        <span className="footer-link">Assets</span>
      </footer> */}
    </div>
  );
};

export default Wallet;