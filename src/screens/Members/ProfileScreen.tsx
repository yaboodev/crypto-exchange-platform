// components
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import Limits from '../../components/Widgets/Limits/Limits';
import Profile from '../../components/Widgets/Profile/Profile';
import  TradeScreen from '../../screens/Trade/TradeScreen';
import RecentActivity from '../../components/Widgets/RecentActivity/RecentActivity';

const ProfileScreen: React.FC = () => (
  <SiteLayout>
    <Header icon='sort' title='Profile' />
    <div className='flex flex-destroy'>
      <div className='content-30 box-right-padding'>
        <Profile />
      </div>
      
    </div>

    {/* <div className='flex flex-space-between flex-destroy'>
      <div className='flex-1 box-right-padding'>
        <TradeScreen />
      </div> */}
      {/* <div className='flex-1'>
        <Limits />
      </div> */}
    {/* </div> */}
  </SiteLayout>
);

export default ProfileScreen;
