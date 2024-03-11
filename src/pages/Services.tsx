import { FAQs, Footer, Navbar, ServiceDetails, Standards } from '../components';
import ServiceGrid from '../components/ServiceGrid';
import { Routes, Route } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          index
          element={
            <div className='mt-16'>
              <ServiceGrid />
              <Standards />
              <FAQs />
            </div>
          }
        />
        <Route
          path=':careerId'
          element={<ServiceDetails />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Services;
