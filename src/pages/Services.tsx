import { FAQs, Footer, Navbar, Standards } from '../components';
import ServiceGrid from '../components/ServiceGrid';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <ServiceGrid />
        <Standards />
        <FAQs />
        <Footer />
      </div>
    </>
  );
};

export default Services;
