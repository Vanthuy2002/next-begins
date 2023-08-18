'use client';
import React, { useState } from 'react';
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
import Button from '@/components/Button';
import { Menu } from '@headlessui/react';

const createUUID = () => crypto.randomUUID();

const BlogPage = () => {
  const [limit, setLimit] = useState(5);
  const [filter, setFilter] = useState<string>('');
  const debouncedValue = useDebounce<string>(filter, 1000);
  const [select, setSelected] = useState<string>('');
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ['products', debouncedValue || select, isTrue, limit],
    queryFn: () => getProductsFromApi(debouncedValue || select, limit, isTrue),
  });

  const routes = useRouter();
  const productsData = data?.products;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTrue(false);
    setFilter(e.target.value);
  };

  const handleSelect = (values: string) => {
    setIsTrue(true);
    setSelected(values);
  };

  const loadMoreProducts = () => {
    setLimit((prev) => prev + 5);
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

      <Flexbox className='flex-wrap gap-8'>
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
          selected={capitalize(select) || 'More Options'}
          data={dataDrops}
          renderItem={(item) => (
            <Menu.Item key={createUUID()}>
              <button
                className='flex items-center w-full px-3 py-2 text-sm rounded-md group hover:bg-blue-600 hover:text-white'
                onClick={() => handleSelect(item.value)}
              >
                {item.name}
              </button>
            </Menu.Item>
          )}
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

      <Flexbox className='justify-between mt-3'>
        <Typography className='text-gray-500'>
          Showing {productsData?.length} to {data?.total} properties
        </Typography>
        {/* Loadmore */}
        <Button onClick={loadMoreProducts} disabled={isLoading} size='md'>
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      </Flexbox>
    </MainLayout>
  );
};

export default BlogPage;
