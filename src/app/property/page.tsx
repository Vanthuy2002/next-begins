'use client';
import MainLayout from '@/components/Layout';
import Flexbox from '@/components/Layout/Flex';
import { PropertyItem } from '@/components/module/Property';
import { Typography } from '@/components/module/Typography';
import React, { useEffect, useState } from 'react';
import { api } from '@/utils/constant';

const BlogPage = () => {
  const [data, setData] = useState<IApiTypes[]>([]);

  const getProperty = async () => {
    const res = await api.get(`/products?limit=10`);
    const results: IApiTypes[] = res.data.products;
    setData(results);
  };
  useEffect(() => {
    getProperty();
  }, []);

  return (
    <MainLayout>
      <Flexbox className='justify-between'>
        <Typography className='font-bold text-[25px]' as='h1'>
          Property
        </Typography>
        <button className='px-5 py-3 font-medium text-white bg-purple-500 rounded-lg font-sm'>
          + Add Property
        </button>
      </Flexbox>

      <Flexbox className='p-5 bg-white rounded-2xl'>
        <div className='filter'></div>
        <div className='grid grid-cols-2 gap-x-16 gap-y-6'>
          {data.length > 0 &&
            data.map((item) => (
              <PropertyItem item={item} key={item.id}></PropertyItem>
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
              <button key={index} className='bg-blue-400 rounded-md w-9 h-9'>
                {index + 1}
              </button>
            ))}
        </Flexbox>
      </Flexbox>
    </MainLayout>
  );
};

export default BlogPage;
