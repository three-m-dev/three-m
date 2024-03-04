import { Link } from 'react-router-dom';

const ImageMenu = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row'>
      <Link
        to='/services'
        className='block w-full md:w-1/3 aspect-video'>
        <div
          className='w-full h-full bg-cover bg-center flex justify-center items-center bg-red-50 relative'
          style={{
            backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/06/26/65/92/1000_F_626659219_5AQy73NrVlPThEG1sdCfYNgiU9vB785Z.jpg')`,
          }}>
          <div className='absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
            <span className='text-white text-3xl sm:text-5xl uppercase font-bebas tracking-wider'>
              Services
            </span>
          </div>
        </div>
      </Link>
      <Link
        to='/careers'
        className='block w-full md:w-1/3 aspect-video'>
        <div
          className='w-full h-full bg-cover bg-center flex justify-center items-center relative'
          style={{ backgroundImage: `url('/images/jose.jpg')` }}>
          <div className='absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
            <span className='text-white text-3xl sm:text-5xl uppercase font-bebas tracking-wider'>
              Careers
            </span>
          </div>
        </div>
      </Link>
      <Link
        to='/contact'
        className='block w-full md:w-1/3 aspect-video'>
        <div
          className='w-full h-full bg-cover bg-center flex justify-center items-center relative'
          style={{ backgroundImage: `url('/images/three-m-building.jpg')` }}>
          <div className='absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
            <span className='text-white text-3xl sm:text-5xl uppercase font-bebas tracking-wider'>
              Contact
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageMenu;
