// // components
// import { data } from 'react-router-dom';
// import Header from '../../components/Header/Header';
// import TransactionRow from '../../components/Tables/Transactions/TransactionRow';
// import SiteLayout from '../../layouts/SiteLayout';
// import { useState } from 'react';
// // interfaces
// interface ITransaction {
//   id: number;
//   to: string;
//   type: number;
//   date: string;
//   from: string;
//   coin: string;
//   icon: string;
//   amount: string;
//   status: number;
//   toPicture: string;
//   transaction: string;
// }

// // variables
// const dataArray: ITransaction[] = [
//   {
//     id: 1,
//     type: 2,
//     transaction: '12415346563475',
//     date: '2/5/2020 06:24:45',
//     from: 'Tarık',
//     to: 'Cenk',
//     toPicture: 'https://www.cenksari.com/content/profile.jpg',
//     coin: 'Bitcoin',
//     icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png',
//     amount: '5.553',
//     status: 1,
//   },
//   {
//     id: 2,
//     type: 2,
//     transaction: '12453465987451',
//     date: '3/5/2020 18:35:12',
//     from: 'Tarık',
//     to: 'Cenk',
//     toPicture: 'https://www.cenksari.com/content/profile.jpg',
//     coin: 'Etherium',
//     icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
//     amount: '3.000',
//     status: 2,
//   },
//   {
//     id: 3,
//     type: 1,
//     transaction: '24153459987415',
//     date: '4/5/2020 13:42:01',
//     from: 'Cenk',
//     to: 'Tarık',
//     toPicture: '',
//     coin: 'Tether',
//     icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
//     amount: '158',
//     status: 3,
//   },
// ];

// interface ITransaction {
//   id: number;
//   to: string;
//   type: number;
//   date: string;
//   from: string;
//   coin: string;
//   icon: string;
//   amount: string;
//   status: number;
//   toPicture: string;
//   transaction: string;
// }

// // variables
// const TradeScreen: React.FC = () => {
//     const [data, setData] = useState<ITransaction[]>([]);
//   /**
//    * Handles the search input value change.
//    *
//    * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
//    * @returns {void}
//    */

//   /**
//    * Handles the search form submission.
//    *
//    * @param {React.FormEvent} e - The form submission event.
//    * @returns {void}
//    */

//   return (
//     // <SiteLayout>
//     //   <Header title='Trade' />
//     //   <div>
//     //     <div>
//     //       <MarketData />
//     //       <MarketCapitalization />
//     //     </div>
//     //   </div>
//     // </SiteLayout>
//     <SiteLayout>
//       <Header icon='sort' title='Trade' />
//       <table className='data-table'>
//         <thead>
//           <tr>
//             <th className='left'>Name</th>
//             <th className='left'>Price</th>
//             <th className='center'>Change</th>
//             <th className='center'>Volume (24v)</th>
//             <th className='center responsive-hide2'>Market Cap</th>
//             <th className='left responsive-hide'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tbody>
//             {data.map((item: ITransaction) => (
//               <TransactionRow key={item.id.toString()} item={item} />
//             ))}
//           </tbody>
//         </tbody>
//       </table>
//     </SiteLayout>
//   );
// };

// export default TradeScreen;
import { useState, useEffect } from 'react';
// components
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import MarketData from '../../components/Widgets/Trade/MarketData';

// interfaces
interface ITransaction {
  id: number;
  to: string;
  type: number;
  date: string;
  from: string;
  coin: string;
  icon: string;
  amount: string;
  status: string;
  toPicture: string;
  transaction: string;
}

// variables
const dataArray: ITransaction[] = [
  {
    id: 1,
    type: 2,
    transaction: '103.23',
    date: '$123',
    to: '0.17%',
    toPicture: '234',
    coin: 'Bitcoin',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png',
    amount: '5.553',
    status: 'trade',
    from: '',
  },
  {
    id: 2,
    type: 2,
    transaction: '124',
    date: '$123',
    to: '0.87%',
    toPicture: '765',
    coin: 'Etherium',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
    amount: '3.000',
    status: 'trade',
    from: '',
  },
  {
    id: 3,
    type: 1,
    transaction: '153',
    date: '$123',
    to: '0.23%',
    toPicture: '234',
    coin: 'Tether',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
    amount: '158',
    status: 'trade',
    from: '',
  },
  {
    id: 4,
    type: 1,
    transaction: '200',
    date: '$123',
    to: '0.75%',
    toPicture: '4',
    coin: 'Tether',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
    amount: '158',
    status: 'trade',
    from: '',
  },
  {
    id: 5,
    type: 2,
    transaction: '120',
    date: '$123',
    to: '0.78%',
    toPicture: '145',
    coin: 'Bitcoin',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png',
    amount: '5.553',
    status: 'trade',
    from: '',
  },
  {
    id: 6,
    type: 2,
    transaction: '124',
    date: '$123',
    to: '0.98%',
    toPicture: '123',
    coin: 'Etherium',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
    amount: '3.000',
    status: 'trade',
    from: '',
  },
  {
    id: 7,
    type: 1,
    transaction: '105',
    date: '$123',
    to: '0.99%',
    toPicture: '123',
    coin: 'Tether',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
    amount: '158',
    status: 'trade',
    from: '',
  },
  {
    id: 7,
    type: 2,
    transaction: '120',
    date: '$123',
    to: '0.78%',
    toPicture: '145',
    coin: 'Bitcoin',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png',
    amount: '5.553',
    status: 'trade',
    from: '',
  },
  {
    id: 8,
    type: 2,
    transaction: '124',
    date: '$123',
    to: '0.98%',
    toPicture: '123',
    coin: 'Etherium',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
    amount: '3.000',
    status: 'trade',
    from: '',
  },
  {
    id: 9,
    type: 1,
    transaction: '105',
    date: '$123',
    to: '0.99%',
    toPicture: '123',
    coin: 'Tether',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
    amount: '158',
    status: 'trade',
    from: '',
  },
];

const TransactionsScreen: React.FC = () => {
  const [data, setData] = useState<ITransaction[]>([]);

  useEffect(() => {
    setData(dataArray);
  }, []);

  /**
   * Handles the search input value change.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   * @returns {void}
   */

  /**
   * Handles the search form submission.
   *
   * @param {React.FormEvent} e - The form submission event.
   * @returns {void}
   */

  return (
    <SiteLayout>
      <Header icon='sort' title='User' />

      {data && data.length > 0 && (
        <table className='data-table mt-10'>
          <thead>
            <tr>
              <th className='center'>Name</th>
              <th className='center'>Price</th>
              <th className='center'>Change</th>
              <th className='center'>Volume (24v)</th>
              <th className='center'>Market Cap</th>
              <th className='center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: ITransaction) => (
              <MarketData key={item.id.toString()} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </SiteLayout>
  );
};

export default TransactionsScreen;
