import MainLayout from '@/components/Layout';
import Flexbox from '@/components/Layout/Flex';
import { PropertyItem } from '@/components/module/Property';
import { Typography } from '@/components/module/Typography';
import React from 'react';

const BlogPage = () => {
  return (
    <MainLayout>
      <Flexbox className='justify-between'>
        <Typography className='font-bold text-[25px]' as='h1'>
          Property
        </Typography>
        <button className='bg-purple-500 rounded-lg font-sm font-medium text-white py-3 px-5'>
          + Add Property
        </button>
      </Flexbox>

      <Flexbox className='p-5 bg-white rounded-2xl'>
        <div className='filter'></div>
        <div className='grid grid-cols-2 gap-x-16 gap-y-6'>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <PropertyItem key={index}>{index + 1}</PropertyItem>
            ))}
        </div>
      </Flexbox>

      <Flexbox className='justify-between'>
        <Typography className='text-gray-500'>
          Showing 1 to 10 properties
        </Typography>
        {/* pagination */}
        <Flexbox className='gap-[10px]'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <button key={index} className='w-9 bg-blue-400 h-9 rounded-md'>
                {index + 1}
              </button>
            ))}
        </Flexbox>
      </Flexbox>
    </MainLayout>
  );
};

export default BlogPage;
