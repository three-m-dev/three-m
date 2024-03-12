import { Card } from '.';

const ServiceGrid = () => {
  const services = [
    {
      title: 'Machining Centers',
      description: '',
      path: '/services/machining-centers',
      imageOne: '/images/13.png',
      imageTwo: '/images/15.png',
    },
    {
      title: 'Vertical Turning',
      description: '',
      path: '/services/vertical-turning',
      imageOne: '/images/17.png',
      imageTwo: '/images/18.png',
    },
    {
      title: 'Horizontal Turning',
      description: '',
      path: '/services/horizontal-turning',
      imageOne: '/images/7.png',
      imageTwo: '/images/8.png',
    },
    {
      title: 'Grinding',
      description: '',
      path: '/services/grinding',
      imageOne: '/images/20.png',
      imageTwo: '/images/11.png',
    },
    {
      title: 'Inspection',
      description: '',
      path: '/services/inspection',
      imageOne: '/images/14.png',
      imageTwo: '/images/16.png',
    },
    {
      title: 'Bench & Assembly',
      description: '',
      path: '/services/assembly',
      imageOne:
        'https://e7x3x7m2.rocketcdn.me/wp-content/uploads/2018/09/electronics-tech-lab-workers-industrial-racks.png',
      imageTwo: 'https://www.assemblymag.com/ext/resources/Issues/2018/May/Workstations/asb0518parts1.jpg',
    },
  ];

  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Services We Offer</h2>
          <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>
            Discover our services designed for your success
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              path={service.path}
              imageOne={service.imageOne}
              imageTwo={service.imageTwo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
