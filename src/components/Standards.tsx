const Standards = () => {
  return (
    <section className='bg-white antialiased'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl'>
            Our Commitment
          </h2>
          <p className='mt-4 text-base font-normal text-gray-500 sm:text-xl'>
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>

        <div className='grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold leading-tight text-gray-900'>Quality</h3>
            <p className='text-lg font-normal text-gray-500'>
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl font-bold leading-tight text-gray-900'>Efficiency</h3>
            <p className='text-lg font-normal text-gray-500'>
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
          </div>

          <div className='space-y-4'>
            <h3 className='text-2xl font-bold leading-tight text-gray-900'>Delivery</h3>
            <p className='text-lg font-normal text-gray-500'>
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;
