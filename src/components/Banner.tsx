const Banner = () => {
  return (
    <section className='bg-white mt-16'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <a
          href='#'
          className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full'
          role='alert'>
          <span className='text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3'>New</span>{' '}
          <span className='text-sm font-medium'>Take a tour of our shop!</span>
          <svg
            className='ml-2 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clip-rule='evenodd'></path>
          </svg>
        </a>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
          Our Journey in Precision
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48'>
          Discover the passion and precision behind our journey to becoming leaders in CNC machining excellence.
        </p>
      </div>
    </section>
  );
};

export default Banner;
