'use client';
import React, { ButtonHTMLAttributes, useState } from 'react';
import MainLayout from '@/components/Layout';
import Loading from '@/Effect/Loading';
import Flexbox from '@/components/Layout/Flex';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Typography } from '@/components/module/Typography';
import { PropertyItem } from '@/components/module/Property';
import { getProductsFromApi } from '@/services/property.service';
import { SearchIcons } from '@/components/Icon';
import Dropdown from '@/components/Dropdown';
import { capitalize, dataDrops } from '@/utils/constant';
import { useDebounce } from '@/hooks/useDebounce';

const BlogPage = () => {
  const [filter, setFilter] = useState<string>('');
  const debouncedValue = useDebounce<string>(filter, 1000);
  const [select, setSelected] = useState<string>('');
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ['products', debouncedValue || select],
    queryFn: () => getProductsFromApi(debouncedValue || select, 50, isTrue),
    staleTime: 1000 * 60 * 1,
  });

  const routes = useRouter();
  const productsData = data?.products;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTrue(false);
    setFilter(e.target.value);
  };

  const handleSelect = (e) => {
    setIsTrue(true);
    setSelected(e.target.getAttribute('data-value'));
  };

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

      <Flexbox className='gap-8 flex-wrap'>
        {/* Search */}
        <Flexbox className='p-[10px] my-4 rounded-md bg-grayF4 max-w-[300px] gap-3'>
          <SearchIcons />
          <input
            value={filter}
            onChange={handleChange}
            type='text'
            className='w-full text-sm bg-transparent border-none outline-none'
            placeholder='Search city, zipcode...'
          />
        </Flexbox>

        {/* Dropdown */}
        <Dropdown
          onClick={handleSelect}
          selected={capitalize(select) || 'More Options'}
          data={dataDrops}
        />
      </Flexbox>

      {isLoading ? (
        <Loading />
      ) : (
        <Flexbox className='p-5 bg-white rounded-2xl'>
          <div className='grid grid-cols-2 gap-x-16 gap-y-6'>
            {productsData &&
              productsData?.length > 0 &&
              productsData?.map((item) => (
                <PropertyItem item={item} key={item?.id} />
              ))}
          </div>
        </Flexbox>
      )}

      <Flexbox className='justify-between'>
        <Typography className='text-gray-500'>
          Showing {data?.products.length} to {data?.total} properties
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
