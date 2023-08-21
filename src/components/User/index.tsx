import React from 'react';
import Flexbox from '../Layout/Flex';
import { Notify } from '../Icon';
import { Typography } from '../module/Typography';
import { UserButton } from '@clerk/nextjs';

const UserInfo = () => {
  return (
    <Flexbox className='gap-5'>
      <Notify />
      <UserButton afterSignOutUrl='/' />
      <div className='text-sm w-[170px]'>
        <Typography className='font-medium'>Hankin Maru</Typography>
        <Typography className='text-gray-500'>Products Managers</Typography>
      </div>
    </Flexbox>
  );
};

export default UserInfo;
