// components
import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';

const APIScreen: React.FC = () => {
  return (
    <MainLayout>
      <div className='content'>
        <Header title='API' />
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
            No API Yet
          </h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default APIScreen;
