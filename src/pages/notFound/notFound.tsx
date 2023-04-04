import notFound from 'assets/images/etc/not-found.png';

const NotFound = () => {
  return (
    <div className='container'>
      <div className='d-center py-20 py-md-0'>
        <img src={notFound} alt='notFound' width={'100%'} />
      </div>
    </div>
  );
};

export default NotFound;
