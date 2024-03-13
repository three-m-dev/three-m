import { useEffect, useState } from 'react';
import { Footer, Navbar } from '../components';

const values = [
  {
    title: 'Give a Shit',
    points: ['Take pride in what we do​', 'Ensure our own success by first striving to make others successful​'],
  },
  {
    title: 'Create Solutions',
    points: [
      'The world is a messy place ​',
      'Perfection is only a concept ​',
      'Its one thing to look pretty, its another to get the job done',
    ],
  },
  {
    title: 'Be Versatile',
    points: [
      'The world is always changing and so are we​',
      'Communicate to create more effective and productive relationships​',
    ],
  },
  {
    title: 'Have Fun',
    points: ['A smile goes a long way​', 'Don’t be serious, be sincere​', 'Enjoy coming to work every day!'],
  },
];

const events = [
  {
    date: '1971',
    title: `TESTING`,
    thumbnail: '/images/0.png',
    content: `
Three M Tool & Machine was established in Detroit's Brightmoor neighborhood by two machinists and a salesman, all with "M" last names. Starting with one turning machine, they thrived in the declining "Tool & Die Trade." Co-founder San Miyamoto's attempt to join the Detroit Police, thwarted by height requirements, symbolized their perseverance. This spirit of resilience and creativity fueled the company's growth from its modest start.`,
  },
  {
    date: '1974',
    title: 'Milestone: Unveiling the Mill',
    thumbnail: '/images/31.png',
    content: `The company celebrated a pivotal moment with the acquisition of a Devlieg 3B, a testament to enduring craftsmanship dating back to the '30s or '40s. This first boring mill not only marked a significant expansion of our capabilities but also connected us to a legacy of precision engineering, standing as a centerpiece of innovation and history in our facility for decades.`,
  },
  {
    date: '1977',
    title: `Richardson Rises`,
    thumbnail: '/images/25.png',
    content: `Three M Tool & Machine, spurred by growth and partnerships with GM, relocated to a new headquarters on Richardson Rd, securing our long-term base. This move, reflecting our dynamic expansion, has seen us evolve into a key supplier across diverse sectors, from oil field to pharmaceuticals.`,
  },
  {
    date: '1990',
    title: 'Ultra Grip is Born',
    thumbnail: '/images/33.png',
    content: `Born from innovation and collaboration, Ultra Grip emerged under the leadership of Ken Cross and Chief Engineer Don Wrobel. Specializing in work-holding solutions, our journey began with enhanced 'ball chucks' and a talented team in Traverse City. Transitioning to 'International' reflects our global outlook and commitment to excellence.`,
  },
  {
    date: '1992',
    title: 'Steering Saginaw Forward',
    thumbnail: '/images/27.png',
    content: `Chosen as the sole supplier for Saginaw Steering Gear, Three M spearheaded a transformative project. Implementing revolutionary hard machining techniques, we not only drove significant cost savings but also ensured sustained profitability, marking this venture as one of our most lucrative endeavors to date.`,
  },
  {
    date: '1997',
    title: `Ahead of Its Time: Plymouth Prowler`,
    thumbnail: '/images/28.png',
    content: `When Alcoa's machining plan faltered, Three M stepped in on an emergency basis to machine frames. In just 14 weeks, we designed and constructed $1 million worth of automated fixtures. Our dedication ensured the timely production of frames for launch and sustained manufacturing for the subsequent 18 months, showcasing our commitment to excellence in machining.`,
  },
  // {
  //   date: '2001',
  //   title: 'Navigating the Economic Tempest',
  //   thumbnail: '',
  //   content: '',
  // },
  {
    date: '2002',
    title: 'Energizing the Future',
    thumbnail: '/images/29.png',
    content: `Initiating a strategic cost-cutting drive, our company renegotiated contracts and terminated unnecessary services, striving to balance the books. These efforts sustained us until the pivotal acquisition of Dresser Rand in the gas compression sector. Throughout the decade, we expanded our foothold in the industry, securing notable clients such as GE and Truerock. Today, these partnerships remain integral to our thriving business.`,
  },
  {
    date: '2006',
    title: 'The Wind Energy Surge',
    thumbnail: '/images/23.png',
    content: `Embracing the momentum of the wind energy boom, we ventured into the sector through Clipper Windpower, a pivotal move that underscored our commitment to innovation and quality. Recognized for our superior craftsmanship, we secured a significant contract to supply gearbox machining and other components, leading to the establishment of our state-of-the-art facility in Wixom. This milestone marked a new chapter in our journey, fueled by the promise of growth and advancement within the renewable energy industry.`,
  },
  {
    date: '2015',
    title: 'Legacy of a Visionary',
    thumbnail: '/images/34.png',
    content: `Sharon Medwid's presence shaped our company profoundly. Her unwavering dedication and astute leadership were pivotal during trying times. After her unexpected passing, Mike, her husband and original founding member, took a step back. Concurrently, Sam, deeply committed to the family legacy, required time to transition into a leadership role. Sharon's enduring legacy serves as a beacon, inspiring us as we chart the course ahead.`,
  },
  {
    date: '2020',
    title: 'Dawning of a New Era',
    thumbnail: '',
    content: `In the midst of global upheaval, Sam, continuing his mother Sharon's legacy, took the reins amidst the pandemic and the "great resignation." With a new leadership team in place, we navigated through uncertainty, driven by our mission to revitalize the company. Adopting EOS provided clarity, defining our core values and mission to uphold American manufacturing traditions. Despite challenges, our resolve remains unshaken, heralding a new era defined by resilience and unwavering dedication.`,
  },
];

