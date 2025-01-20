import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '../../Common/Box';
import MarketRow from './MarketRow';

interface ICrypto {
  id: string;
  name: string;
  icon: string;
  amount: string;
  currency: string;
  change: string;
  lineChartData: number[]; // Placeholder for chart data.
}

const Market: React.FC = () => {
  const [data, setData] = useState<ICrypto[]>([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        const result = await response.json();

        const formattedData: ICrypto[] = result.map((item: any) => ({
          id: item.id,
          name: `${item.symbol.toUpperCase()}/USD`, // Symbol with currency.
          icon: item.image, // Icon URL.
          amount: item.current_price.toFixed(2), // Current price.
          currency: 'USD', // Static USD currency.
          change: `${item.price_change_percentage_24h?.toFixed(2) || 0}%`, // 24h change.
          lineChartData: [], // Placeholder for chart data.
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        Piyasalar
      </div>
      <div className='box-content box-content-height'>
        {data.length > 0
          ? data.map((item) => <MarketRow key={item.id} item={item} />)
          : 'Loading...'}
      </div>
      <div className='box-button box-vertical-padding box-horizontal-padding'>
        <Link to='/capital' className='button button-purple button-medium button-block'>
          More
          <i className='material-icons button-icon-right'>chevron_right</i>
        </Link>
      </div>
    </Box>
  );
};

export default Market;
