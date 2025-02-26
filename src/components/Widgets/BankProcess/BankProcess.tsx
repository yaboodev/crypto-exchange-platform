import { useState, useEffect } from 'react';
import trc20Logo from '../../../assets/trc20-qrcode.jpg'
import { Snackbar, Alert } from '@mui/material';

// components
import Box from '../../Common/Box';

// interfaces
interface NetworkDetail {
  id: string;
  // other fields can be added here if necessary
}




interface NetworkDetails {
  [key: string]: NetworkDetail;
}










interface IBankDetails {
  id: number;
  name: string;
  iban: string;
  logo: string;
  branch: string;
}

// variables
const dataArray: IBankDetails[] = [
  
  {
    id: 1,
    name: 'TRC20',
    branch: 'Default',
    iban: '0xBAd0D1469f43ee052f842AB736c06cf253914E86',
    logo:  trc20Logo
  },
 
];

const BankProcess: React.FC = (props) => {
  const [tab, setTab] = useState<number>(0);
  const [bankDetails, setBankDetails] = useState<IBankDetails[]>([]);
  const [selectedBank, setSelectedBank] = useState<IBankDetails | null>(null);
  const [copySuccess, setCopySuccess] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const handleWithdrawClick = () => {
    setOpen(true);
  };


  useEffect(() => {
    setBankDetails(dataArray);

    setSelectedBank(dataArray[0]);
  }, []);

  

  /**
   * Handles the change event for the bank selection dropdown.
   * Prevents the default event behavior, extracts the value from the target element,
   * finds the corresponding bank details based on the value, and updates the selected bank state.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event object.
   */
  
  





  const handleViewOnChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();

    const { value } = e.target;

    const findBank = bankDetails.find((item: IBankDetails) => item.id === +value);

    if (findBank) {
      setSelectedBank(findBank);
    }
  };

  const copyToClipboard = (iban: string) => {
    navigator.clipboard.writeText(iban).then(() => {
      setCopySuccess('IBAN copied to clipboard!');
      setShowMessage(true);

      // Hide the message after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 3000); // Adjust the duration as needed
    }).catch((err) => {
      setCopySuccess('Failed to copy IBAN');
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000); // Adjust the duration as needed
    });
  };




  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <div>
            <p>Deposit and withdraw</p>
          </div>
          <ul>
            <li>
              <button
                type='button'
                onClick={() => setTab(0)}
                className={tab === 0 ? 'active' : 'passive'}
              >
                Deposit
              </button>
            </li>
            <li>
              <button
                type='button'
                onClick={() => setTab(1)}
                className={tab === 1 ? 'active' : 'passive'}
              >
                Withdraw
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tab === 0 && (
        <div className='box-content box-horizontal-padding box-vertical-padding box-content-height-nobutton'>
          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <label htmlFor='view'>Account Detail</label>
                  <select name='view' id='view' onChange={handleViewOnChange}>
                    {bankDetails &&
                      bankDetails.map((item: IBankDetails) => (
                        <option key={item.id.toString()} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </form>

          <div className='box-text flex flex-center flex-space-between'>
            {selectedBank && (
              <>
                <div className='bank-info box-horizontal-padding'>
                  <img height='300' 
    width='300'  src={selectedBank.logo} alt='Bank logo' draggable='false' />
                  <p>
                    <strong>
                      {selectedBank.name} - {selectedBank.branch}
                    </strong>
                    <br />
                    {selectedBank.iban}
                    <i
                      className='material-icons'
                      onClick={() => copyToClipboard(selectedBank.iban)} // Add the click handler here
                      style={{ cursor: 'pointer' }} // Optional: Adds a pointer cursor to indicate it's clickable
                    >content_copy</i>
                  </p>
                  {copySuccess && <p>{copySuccess}</p>} {/* Optional: Show a message after copying */}
                  
                </div>
                 {/* The success message */}
          {showMessage && (
            <p className={`copy-message ${showMessage ? 'show' : ''}`}>
              {copySuccess}
            </p>
          )}
              </>
            )}
          </div>
        </div>
      )}

      {tab === 1 && (
        <div className='box-content box-horizontal-padding box-vertical-padding box-content-height-nobutton'>
          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <label htmlFor='iban'>Add IBAN</label>
                  <input type='text' name='iban' id='iban' placeholder='Enter TRC20 ID' />
                </div>

                <div className='full-width'>
                  <label htmlFor='iban'>Amount</label>
                  <input type='text' name='iban' id='iban' placeholder='Enter Amount' />
                </div>
              </div>
            </div>
          </form>

          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  {/* <label htmlFor='view'>My Registered IBANs</label> */}
                  {/* <select name='view' id='view'>
                    <option value='ZB'>Ziraat Bankası</option>
                  </select> */}
                </div>
              </div>
            </div>
          </form>

          <div className='box-text box-horizontal-padding center'>
            {/* <p>
              <strong>TR00 0000 0000 0000 0000 0000 00</strong>
            </p> */}
            <p>
              <span>Amount to be withdrawn : </span>
              <strong>0000.00</strong>
            </p>
          </div>

          <button type='button' className='button button-purple button-medium button-block' onClick={handleWithdrawClick}>
            Request Withdraw
          </button>
          {/* Snackbar Notification */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="info" onClose={() => setOpen(false)}>
          Your withdrawal is processing...wait for 24 hours
        </Alert>
      </Snackbar>
        </div>
      )}
    </Box>
  );
};

export default BankProcess;
