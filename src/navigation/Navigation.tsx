import { Routes, Route } from 'react-router-dom';
// pages
import MarketScreen from '../screens/Market/MarketScreen';
import SigninScreen from '../screens/Members/SigninScreen';
import SignupScreen from '../screens/Members/SignupScreen';
import ForgotScreen from '../screens/Members/ForgotScreen';
import ProfileScreen from '../screens/Members/ProfileScreen';
import CapitalScreen from '../screens/Capital/CapitalScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';
import TradeScreen from '../screens/Trade/TradeScreen';
import DataScreen from '../screens/Data/DataScreen';
import Wallet from '../screens/Wallet/Wallet';
import WalletScreen from '../screens/Wallet/WalletScreen';
import Trade from '../screens/Trade/Trade';
import DocumentationScreen from '../screens/Documentation/DocumentationScreen';
import NotificationScreen from '../screens/Members/NotificationScreen';
import APIScreen from '../screens/API/APIScreen';

const Navigation: React.FC = () => (
  <Routes>
    <Route path='/' element={<SigninScreen />} />
    <Route path='/trades/:coinId' element={<Trade />} />
    <Route path='/data' element={<DataScreen />} />
    <Route path='/market' element={<MarketScreen />} />
    <Route path='/capital' element={<CapitalScreen />} />
    <Route path='/docs' element={<DocumentationScreen />} />
    <Route path='/members/notifications' element={<NotificationScreen />} />
    <Route path='/trade' element={<TradeScreen />} />
    <Route path='/api' element={<APIScreen />} />
    <Route path='/trade' element={<TradeScreen />} />
    <Route path='/api' element={<APIScreen />} />
    <Route path='/wallet' element={<Wallet />} />
    <Route path='/walletScreen' element={<WalletScreen />} />
    <Route path='/members' element={<ProfileScreen />} />
    <Route path='/dashboard' element={<DashboardScreen />} />
    <Route path='/members/signup' element={<SignupScreen />} />
    <Route path='/transactions' element={<TransactionsScreen />} />
    <Route path='/members/forgot-password' element={<ForgotScreen />} />
  </Routes>
);

export default Navigation;
