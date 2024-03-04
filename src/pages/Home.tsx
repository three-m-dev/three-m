import { BlogCTA, Customers, Footer, Hero, ImageMenu, Navbar, NewsletterSignup } from '../components';
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
        <Customers />
        <BlogCTA />
        <NewsletterSignup />
        <ImageMenu />
        <Footer />
      </div>
    </>
  );
};

export default Home;
