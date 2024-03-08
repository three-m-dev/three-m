import { useState } from 'react';
import { CareersTable, DashboardNavbar } from '../components';

const CareerManager = () => {
  const [activeTab, setActiveTab] = useState('details');

  const toggleTab = (event: React.MouseEvent<HTMLElement>) => {
    const tab = event.currentTarget.id;

    setActiveTab(tab);
  };

  return (
    <div className='flex flex-col h-screen'>
      <DashboardNavbar />
      <div className='flex-1 flex gap-4 p-4 bg-gray-100 overflow-hidden'>
        <div className='w-1/3 overflow-hidden'>
          <div className='h-full rounded-lg overflow-clip'>
            <CareersTable />
          </div>
        </div>
        <div className='w-2/3 flex overflow-hidden'>
          <div className='bg-white p-4 flex-1 sm:rounded-lg overflow-y-auto'>
            <div className='flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
              <div
                className='inline-flex flex-col w-full rounded-md shadow-sm md:w-auto md:flex-row'
                role='group'>
                <button
                  type='button'
                  id='details'
                  onClick={toggleTab}
                  className={
                    `px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-t-lg md:rounded-tr-none md:rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 ` +
                    (activeTab === 'details' ? 'bg-gray-100' : 'bg-white')
                  }>
                  Details
                </button>
                <button
                  type='button'
                  id='applicants'
                  onClick={toggleTab}
                  className={
                    `px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-b-lg md:rounded-bl-none md:rounded-r-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 ` +
                    (activeTab === 'applicants' ? 'bg-gray-50' : 'bg-white')
                  }>
                  Applicants
                </button>
              </div>

              <button
                id='actionsDropdownButton'
                data-dropdown-toggle='actionsDropdown'
                className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='-ml-1 mr-1.5 w-5 h-5'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                  />
                </svg>
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerManager;
