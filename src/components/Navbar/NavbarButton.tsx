import { Link, useLocation } from 'react-router-dom';

// interfaces
interface IProps {
  url: string;
  icon: string;
  title: string;
}

const NavbarButton: React.FC<IProps> = ({ url, icon, title }) => {
  const location = useLocation();

  return (
    <Link
      to={url}
      className={`flex items-center space-x-4 py-4 px-6 w-full text-lg rounded-md transition-all duration-300 
        ${location.pathname.toLowerCase().includes(url) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'} 
        ${location.pathname.toLowerCase().includes(url) ? 'font-semibold' : ''} 
        flex-col sm:flex-row`} // Flex layout changes for mobile and desktop
    >
      <i className='material-icons text-2xl'>{icon}</i> {/* Larger icons */}
      <span className='text-lg'>{title}</span> {/* Larger text */}
    </Link>
  );
};

export default NavbarButton;
