import { Footer, Banner, Navbar, Stats, Timeline } from '../components';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Banner />
        <Stats />
        <Timeline />
        <Footer />
      </div>
    </>
  );
};

export default About;
