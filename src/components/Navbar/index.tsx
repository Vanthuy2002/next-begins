'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Typography } from '../module/Typography';
import { SearchIcons } from '../Icon';
import Flexbox from '../Layout/Flex';
import UserInfo from '../User';
import { UserButton, useAuth } from '@clerk/nextjs';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { userId } = useAuth();
  const router = useRouter();
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
      {userId ? (
        <UserInfo />
      ) : (
        <Button onClick={() => router.push('/sign-in')} variant='primary'>
          Get Started
        </Button>
      )}
    </header>
  );
};

export default Navbar;
