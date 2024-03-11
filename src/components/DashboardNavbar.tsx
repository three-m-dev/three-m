import { useState } from 'react';

const DashboardNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className='antialiased'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <button
              id='toggleSidebar'
              aria-expanded='true'
              aria-controls='sidebar'
              className='hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700'>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 16 12'>
                {' '}
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h14M1 6h14M1 11h7'
                />{' '}
              </svg>
            </button>
            <button
              aria-expanded='true'
              aria-controls='sidebar'
              className='p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              <svg
                className='w-[18px] h-[18px]'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
              <span className='sr-only'>Toggle sidebar</span>
            </button>
            <div className='flex mr-4'>
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Trifecta</span>
            </div>
          </div>
          <div className='flex items-center lg:order-2'>
            <button
              type='button'
              className='flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
              id='user-menu-button'
              aria-expanded='false'
              data-dropdown-toggle='dropdown'
              onClick={toggleDropdown}>
              <span className='sr-only'>Open user menu</span>
              <img
                className='w-8 h-8 rounded-full'
                src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                alt='user photo'
              />
            </button>

            {dropdownOpen && (
              <div
                className='absolute top-10 right-0 z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
                id='dropdown'>
                <div className='py-3 px-4'>
                  <span className='block text-sm font-semibold text-gray-900 dark:text-white'>Neil sims</span>
                  <span className='block text-sm text-gray-500 truncate dark:text-gray-400'>name@flowbite.com</span>
                </div>
                <ul
                  className='py-1 text-gray-500 dark:text-gray-400'
                  aria-labelledby='dropdown'>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white'>
                      My profile
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white'>
                      Account settings
                    </a>
                  </li>
                </ul>
                <ul
                  className='py-1 text-gray-500 dark:text-gray-400'
                  aria-labelledby='dropdown'>
                  <li>
                    <a
                      href='#'
                      className='block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
