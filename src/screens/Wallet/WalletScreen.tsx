import axios from 'axios';
import { useState, useEffect } from 'react';
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import MarketData from '../../components/Widgets/Trade/MarketData';

interface ICryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

const WalletScreen: React.FC = () => {
  const [data, setData] = useState<ICryptoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <SiteLayout>
      <Header icon='sort' title='User' />
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl'>Total Balance</h2>
        <h3 className='text-3xl'>$0</h3>
        <button className='bg-blue-600 px-4 py-2 rounded'>Receive</button>
      </div>
      {data && data.length > 0 && (
        <table className='data-table mt-10'>
          <thead>
            <tr>
              <th className='center'>Name</th>
              <th className='center'>Price</th>
              <th className='center'>24h Change</th>
              <th className='center'>Volume (24h)</th>
              <th className='center'>Market Cap</th>
              <th className='center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <MarketData key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </SiteLayout>
  );
};

export default WalletScreen;
