'use client';
import Loading from '@/Effect/Loading';
import MainLayout from '@/components/Layout';
import Flexbox from '@/components/Layout/Flex';
import Star from '@/components/Star';
import { Typography } from '@/components/module/Typography';
import { getDetailsProduct } from '@/services/property.service';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { Fragment } from 'react';

const DetailsPages = () => {
  const params = useParams();
  const id = parseInt(params.id as string);

  const { data, isLoading } = useQuery({
    queryKey: ['details', id],
    queryFn: () => getDetailsProduct(id),
    staleTime: 60 * 1000,
  });

  return (
    <MainLayout>
      {isLoading ? (
        <Fragment>
          <Loading />
        </Fragment>
      ) : (
        <Fragment>
          <section className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-4'>
            <Image
              width={100}
              height={100}
              className='object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-lg'
              src={data?.thumbnail as string}
              alt={data?.title as string}
            />
            <div className='flex flex-col justify-between px-4 leading-normal'>
              <Typography
                as='h5'
                className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
              >
                {data?.title}
              </Typography>
              <Typography className='mb-3 font-normal text-gray-700 '>
                {data?.description}
              </Typography>

              <Star></Star>
              <Flexbox className='justify-between'>
                <Typography
                  as='span'
                  className='text-3xl font-bold text-gray-900 dark:text-white'
                >
                  ${data?.price}
                </Typography>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Add to cart
                </button>
              </Flexbox>
            </div>
          </section>
        </Fragment>
      )}
    </MainLayout>
  );
};

export default DetailsPages;
