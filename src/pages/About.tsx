import { Footer, Banner, Navbar, Stats, Timeline, Team, CoreValues } from '../components';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Banner />
        <Stats />
        <CoreValues />
        <Timeline />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default About;