const About = () => {
  const [yearsInBusiness, setYearsInBusiness] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [industriesServed, setIndustriesServed] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);

  const animateValue = (target: number, setDisplayValue: React.Dispatch<React.SetStateAction<number>>) => {
    const duration = 1000;
    let startValue = 0;
    const stepTime = 20;
    const steps = duration / stepTime;
    const valueIncrement = target / steps;
    let currentValue = startValue;

    const intervalId = setInterval(() => {
      currentValue += valueIncrement;
      if (currentValue >= target) {
        clearInterval(intervalId);
        currentValue = target;
      }
      setDisplayValue(Math.floor(currentValue));
    }, stepTime);
  };

  useEffect(() => {
    animateValue(50, setYearsInBusiness);
    animateValue(5000, setProjectsCompleted);
    animateValue(25, setIndustriesServed);
  }, []);

  const openEvent = (index: number) => {
    setActiveEvent(index);

    setTimeout(() => {
      const targetDiv = document.getElementById(`event-content-${index}`);
      if (targetDiv) {
        targetDiv.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 0);
  };

  return (
    <>
      <Navbar />

      <div className='mt-16'>
        {/* Banner */}
        <section className='bg-white mt-16 h-[30vh] md:h-[65vh] relative'>
          <img
            src='/images/family-photo.jpg'
            className='absolute left-0 w-full h-full object-cover object-top z-0'
          />
          <div className='absolute z-10 h-full w-full bg-black opacity-0'></div>
        </section>

        {/* Stats */}
        <section className='bg-primary'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:px-6'>
            <dl className='grid max-w-screen-lg mx-auto text-white sm:grid-cols-3'>
              <div className='flex flex-col items-center justify-center'>
                <dt className='mb-2 text-3xl text-white sm:text-5xl font-bebas tracking-wider'>{yearsInBusiness}+</dt>
                <dd className='text-white mb-2 sm:mb-0'>Years In Business</dd>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <dt className='mb-2 text-3xl text-white sm:text-5xl font-bebas tracking-wider'>{projectsCompleted}+</dt>
                <dd className='text-white mb-2 sm:mb-0'>Projects Completed</dd>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <dt className='mb-2 text-3xl text-white sm:text-5xl font-bebas tracking-wider'>{industriesServed}+</dt>
                <dd className='text-white mb-2 sm:mb-0'>Industries Served</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Core Values */}
        <section className='py-8 md:py-16'>
          <div className='mx-auto max-w-screen-xl px-4'>
            <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center'>
              <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Core Values</h2>
              <p className='font-light text-gray-500 sm:text-xl'>The underlying values of our organization.</p>
            </div>

            <div className='space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0'>
              {values.map((value, index) => (
                <div
                  key={index}
                  className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-md xl:p-8'>
                  <h3 className='mb-4 text-3xl font-bebas '>{value.title}</h3>
                  <p className='font-light text-gray-500 sm:text-lg'></p>
                  <ul
                    role='list'
                    className='space-y-4 text-left flex flex-col items-center'>
                    {value.points.map((point, index) => (
                      <li
                        key={index}
                        className='flex r space-x-3 text-center'>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className='bg-white'>
          <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
            <div className='font-light text-gray-500 sm:text-lg'>
              <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider text-center lg:text-start'>
                Mission Statement
              </h2>
              <p className='mb-4 text-center lg:text-start'>
                Improving lives by honoring, strengthening and advancing the great tradition of American manufacturing.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8'>
              <img
                className='w-full h-96 object-cover object-center rounded-md shadow-md'
                src='/images/32.png'
                alt='office content 1'
              />
              <img
                className='mt-4 w-full h-96 object-cover lg:mt-10 rounded-md shadow-md'
                src='https://www.shutterstock.com/shutterstock/photos/1432126148/display_1500/stock-photo-milling-tools-in-cnc-machine-chop-1432126148.jpg'
                alt='office content 2'
              />
            </div>
          </div>
        </section>

        {/* History */}
        <section className='py-8 md:py-16'>
          <div className='mx-auto max-w-screen-lg px-4'>
            <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center'>
              <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Company History</h2>
              <p className='font-light text-gray-500 sm:text-xl'>
                Explore the milestones that have shaped our journey.
              </p>
            </div>
            <div>
              {events.map((event, index) => (
                <div key={index}>
                  <h2>
                    <button
                      type='button'
                      onClick={() => openEvent(index)}
                      className='flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3'>
                      <span>
                        {event.date} - {event.title}
                      </span>
                      <svg
                        className={`w-3 h-3 shrink-0 ` + (activeEvent !== index && 'rotate-180')}
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 10 6'>
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5 5 1 1 5'
                        />
                      </svg>
                    </button>
                  </h2>
                  <div className={activeEvent === index ? 'block' : 'hidden'}>
                    <div
                      id={`event-content-${index}`}
                      className={`py-6 border-b border-gray-200 flex flex-col sm:flex-row ${
                        index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                      } gap-6`}>
                      <div className='flex flex-col w-full sm:w-1/2'>
                        <h3 className='mb-4 text-3xl text-gray-900 sm:text-4xl font-bebas tracking-wider text-center'>
                          {event.title}
                        </h3>
                        <p className='indent-8 mb-2 text-gray-500'>{event.content}</p>
                      </div>
                      <div className='w-full sm:w-1/2 flex justify-center items-center'>
                        <img
                          src={event.thumbnail}
                          className='max-w-full max-h-96 object-contain'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
