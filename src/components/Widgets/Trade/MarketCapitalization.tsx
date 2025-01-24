const MarketCapitalization: React.FC = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {[...Array(3)].map((_, index) => (
        <div key={index} className='p-4 bg-white rounded-2xl shadow-lg text-center'>
          <h3 className='text-xl font-bold'>Market Cap</h3>
          <p className='text-3xl font-semibold'>$1.2T</p>
          <p className='text-sm text-gray-500'>Updated a few seconds ago</p>
        </div>
      ))}
    </div>
  );
};
export default MarketCapitalization;
