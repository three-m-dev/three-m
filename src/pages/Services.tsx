import { Footer, Navbar } from '../components';
import ServiceGrid from '../components/ServiceGrid';

const questions = [
  {
    question: 'What materials can you machine?',
    answer: `We can machine a wide range of materials, including aluminum, steel, stainless steel, brass, copper, titanium, and various plastics. If you have a specific material in mind, please contact us to discuss its machinability.`,
  },
  {
    question: 'Do you offer engineering support for part design?',
    answer: `Yes, we offer engineering support services to help optimize your designs for manufacturability and cost-effectiveness. Our team can assist with material selection, tolerance analysis, and design for manufacturing (DFM) advice.`,
  },
  {
    question: 'Can you handle both small and large volume production?',
    answer: `Yes, we are equipped to handle both small batch productions for prototypes and large volume runs for mass production, ensuring high precision and quality in every piece.`,
  },
  {
    question: 'Can you provide surface finishing services?',
    answer: ` Absolutely, we offer a variety of surface finishing options, including anodizing, plating, powder coating, and polishing, to improve the appearance and performance of your parts.`,
  },
  {
    question: 'How do you ensure quality in your machining processes?',
    answer: `Our quality assurance process includes rigorous inspections at multiple stages of production. We use advanced measuring tools and techniques to ensure that every part meets the specified dimensions and tolerances.`,
  },
  {
    question: 'What file formats do you accept for CNC machining orders?',
    answer: ` We accept a wide range of file formats, including DWG, DXF, IGES, STEP, and SolidWorks files. If you have a different format, please reach out to us to discuss compatibility.`,
  },
  {
    question: 'What is the typical lead time for a machining project?',
    answer: `  Lead times vary based on the complexity of the project and the current workload. However, we strive to provide quick turnarounds and will work with you to meet your deadlines. Please contact us for an accurate estimate.`,
  },
  {
    question: 'How do you handle confidential designs and projects?',
    answer: `We take confidentiality seriously and are committed to protecting your intellectual property. We can sign non-disclosure agreements (NDAs) upon request and ensure that your designs and projects are handled with the utmost discretion.`,
  },
];

const Services = () => {
  let even: { question: string; answer: string }[] = [];
  let odd: { question: string; answer: string }[] = [];

  questions.map((question, index) => {
    if (index % 2) {
      even.push(question);
    } else {
      odd.push(question);
    }
  });

  return (
    <>
      <Navbar />

      <div className='mt-16'>
        <ServiceGrid />

        {/* Quality Policy */}
        <section className='bg-white'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16'>
            <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center'>
              <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Our Commitment</h2>
              <p className='font-light text-gray-500 sm:text-xl'>Dedicated to excellence, every step of the way.</p>
            </div>

            <div className='grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='space-y-4'>
                <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Quality</h3>
                <p className='text-lg font-normal text-gray-500'>
                  Delivering products that are both visually flawless and functionally impeccable. Excellence in every
                  detail.
                </p>
              </div>

              <div className='space-y-4'>
                <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Efficiency</h3>
                <p className='text-lg font-normal text-gray-500'>
                  Prioritizing right-first-time processes. Leveraging technology and training for cost-effective
                  solutions.
                </p>
              </div>

              <div className='space-y-4'>
                <h3 className='text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider'>Delivery</h3>
                <p className='text-lg font-normal text-gray-500'>
                  Meeting or beating deadlines, ensuring products reach customers promptly and as expected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className='bg-white'>
          <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
            <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>
              Frequently asked questions
            </h2>
            <div className='grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2'>
              <div>
                {odd.map((question) => (
                  <div className='mb-10'>
                    <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900'>
                      <svg
                        className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                          clipRule='evenodd'></path>
                      </svg>
                      {question.question}
                    </h3>
                    <p className='text-gray-500'>{question.answer}</p>
                  </div>
                ))}
              </div>

              <div>
                {even.map((question) => (
                  <div className='mb-10'>
                    <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900'>
                      <svg
                        className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                          clipRule='evenodd'></path>
                      </svg>
                      {question.question}
                    </h3>
                    <p className='text-gray-500'>{question.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
