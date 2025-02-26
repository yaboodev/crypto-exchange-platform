import { useState, useEffect } from 'react';

// components
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import TopBar from '../../components/Tables/TopBar/TopBar';
import CapitalRow from '../../components/Tables/Capital/CapitalRow';

// interfaces
interface ICrypto {
  id: number;
  name: string;
  icon: string;
  symbol: string;
  weight: string;
  amount: string;
  change: string;
  status: number;
  currency: string;
  lineChartData: number[];
}

// variables
const dataArray: ICrypto[] = [
  // ... (same data as before)
];

const CapitalScreen: React.FC = () => {
  const [data, setData] = useState<ICrypto[]>([]);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    setData(dataArray);
  }, []);

  /**
   * Handles the search input value change.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   * @returns {void}
   */
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setKeyword(value);
  };

  /**
   * Handles the search form submission and filters data.
   *
   * @param {React.FormEvent} e - The form submission event.
   * @returns {void}
   */
  const handleSearchSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    // Filter the data based on the keyword
    const filteredData = dataArray.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.symbol.toLowerCase().includes(keyword.toLowerCase())
    );
    setData(filteredData); // Update the data state with filtered data
  };

  return (
    <SiteLayout>
      <Header icon='sort' title='New markets Coming soon' />
      <TopBar
        searchValue={keyword}
        searchSubmit={handleSearchSubmit}
        searchOnChange={handleSearchValue}
      />

      {data && data.length > 0 && (
        <table className='data-table'>
          <thead>
            <tr>
              <th className='left'>Sıra</th>
              <th className='left'>Coin</th>
              <th className='center'>Son fiyat</th>
              <th className='center'>Değişim (24s)</th>
              <th className='center responsive-hide2'>Hacim (24s)</th>
              <th className='left responsive-hide'>Grafik</th>
              <th aria-label='empty' className='right'>
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: ICrypto, index: number) => (
              <CapitalRow key={item.id.toString()} item={item} index={index + 1} />
            ))}
          </tbody>
        </table>
      )}
    </SiteLayout>
  );
};

export default CapitalScreen;
