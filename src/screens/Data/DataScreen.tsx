// components
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';

const DataScreen: React.FC = () => {
  return (
    <MainLayout>
      <div className='content'>
        <Header title='Data' />
        <div className='content-body' style={{ height: 'calc(100vh - 100px)' }}>
          <h1
            style={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            No Data Yet
          </h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default DataScreen;
