import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflow = !isMobileNavOpen ? 'hidden' : '';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <nav className='bg-white fixed w-full top-0 start-0 border-b border-gray-200 shadow-md z-30'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img
              src='/images/three-m-logo-with-text.png'
              className='h-10'
              alt='Three M Logo'
            />
          </Link>
          <div className='flex gap-8'>
            <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
              <Link
                to='/contact'
                className='text-white bg-primary hover:bg-secondary focus:outline-none rounded px-4 py-2 text-center flex items-center uppercase font-semibold'>
                Contact
              </Link>
              <button
                data-collapse-toggle='navbar-sticky'
                type='button'
                onClick={toggleMobileNavbar}
                className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
                aria-controls='navbar-sticky'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 17 14'>
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 1h15M1 7h15M1 13h15'
                  />
                </svg>
              </button>
            </div>
            <div
              className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
              id='navbar-sticky'>
              <ul className='flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white uppercase'>
                <li>
                  <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'text-primary' : 'text-gray-400') + ''}
                    aria-current='page'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    className={({ isActive }) => (isActive ? 'text-primary' : 'text-gray-400') + ''}
                    aria-current='page'>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/services'
                    className={({ isActive }) => (isActive ? 'text-primary' : 'text-gray-400') + ''}
                    aria-current='page'>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/careers'
                    className={({ isActive }) => (isActive ? 'text-primary' : 'text-gray-400') + ''}
                    aria-current='page'>
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/bulletin'
                    className={({ isActive }) => (isActive ? 'text-primary' : 'text-gray-400') + ''}
                    aria-current='page'>
                    Bulletin
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isMobileNavOpen && <MobileMenu toggleMenu={toggleMobileNavbar} />}
    </>
  );
};

export default Navbar;
