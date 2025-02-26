import React, { useState } from 'react'; // Add useState
import Box from '../../components/Common/Box';
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import BankProcess from '../../components/Widgets/BankProcess/BankProcess';
import RecentActivity from '../../components/Widgets/RecentActivity/RecentActivity';

const DashboardScreen: React.FC = () => {
  // State for file upload and messages
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  // Handle confirmation button click
  const handleConfirmClick = () => {
    if (!file) {
      alert('Please upload a file before confirming.');
      return;
    }
    setMessage('File uploaded successfully.');
  };

  return (
    <SiteLayout>
      {/* Pass the toggle handler to Header */}
      <Header icon='sort' title='Deposit and Withdraw' />

      <div className='flex flex-destroy flex-space-between'>
        <div className='flex-1 box-right-padding'>
          <BankProcess />
        </div>
      </div>
      <Box>
        <div>
          <div className='flex flex-destroy flex-space-between'>
            <div className='flex-1 box-right-padding'>
              <label>Upload certificate</label>
              <input type='file' id='file-input' onChange={handleFileChange} />
            </div>

            <p className='additional-info'>
              Important hint: Ensure safety and security in your transactions.
            </p>

            <button className='button' onClick={handleConfirmClick}>
              Confirm
            </button>

            {message && <p className='message'>{message}</p>}
          </div>
        </div>
      </Box>

      {/* Uncommented Sections */}
      {/* <div className='flex flex-destroy flex-space-between'> */}
      {/* <div className='flex-1 box-right-padding'>
          <RecentActivity />
        </div> */}
      {/* <div className='flex-1'>
          <Box>
            <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
              <div className='flex flex-center flex-space-between'>
                <p>Important</p>
              </div>
            </div>
            <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
              <p>
                &bull; In EFT transfers, Crypto Exchange must be written in the
                recipient/beneficiary section.
              </p>
              <p>
                &bull; You can make a Wire Transfer/EFT transaction to the listed accounts from all
                your individual, current, Turkish Lira accounts opened in your name. Transfers made
                from accounts belonging to different persons will not be accepted.
              </p>
              <p>
                &bull; Transfers made using an ATM (with or without a card) will not be accepted as
                it is not possible to confirm the sender information.
              </p>
              <p>
                &bull; The amount you send will be automatically reflected in your account by the
                system after the checks, you do not need to make a separate notification.
              </p>
              <p>
                &bull; Since you have completed your identity verification process, you do not need
                to enter a fixed deposit code in the description section.
              </p>
            </div>
          </Box>
        </div> */}
      {/* </div> */}

      {/* <div className='flex flex-destroy flex-space-between'> */}
      {/* <div className='flex-1 box-right-padding'>
          <RecentActivity />
        </div> */}
      {/* <div className='flex-1'>
          <Box>
            <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
              <div className='flex flex-center flex-space-between'>
                <p>Important</p>
              </div>
            </div>
            <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
              <p>
                &bull; You can withdraw to all bank accounts opened in your name (individual,
                current, TL). Your transfer will not be made to a different person.
              </p>
              <p>&bull; Minimum withdrawal amount is 10 TL&apos;dir.</p>
              <p>&bull; A 3 TL transaction fee will be charged during the withdrawal process..</p>
              <p>
                &bull;When you place a withdrawal order, this amount will be deducted from your
                available balance.
              </p>
              <p>
                &bull; You can cancel orders that have not yet been executed. In this case, the
                order amount will be transferred to your available balance again.
              </p>
              <p>
                &bull; Withdrawal instructions given outside of banks' working hours are processed
                as soon as the banks start working..
              </p>
            </div>
          </Box>
        </div>
      </div> */}
    </SiteLayout>
  );
};

export default DashboardScreen;
