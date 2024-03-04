import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='p-4 bg-white sm:p-6'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link
              to='/'
              className='flex items-center'>
              <img
                src='/images/three-m-logo-with-text.png'
                className='mr-3 h-8'
                alt='FlowBite Logo'
              />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>Company</h2>
              <ul className='text-gray-600'>
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
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>Follow us</h2>
              <ul className='text-gray-600'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '>
                    Facebook
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://discord.gg/4eeurUVvTy'
                    className='hover:underline'>
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href='https://discord.gg/4eeurUVvTy'
                    className='hover:underline'>
                    Indeed
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase'>Legal</h2>
              <ul className='text-gray-600'>
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
                  <a
                    href='#'
                    className='hover:underline'>
                    ISO 9001
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center'>
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
