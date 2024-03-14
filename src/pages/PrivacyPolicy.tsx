import { Footer, Navbar } from '../components';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      {/* Privacy Policy */}
      <section className='bg-white mt-16'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
          <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
            <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Privacy Policy</h2>
            <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>Last updated March 12, 2024</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
