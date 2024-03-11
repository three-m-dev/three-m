import { ContactForm, Footer, Navbar } from '../components';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
