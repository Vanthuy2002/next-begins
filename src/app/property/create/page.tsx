'use client';
import ProgressBar from '@/Effect/Progress';
import MainLayout from '@/components/Layout';
import { createProducts } from '@/services/property.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { FormEvent, useState } from 'react';

const CreateProperty = () => {
  const [propertiesVal, setPropertiesVal] = useState<Partial<IApiTypes>>();
  const queryClient = useQueryClient();

  const handleChange = (e: IEvents) => {
    setPropertiesVal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mutation = useMutation({
    mutationFn: (values: Partial<IApiTypes> | undefined) =>
      createProducts(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(propertiesVal);
  };

  return (
    <MainLayout>
      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
          <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
            Add a new Property
          </h2>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='title'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Product Name
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='title'
                  id='title'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Type product name'
                />
              </div>
              <div className='w-full'>
                <label
                  htmlFor='thumbnail'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Thumbnail
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='thumbnail'
                  id='thumbnail'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Product thumbnail'
                />
              </div>
              <div className='w-full'>
                <label
                  htmlFor='price'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Price
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='$2999'
                />
              </div>
              <div>
                <label
                  htmlFor='discountPercentage'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Discount
                </label>
                <select
                  onChange={handleChange}
                  id='discountPercentage'
                  name='discountPercentage'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                >
                  <option value=''>Select discount</option>
                  <option value='10%'>10%</option>
                  <option value='30%'>30%</option>
                  <option value='15%'>15%</option>
                  <option value='25%'>25%</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor='item-weight'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Item Weight (kg)
                </label>
                <input
                  onChange={handleChange}
                  type='number'
                  name='item-weight'
                  id='item-weight'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='12'
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='description'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Description
                </label>
                <textarea
                  id='description'
                  name='description'
                  rows={3}
                  onChange={handleChange}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Your description here'
                ></textarea>
              </div>
            </div>
            <button className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800'>
              Add product
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default CreateProperty;
// https://source.unsplash.com/random
