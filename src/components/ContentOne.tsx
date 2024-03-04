const ContentOne = () => {
  return (
    <section className='bg-white'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light text-gray-500 sm:text-lg'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>
            Innovative Precision, Unparalleled Results
          </h2>
          <p className='mb-4'>
            Dive into the world of precision engineering, where our expertise spans across vertical and horizontal
            turning, and meticulous grinding. Each service is a testament to our commitment to precision and quality.
          </p>
          <p>
            From the initial design to the final assembly, we ensure that every detail is perfected. Our approach
            combines innovation with craftsmanship, bringing your ideas to life with unmatched efficiency and precision.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <img
            className='w-full rounded-lg h-96 object-cover'
            src='https://media.istockphoto.com/id/512725838/photo/metalworking-cnc-milling-machine.jpg?s=612x612&w=0&k=20&c=HHuxSAhsxlNCFbAVAVQVpizMdSIdZXbLHh1CIxR-A0c='
            alt='office content 1'
          />
          <img
            className='mt-4 w-full h-96 object-cover lg:mt-10 rounded-lg'
            src='https://www.shutterstock.com/shutterstock/photos/1432126148/display_1500/stock-photo-milling-tools-in-cnc-machine-chop-1432126148.jpg'
            alt='office content 2'
          />
        </div>
      </div>
    </section>
  );
};

export default ContentOne;
