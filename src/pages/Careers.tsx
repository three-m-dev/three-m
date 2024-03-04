/* eslint-disable */
import { useEffect } from 'react';
import { CareerList, Footer, Navbar } from '../components';
import { useGetCareers } from '../hooks/useGetCareers';

const Careers = () => {
  const { getCareers, careers, error } = useGetCareers();

  useEffect(() => {
    getCareers();
  }, []);

  if (error) {
    console.log(error);
  }

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
