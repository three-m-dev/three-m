const CoreValues = () => {
  const values = [
    {
      name: 'Give a Shit',
      points: ['Take pride in what we do​', 'Transparency', 'Ethical Standards'],
    },
    {
      name: 'Create Solutions',
      points: ['Quality', 'Innovation', 'Continuous Improvement'],
    },
    {
      name: 'Be Versatile',
      points: ['Accountability', 'Sustainability', 'Community'],
    },
    {
      name: 'Have Fun',
      points: ['Collaboration', 'Respect', 'Diversity'],
    },
  ];

  return (
    <section className='py-8 md:py-16'>
      <div className='mx-auto max-w-screen-xl px-4'>
        <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Core Values</h2>
          <p className='font-light text-gray-500 sm:text-xl'>Explore the milestones that have shaped our journey.</p>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          {values.map((value, index) => (
            <div
              key={index}
              className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
              <h2 className='text-xl font-semibold mb-2'>{value.name}</h2>
              <ul className='text-gray-600'>
                {value.points.map((point, idx) => (
                  <li
                    key={idx}
                    className='mt-1'>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
