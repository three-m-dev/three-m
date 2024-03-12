import { BlogGrid, Footer, Navbar } from '../components';

const Blog = () => {
  return (
    <>
      <Navbar />

      <div className='mt-16'>
        <BlogGrid />

        <Footer />
      </div>
    </>
  );
};

export default Blog;
