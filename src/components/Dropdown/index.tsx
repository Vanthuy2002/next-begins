import React from 'react';
import { Menu } from '@headlessui/react';

interface DropdownProps<T> {
  selected?: string;
  data?: T[];
  renderItem?: (item: T) => React.ReactNode;
}

const Dropdown = <TData,>(props: DropdownProps<TData>) => {
  const { selected, renderItem, data } = props;
  return (
    <Menu as='div' className='relative w-40'>
      <Menu.Button className='inline-flex w-full justify-center rounded-md bg-[#efe3e3] px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
        {selected}
      </Menu.Button>
      <Menu.Items className='absolute left-0 right-0 z-20 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        {data && data.length > 0 && data.map((item) => renderItem?.(item))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
