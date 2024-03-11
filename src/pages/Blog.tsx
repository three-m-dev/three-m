import { BlogGrid, Footer, Navbar, NewsletterForm } from '../components';

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <BlogGrid />
        <NewsletterForm />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
