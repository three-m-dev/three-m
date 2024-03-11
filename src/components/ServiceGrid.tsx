import { Card } from '.';

const ServiceGrid = () => {
  const services = [
    {
      title: 'Machining Centers',
      description: '',
      path: '/services/machining-centers',
      imageOne: 'https://www.southernfabsales.com/hubfs/Haas%20VF-3%20Vertical%20Machining%20Center.jpg#keepProtocol',
      imageTwo:
        'https://www.trade-used-machines.com/wp-content/uploads/2017/06/Used-Mitsubishi-MV-70E-FM-vertical-machining-center-M1701351712-1.jpg',
    },
    {
      title: 'Vertical Turning',
      description: '',
      path: '/services/vertical-turning',
      imageOne: 'https://cdn.emag.com/fileadmin/_processed_/8/b/csm_B729_vertical_turning_header_54f3f0f50b.jpg',
      imageTwo: 'https://epictool.ca/wp-content/uploads/2021/03/AdobeStock_270864540.jpeg',
    },
    {
      title: 'Horizontal Turning',
      description: '',
      path: '/services/horizontal-turning',
      imageOne:
        'https://cdn.thomasnet.com/insights-images/embedded-images/995dbbb4-8673-4b23-aa7f-dadb502d6463/46a74a51-dd51-4254-b28e-378e65cbbd0d/FullHD/A-horizontal-CNC-milling-machine-performing-a-milling-operation-on-a-metal-part.jpg',
      imageTwo: 'https://www.forkardt.com/wp-content/uploads/Forkardt_Service-500x500_3-465x465.jpg',
    },
    {
      title: 'Grinding',
      description: '',
      path: '/services/grinding',
      imageOne: 'https://www.hindustanabrasives.com/wp-content/uploads/2023/01/what-is-precision-grinding-types.webp',
      imageTwo: 'https://www.etechtw.com/images/news/cnc-internal-grinding-machine.jpg',
    },
    {
      title: 'Inspection',
      description: '',
      path: '/services/inspection',
      imageOne: 'https://www.pretool.com/uploads/3/7/8/6/37861209/header_images/1687817843.jpg',
      imageTwo: 'https://www.forkardt.com/wp-content/uploads/Forkardt_Service-500x500_3-465x465.jpg',
    },
    {
      title: 'Assembly',
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
          {services.map((service) => (
            <Card
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
