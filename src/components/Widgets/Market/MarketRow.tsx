import { useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { ICrypto } from '../../../screens/Market/types';

interface IProps {
  item: ICrypto;
  onClick: (item: ICrypto) => void; // Update to pass item
}

const MarketRow: React.FC<IProps> = ({ item, onClick }) => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    setColor(item.status === 1 ? 'green' : 'red');
  }, [item.status]);

  return (
    <>
      <div
        className='market-row flex flex-center flex-space-between'
        onClick={() => onClick(item)}
        onKeyPress={(e) => e.key === 'Enter' && onClick(item)}
        style={{
          cursor: 'pointer',
          width: '100%',
          border: 'none',
          background: 'none',
          textAlign: 'left',
        }}
        role='button'
        tabIndex={0}
      >
        <div>
          <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
        </div>
        <div>
          <p>
            <strong>{item.name}</strong>
            <span className='gray'>{item.date}</span>
          </p>
        </div>
        <div>
          <Sparklines data={item.lineChartData} width={50} height={50}>
            <SparklinesLine style={{ strokeWidth: 2, fill: 'none' }} color={color} />
          </Sparklines>
        </div>
        <div>
          <p className='right'>
            <strong>
              {item.amount} {item.currency}
            </strong>
            <span className={color}>{item.change}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MarketRow;
