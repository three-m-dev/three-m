import { BlogCTA, Customers, Footer, Hero, Navbar, NewsletterSignup } from '../components';
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
        <Footer />
      </div>
    </>
  );
};

export default Home;
