const Banner = () => {
  return (
    <section className='bg-white mt-16 h-[30vh] md:h-[65vh] relative'>
      <img
        src='/images/family-photo.jpg'
        className='absolute left-0 w-full h-full object-cover object-top z-0'
      />
      <div className='absolute z-10 h-full w-full bg-black opacity-0'></div>
    </section>
  );
};

export default Banner;
