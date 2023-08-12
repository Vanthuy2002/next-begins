'use client';
import Loading from '@/Effect/Loading';
import MainLayout from '@/components/Layout';
import Flexbox from '@/components/Layout/Flex';
import { PropertyItem } from '@/components/module/Property';
import { Typography } from '@/components/module/Typography';
import { getProductsFromApi } from '@/services/property.service';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';

const BlogPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsFromApi,
    staleTime: 60 * 1000,
  });

  const routes = useRouter();

  return (
    <MainLayout>
      <Flexbox className='justify-between'>
        <Typography className='font-bold text-[25px]' as='h1'>
          Property
        </Typography>
        <button
          onClick={() => routes.push('/property/create')}
          className='px-5 py-3 font-medium text-white bg-purple-500 rounded-lg font-sm'
        >
          + Add Property
        </button>
      </Flexbox>

      {isLoading ? (
        <Loading></Loading>
      ) : (
        <Flexbox className='p-5 bg-white rounded-2xl'>
          <div className='filter'></div>
          <div className='grid grid-cols-2 gap-x-16 gap-y-6'>
            {data &&
              data?.length > 0 &&
              data?.map((item) => (
                <PropertyItem item={item} key={item?.id}></PropertyItem>
              ))}
          </div>
        </Flexbox>
      )}

      <Flexbox className='justify-between'>
        <Typography className='text-gray-500'>
          Showing 1 to 10 properties
        </Typography>
        {/* pagination */}
        <Flexbox className='gap-[10px]'>
          {Array(2)
            .fill(0)
            .map((_, index) => {
              const active = index === 0 ? 'bg-blue-500' : 'bg-white';
              return (
                <button key={index} className={`rounded-md w-9 h-9 ${active}`}>
                  {index + 1}
                </button>
              );
            })}
        </Flexbox>
      </Flexbox>
    </MainLayout>
  );
};

export default BlogPage;
