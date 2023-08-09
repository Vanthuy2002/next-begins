import React from 'react';
import Flexbox from '../Layout/Flex';
import { Notify } from '../Icon';
import Image from 'next/image';
import { Typography } from '../module/Typography';

const UserInfo = () => {
  return (
    <Flexbox className='gap-5'>
      <Notify></Notify>
      <Flexbox className='gap-[10px]'>
        <Image
          src='/emi.jpg'
          alt='avatar'
          width={45}
          height={40}
          className='object-cover rounded-[50%] flex-shrink-0 h-11'
        />
        <div className='text-sm w-[170px]'>
          <Typography className='font-medium'>Hankin Maru</Typography>
          <Typography className='text-gray-500'>Products Managers</Typography>
        </div>
      </Flexbox>
    </Flexbox>
  );
};

export default UserInfo;
