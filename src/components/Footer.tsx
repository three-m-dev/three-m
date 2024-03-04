import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='p-4 bg-primary sm:p-6'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link
              to='/'
              className='flex items-center bg-white p-2 pr-0 rounded justify-center md:justify-start'>
              <img
                src='/images/three-m-logo-with-text.png'
                className='mr-3 h-10'
                alt='Three M Logo'
              />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Company</h2>
              <ul className='text-gray-200'>
                <li className='mb-4'>
                  <Link
                    to='/about'
                    className='hover:underline'>
                    About
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/services'
                    className='hover:underline'>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to='/careers'
                    className='hover:underline'>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Follow us</h2>
              <ul className='text-gray-200'>
                <li className='mb-4'>
                  <Link
                    to='https://www.facebook.com/threemtoolandmachineinc'
                    target='blank'
                    className='hover:underline '>
                    Facebook
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='https://www.linkedin.com/company/three-m-tool-&-machine-inc'
                    className='hover:underline'>
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    to='https://www.indeed.com/cmp/Three-M-Tool-&-Machine'
                    target='blank'
                    className='hover:underline'>
                    Indeed
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Legal</h2>
              <ul className='text-gray-200'>
                <li className='mb-4'>
                  <a
                    href='#'
                    className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='#'
                    className='hover:underline'>
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <Link
                    to='/iso-9001-2015-certificate-of-registration.pdf'
                    target='blank'
                    className='hover:underline'>
                    ISO 9001
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-200 sm:text-center'>
            <Link to='/dashboard/login'>© </Link>
            {currentYear}{' '}
            <Link
              to='/'
              className='hover:underline'>
              Three M Tool & Machine™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
