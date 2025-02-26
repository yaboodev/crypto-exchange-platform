import React, { useState, useEffect } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Navbar from '../Navbar/Navbar';

interface IProps {
  icon?: string;
  title: string;
  onBack?: () => void; // ✅ Make sure this exists
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
    <>
      <header className='flex flex-center flex-space-between relative'>
        {/* Left Section */}
        <HeaderLeft icon={icon} title={title} onMenuClick={handleMenuClick} />

        <HeaderRight />
      </header>

      {/* Mobile Navbar under left header */}
      {isNavbarVisible && isMobile && (
        <div className='w-full bg-white shadow-lg border border-gray-200 z-50 mt-2'>
          <Navbar />
          <button
            type='button'
            className='block w-full text-center text-white bg-red-500 py-2 hover:bg-red-600'
            onClick={() => setNavbarVisible(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
