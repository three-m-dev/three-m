import { useEffect } from 'react';
import { CareerDetails, CareerList, Footer, Navbar, ResumeForm } from '../components';
import { useGetCareers } from '../hooks/useGetCareers';
import { Route, Routes, useParams } from 'react-router';
import { ICareer } from '../interfaces';

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
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <CareerList careerListings={careers} />
              <ResumeForm />
            </>
          }
        />
        <Route
          path='/:careerId'
          element={<CareerDetailsWrapper careerListings={careers} />}
        />

        {/* <Route
          path='/:careerId/apply'
          element={<CareerApplication careerListings={careers} />}
        /> */}
      </Routes>

      <Footer />
    </>
  );
};

interface CareerDetailsWrapperProps {
  careerListings: ICareer[];
}

const CareerDetailsWrapper = ({ careerListings }: CareerDetailsWrapperProps) => {
  const { careerId } = useParams<{ careerId: string }>();
  const selectedCareer = careerListings.find((listing) => listing.id === careerId);

  if (!selectedCareer) {
    return <div>Career not found.</div>;
  }

  return (
    <CareerDetails
      careerDetails={selectedCareer}
      careerListings={careerListings}
    />
  );
};

export default Careers;
