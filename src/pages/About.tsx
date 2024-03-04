import { Footer, Banner, Navbar, Stats, Timeline, Team } from '../components';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Banner />
        <Stats />
        <Timeline />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default About;
