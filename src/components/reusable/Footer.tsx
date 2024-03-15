import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-4 px-4 lg:px-6 bg-primary'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link
              to='/'
              className='flex items-center bg-white p-2 pr-0 rounded justify-center md:justify-start'>
              <img
                src='/images/three-m-logo-with-text.png'
                className='mr-3 h-10'
                alt='Three M Logo'
              />
            </Link>
            <div className='text-gray-200 mt-2 flex flex-col gap-3'>
              <a href='mailto:sales@three-m.com'>sales@three-m.com</a>
              <a href='tel:2483631555'>(248) 636-1555</a>
              <a
                href='https://www.google.com/maps/place/Three+M+Tool+and+Machine,+Inc./@42.577088,-83.4467241,17z/data=!3m1!4b1!4m6!3m5!1s0x8824a4ea968cf125:0x8e4c1d7fddc834d6!8m2!3d42.5770841!4d-83.4441492!16s%2Fg%2F1tgdtrtz?entry=ttu'
                target='blank'>
                8155 Richardson Rd, Commerce Twp, MI, 48390
              </a>
            </div>
            {/* <Link to=''>
              <img src='/images/iso_9001_2015.png' className='h-20'></img>
            </Link> */}
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Company</h2>
              <ul className='text-gray-200'>
                <li className='mb-4'>
                  <Link
                    to='/about'
                    className='hover:underline'>
                    About
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/services'
                    className='hover:underline'>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to='/careers'
                    className='hover:underline'>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Follow us</h2>
              <ul className='text-gray-200'>
                <li className='mb-4'>
                  <Link
                    to='https://www.linkedin.com/company/three-m-tool-&-machine-inc'
                    className='hover:underline'>
                    Linkedin
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='https://www.indeed.com/cmp/Three-M-Tool-&-Machine'
                    target='blank'
                    className='hover:underline'>
                    Indeed
                  </Link>
                </li>
                <li>
                  <Link
                    to='https://www.facebook.com/threemtoolandmachineinc'
                    target='blank'
                    className='hover:underline '>
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>Legal</h2>
              <ul className='text-gray-200'>
                <li className='mb-4'>
                  <Link
                    to='/privacy-policy'
                    className='hover:underline'>
                    Privacy Policy
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='/terms-and-conditions'
                    className='hover:underline'>
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to='/iso-9001-2015-certificate-of-registration.pdf'
                    target='blank'
                    className='hover:underline'>
                    ISO 9001:2015
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-200 sm:text-center'>
            <Link to='/dashboard/login'>© </Link>
            {currentYear}{' '}
            <Link
              to='/'
              className='hover:underline'>
              Three M Tool & Machine™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
