const Standards = () => {
  return (
    <section className='bg-white antialiased'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16'>
        <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Our Commitment</h2>
          <p className='font-light text-gray-500 sm:text-xl'>Dedicated to excellence, every step of the way.</p>
        </div>

        <div className='grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='space-y-4'>
            <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Quality</h3>
            <p className='text-lg font-normal text-gray-500'>
              Delivering products that are both visually flawless and functionally impeccable. Excellence in every
              detail.
            </p>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Efficiency</h3>
            <p className='text-lg font-normal text-gray-500'>
              Prioritizing right-first-time processes. Leveraging technology and training for cost-effective solutions.
            </p>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Delivery</h3>
            <p className='text-lg font-normal text-gray-500'>
              Meeting or beating deadlines, ensuring products reach customers promptly and as expected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;
