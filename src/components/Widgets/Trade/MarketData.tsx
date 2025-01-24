// components
import Amount from '../../Tables/Transactions/Amount';

// interfaces
interface IProps {
  item: any;
}

const MarketData: React.FC<IProps> = ({ item }) => (
  <tr>
    <td className='center'>
      <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
      <strong>{item.coin}</strong>
    </td>
    <td className='center'>{item.transaction}</td>
    <td className='center'>{item.to}</td>
    <td className='center'>{item.date}</td>
    <td aria-label='amount' className='center'>
      <Amount type={item.type} amount={item.amount} />
    </td>
    <td aria-label='status' className='center'>
      <button>Trade</button>
    </td>
  </tr>
);

export default MarketData;
