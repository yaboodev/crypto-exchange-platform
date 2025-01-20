import { Link } from 'react-router-dom';

// components
import NavbarButton from './NavbarButton';

const Navbar: React.FC = () => (
  <nav className='navbar-inner no-select'>
    <div className='logo'>
      <Link to='/market'>
        <img
          draggable='false'
          alt='Crypto Exchange'
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
        />
      </Link>
    </div>
    <h3>Ana menü</h3>
    <ul>
      <li>
        <NavbarButton url='/dashboard' icon='dashboard' title='Withdraw-Deposit' />
      </li>
      <li>
        <NavbarButton url='/wallet' icon='account_balance_wallet' title='My Wallet' />
      </li>
      <li>
        <NavbarButton url='/transactions' icon='sync' title='Transaction' />
      </li>
      <li>
        <NavbarButton url='/trading' icon='paid' title='Trade' />
      </li>
      <li>
        <NavbarButton url='/exchange' icon='account_balance' title='Trail' />
      </li>
      <li>
        <NavbarButton url='/capital' icon='equalizer' title='Market' />
      </li>
    </ul>
    <h3>Others</h3>
    <ul>
      <li>
        <NavbarButton url='/members' icon='account_circle' title='Profile' />
      </li>
      <li>
        <NavbarButton url='/contacts' icon='contacts' title='People' />
      </li>
      <li>
        <NavbarButton url='/messages' icon='chat' title='Message' />
      </li>
      <li>
        <NavbarButton url='/settings' icon='settings' title='Settings' />
      </li>
    </ul>
    <div className='copyright'>
      <strong>Crypto Exchange</strong>
      <p>
        2025 &copy; Jasail Tech.
        <br />
        <br />
        Made with <span>❤</span> by Jasail
      </p>
    </div>
  </nav>
);

export default Navbar;
