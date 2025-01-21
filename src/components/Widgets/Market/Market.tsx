import { useState, useEffect } from 'react';
import MarketRow from './MarketRow';
import { ICrypto } from '../../../screens/Market/types';

interface IProps {
  onCoinSelect: (coin: ICrypto) => void;
  onClick: () => void;
}

const Market: React.FC<IProps> = ({ onCoinSelect }) => {
  const [data, setData] = useState<ICrypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        const result = await response.json();

        const formattedData: ICrypto[] = result.map((item: any) => ({
          id: item.id,
          name: `${item.symbol.toUpperCase()}/USD`,
          icon: item.image,
          amount: item.current_price.toFixed(2),
          currency: 'USD',
          change: `${item.price_change_percentage_24h?.toFixed(2) || 0}%`,
          status: item.price_change_percentage_24h > 0 ? 1 : 0,
          lineChartData: item.sparkline_in_7d?.price || [],
          symbol: item.symbol.toUpperCase(),
          date: new Date().toLocaleDateString(),
          weight: 'N/A', // Placeholder
          exchange: `${item.symbol.toUpperCase()}/USD`, // Placeholder
          financialRate: '0.00%/hr', // Placeholder
          description: 'No description available.', // Placeholder
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching market data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className='market'>
      {loading ? (
        <div className='loader'>Loading data...</div>
      ) : data.length > 0 ? (
        data.map((item) => (
          <MarketRow key={item.id} item={item} onClick={() => onCoinSelect(item)} />
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Market;
