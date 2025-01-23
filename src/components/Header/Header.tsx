import React, { useState, useEffect } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Navbar from '../Navbar/Navbar';

interface IProps {
  icon?: string;
  title: string;
}

const Header: React.FC<IProps> = ({ icon, title }) => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check media size on load and resize
  useEffect(() => {
    const checkMediaSize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkMediaSize();
    window.addEventListener('resize', checkMediaSize);

    return () => {
      window.removeEventListener('resize', checkMediaSize);
    };
  }, []);

  // Toggle Navbar visibility
  const handleMenuClick = () => {
    if (isMobile) {
      setNavbarVisible((prevState) => !prevState);
    }
  };

  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-md relative'>
      {/* Left Section */}
      <div className='relative'>
        <HeaderLeft icon={icon} title={title} onMenuClick={handleMenuClick} />
        {/* Mobile Navbar under left header */}
        {isNavbarVisible && (
          <div className='absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 z-50'>
            <Navbar />
            <button
              type='button'
              className='block w-full text-center text-white bg-red-500 py-2 mt-2 hover:bg-red-600'
              onClick={() => setNavbarVisible(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Right Section */}
      <HeaderRight />
    </header>
  );
};

export default Header;
