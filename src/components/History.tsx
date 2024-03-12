import { useState } from 'react';

const History = () => {
  const events = [
    {
      date: '1971',
      title: 'Founded With A Vision',
      thumbnail: '',
      content: '',
    },
    {
      date: '1990',
      title: 'Ultra Grip Is Born',
      thumbnail: '',
      content: '',
    },
    {
      date: '2010',
      title: 'Focused On Innovation',
      thumbnail: '',
      content: '',
    },
    {
      date: '2020',
      title: 'The Next Generation',
      thumbnail: '',
      content: '',
    },
  ];

  const [activeEvent, setActiveEvent] = useState<number | null>(0);

  return (
    <section className='py-8 md:py-16'>
      <div className='mx-auto max-w-screen-xl px-4'>
        <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Company History</h2>
          <p className='font-light text-gray-500 sm:text-xl'>Explore the milestones that have shaped our journey.</p>
        </div>
        <div>
          {events.map((event, index) => (
            <div key={index}>
              <h2 id='accordion-flush-heading-1'>
                <button
                  type='button'
                  onClick={() => setActiveEvent(index)}
                  className='flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3'>
                  <span>
                    {event.date} - {event.title}
                  </span>
                  <svg
                    className='w-3 h-3 rotate-180 shrink-0'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'>
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 5 5 1 1 5'
                    />
                  </svg>
                </button>
              </h2>
              <div
                id='accordion-flush-body-1'
                className={activeEvent === index ? 'block' : 'hidden'}>
                <div className='py-5 border-b border-gray-200'>
                  <p className='mb-2 text-gray-500'>
                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
                    buttons, dropdowns, modals, navbars, and more.
                  </p>
                  <p className='text-gray-500'>
                    Check out this guide to learn how to{' '}
                    <a
                      href='/docs/getting-started/introduction/'
                      className='text-blue-600 hover:underline'>
                      get started
                    </a>{' '}
                    and start developing websites even faster with components on top of Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
