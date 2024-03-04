import { useEffect, useState } from 'react';

const Stats = () => {
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

  const [yearsInBusiness, setYearsInBusiness] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [industriesServed, setIndustriesServed] = useState(0);

  useEffect(() => {
    animateValue(50, setYearsInBusiness);
    animateValue(5000, setProjectsCompleted);
    animateValue(25, setIndustriesServed);
  }, []);

  return (
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
  );
};

export default Stats;
