'use client';
import React from 'react';
import Flexbox from '../Layout/Flex';
import { sideBarMenus } from '@/utils/constant';
import Link from 'next/link';
import { Typography } from '../module/Typography';
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const path = usePathname();
  return (
    <article className='px-4 py-6'>
      <Flexbox className='flex-col !items-start gap-2'>
        {sideBarMenus.map((sidebar) => {
          const active =
            path === sidebar.to ? 'bg-purple-500 text-white' : 'text-gray-500';
          return (
            <div
              className={`gap-[10px] font-bold flex px-6 py-4 w-full rounded-md ${active} hover:bg-purple-500 hover:text-white`}
              key={sidebar.id}
            >
              <Typography as='span'>{sidebar.icon}</Typography>
              <Link className='w-full h-full' href={sidebar.to}>
                {sidebar.title}
              </Link>
            </div>
          );
        })}
      </Flexbox>
    </article>
  );
};

export default SideBar;
