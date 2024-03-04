const Stats = () => {
  return (
    <section className='bg-primary'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:px-6'>
        <dl className='grid max-w-screen-lg mx-auto text-white sm:grid-cols-3'>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-4xl font-extrabold'>50+</dt>
            <dd className='font-light text-white'>Years of Business</dd>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-4xl font-extrabold'>5000+</dt>
            <dd className='font-light text-white'>Projects Completed</dd>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <dt className='mb-2 text-3xl md:text-4xl font-extrabold'>25+</dt>
            <dd className='font-light text-white'>Industries Served</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Stats;
