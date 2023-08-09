import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Typography } from '../module/Typography';
import { SearchIcons } from '../Icon';
import Flexbox from '../Layout/Flex';
import UserInfo from '../User';

const Navbar = () => {
  return (
    <header className='flex items-center justify-between px-5 py-4'>
      <Flexbox className='gap-[82px]'>
        <Link href='/' className='flex items-center gap-3'>
          <Image width={40} height={37} src='/Logo.svg' alt='Yariga' />
          <Typography as='h1' className='text-primary font-bold text-[25px]'>
            Yariga
          </Typography>
        </Link>
        <Flexbox className='p-[10px] rounded-md bg-grayF4 flex-[0_1_400px] gap-3'>
          <SearchIcons />
          <input
            type='text'
            className='w-full text-sm bg-transparent border-none outline-none'
            placeholder='Search something...'
          />
        </Flexbox>
      </Flexbox>
      <UserInfo></UserInfo>
    </header>
  );
};

export default Navbar;
