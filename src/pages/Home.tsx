import { BlogCTA, Footer, Hero, ImageMenu, Navbar } from '../components';
import ContentOne from '../components/ContentOne';
import ServicesOne from '../components/ServicesOne';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Hero />
        <ServicesOne />
        <ContentOne />
        <BlogCTA />
        <ImageMenu />
        <Footer />
      </div>
    </>
  );
};

export default Home;
