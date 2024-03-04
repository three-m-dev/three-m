import { Link } from 'react-router-dom';

const ImageMenu = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row'>
      <Link
        to='/services'
        className='block w-full md:w-1/3 aspect-video'>
        <div
          className='w-full h-full bg-cover bg-center flex justify-center items-center bg-red-50'
          style={{
            backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/06/26/65/92/1000_F_626659219_5AQy73NrVlPThEG1sdCfYNgiU9vB785Z.jpg')`,
          }}>
          <span className='text-white text-2xl sm:text-4xl font-bold'>Services</span>
        </div>
      </Link>
      <Link
        to='/careers'
        className='block w-full md:w-1/3 aspect-video'>
        <div
          className='w-full h-full bg-cover bg-center flex justify-center items-center'
          style={{ backgroundImage: `url('/images/jose.jpg')` }}>
          <span className='text-white text-2xl sm:text-4xl font-bold'>Careers</span>
        </div>
      </Link>
      <Link
        to='/contact'
        className='block w-full md:w-1/3 aspect-video'>
        <div
          className='w-full h-full bg-cover bg-center flex justify-center items-center'
          style={{ backgroundImage: `url('/images/three-m-building.jpg')` }}>
          <span className='text-white text-2xl sm:text-4xl font-bold'>Contact</span>
        </div>
      </Link>
    </div>
  );
};

export default ImageMenu;
