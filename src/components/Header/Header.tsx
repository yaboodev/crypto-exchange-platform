// components
import React, { useState, useEffect } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Navbar from '../Navbar/Navbar';

// interfaces
interface IProps {
  icon?: string;
  title: string;
  onMenuClick?: () => void;
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
    <header className='flex flex-center flex-space-between'>
      <HeaderLeft icon={icon} title={title} onMenuClick={handleMenuClick} />
      <HeaderRight />

      {/* Conditionally render Navbar */}
      {isNavbarVisible && (
        <div className='mobile-navbar-overlay'>
          <Navbar />
          {/* Close button */}
          <button
            type='button'
            className='close-navbar-btn'
            onClick={() => setNavbarVisible(false)}
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
