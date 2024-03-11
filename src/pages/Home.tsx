import { BlogCTA, Customers, Footer, Hero, ImageMenu, Navbar, NewsletterForm } from '../components';
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
        <NewsletterForm />
        <ImageMenu />
        <Footer />
      </div>
    </>
  );
};

export default Home;
