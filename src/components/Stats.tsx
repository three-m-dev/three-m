const Stats = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
        <dl className='grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white'>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-4xl font-extrabold'>50+</dt>
            <dd className='font-light text-gray-500 dark:text-gray-400'>Years of Business</dd>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-4xl font-extrabold'>5000+</dt>
            <dd className='font-light text-gray-500 dark:text-gray-400'>Projects Completed</dd>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-4xl font-extrabold'>25+</dt>
            <dd className='font-light text-gray-500 dark:text-gray-400'>Industries Served</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Stats;
