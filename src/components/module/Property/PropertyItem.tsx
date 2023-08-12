import Image from 'next/image';
import React from 'react';
import { Typography } from '../Typography';
import Flexbox from '@/components/Layout/Flex';
import { StarIcon } from '@/components/Icon';

interface Child {
  children?: React.ReactNode;
  item: IApiTypes;
}

const PropertyItem = ({ children, item }: Child) => {
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
          className='inline-block p-2 mb-3 text-sm font-semibold text-blue-700 bg-blue-400 rounded-md'
        >
          {item.price}$
        </Typography>
        <Typography className='mb-2 font-semibold' as='h3'>
          {item.title}
        </Typography>

        <Flexbox className='gap-1'>
          <span>
            <StarIcon></StarIcon>
          </span>
          <Typography className='text-gray-400' as='h3'>
            {item.description}
          </Typography>
        </Flexbox>
      </div>
    </div>
  );
};

export default PropertyItem;
