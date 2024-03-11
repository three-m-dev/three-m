import { Link } from 'react-router-dom';

type CardProps = {
  title: string;
  path: string;
  imageOne: string;
  imageTwo: string;
};

const Card = (props: CardProps) => {
  return (
    <Link
      to={props.path}
      className='group block overflow-hidden bg-gray-200 shadow-lg'>
      <div className='relative aspect-square flex items-center justify-center overflow-clip'>
        <img
          src={props.imageOne}
          alt=''
          className='absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0'
        />

        <img
          src={props.imageTwo}
          alt=''
          className='absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
        />

        <h3 className='text-white text-3xl sm:text-3xl uppercase font-bebas tracking-wider absolute text-center'>
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
