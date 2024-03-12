import { Footer, Banner, Navbar, Stats, CoreValues, History } from '../components';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Banner />
        <Stats />
        <CoreValues />
        <History />
        <Footer />
      </div>
    </>
  );
};

export default About;
