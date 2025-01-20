// components
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

// interfaces
interface IProps {
  icon?: string;
  title: string;
  onMenuClick?: () => void; // Add this
}

const Header: React.FC<IProps> = ({ icon, title,onMenuClick }) => (
  <header className='flex flex-center flex-space-between'>
    <HeaderLeft icon={icon} title={title} onMenuClick={onMenuClick} />
    <HeaderRight />
  </header>
);

export default Header;
