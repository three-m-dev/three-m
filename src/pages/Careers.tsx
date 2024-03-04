/* eslint-disable */
import { CareerList, Footer, Navbar } from '../components';

const Careers = () => {
  const careers = [];

  return (
    <>
      <div className='min-h-[70vh]'>
        <Navbar />
        <div className='mt-16'>
          <CareerList careerListings={careers} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Careers;
