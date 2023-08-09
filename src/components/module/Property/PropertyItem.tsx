import Image from 'next/image';
import React from 'react';
import { Typography } from '../Typography';
import Flexbox from '@/components/Layout/Flex';
import { StarIcon } from '@/components/Icon';

interface Child {
  children?: React.ReactNode;
}

const PropertyItem = ({ children }: Child) => {
  return (
    <div className='flex gap-[10px]'>
      <div className='relative flex-shrink-0'>
        <Image
          alt='setup'
          width={`${200}`}
          height={125}
          className='object-cover rounded-md h-[125px]'
          src={'https://source.unsplash.com/random'}
        />
      </div>

      <div className='flex-1'>
        <Typography
          as='span'
          className='inline-block text-sm p-2 mb-3 rounded-md bg-blue-400 text-blue-700 font-semibold'
        >
          7400$
        </Typography>
        <Typography className='font-semibold mb-2' as='h3'>
          Metro Jakactar Hotel Intere
        </Typography>

        <Flexbox className='gap-1'>
          <span>
            <StarIcon></StarIcon>
          </span>
          <Typography className='text-gray-400' as='h3'>
            Lorem ipsum dolor sit, amet consectetur
          </Typography>
        </Flexbox>
      </div>
    </div>
  );
};

export default PropertyItem;
