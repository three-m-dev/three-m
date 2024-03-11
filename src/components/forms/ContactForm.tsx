import { useState } from 'react';

const ContactForm = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const name = event.target.id;

    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formFields);
  };

  return (
    <section className='bg-white mt-16'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl'>
          Reach out for solutions and support.
        </p>
        <form
          onSubmit={handleSubmit}
          className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              onChange={handleChange}
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
              placeholder='name@company.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-gray-900'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              onChange={handleChange}
              className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900'>
              Your message
            </label>
            <textarea
              id='message'
              rows={6}
              onChange={handleChange}
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              placeholder='Leave a comment...'></textarea>
          </div>
          <button
            type='submit'
            className='text-white bg-primary hover:bg-white hover:text-primary border-2 border-primary transition ease-in-out duration-300 focus:outline-none rounded px-3 py-1.5 text-center flex items-center uppercase font-semibold'>
            Send message
          </button>
        </form>
      </div>
      <div className=' mx-auto max-w-screen-xl mb-16'>
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className='flex w-full flex-col items-center px-4 md:px-8'>
            <div className='mb-4 rounded border-2 border-primary bg-white p-2 text-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
            </div>
            <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Email</h3>
            <div className='flex flex-col text-center font-medium text-gray-600 md:text-lg'>
              <p>sales@three-m.com</p>
            </div>
          </div>

          <div className='flex w-full flex-col items-center px-4 md:px-8'>
            <div className='mb-4 rounded border-2 border-primary bg-white p-2 text-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>
            </div>
            <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Location</h3>
            <div className='flex flex-col text-center font-medium text-gray-600 md:text-lg'>
              <p>8155 Richardson Rd</p>
              <p>Commerce Charter Township</p>
              <p>Michigan 48390</p>
            </div>
          </div>

          <div className='flex w-full flex-col items-center px-4 md:px-8'>
            <div className='mb-4 rounded border-2 border-primary bg-white p-2 text-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>
            </div>
            <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Phone</h3>
            <div className='flex flex-col text-center font-medium text-gray-600 md:text-lg'>
              <p>+1 (248) 363 1555</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
