import React from 'react';
import { Menu } from '@headlessui/react';

interface DropdownProps {
  selected?: string;
  data?: {
    name: string;
    value: string;
  }[];
  onClick: (e) => void;
}

const createUUID = () => crypto.randomUUID();

const Dropdown = ({
  selected = 'More Options',
  data,
  onClick,
}: DropdownProps) => {
  return (
    <Menu as='div' className='relative w-40'>
      <Menu.Button className='inline-flex w-full justify-center rounded-md bg-[#efe3e3] px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
        {selected}
      </Menu.Button>
      <Menu.Items className='absolute z-20 left-0 right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        {data &&
          data?.length > 0 &&
          data?.map((item) => (
            <Menu.Item key={createUUID()}>
              <button
                className='group hover:bg-blue-600 hover:text-white flex w-full items-center rounded-md px-3 py-2 text-sm'
                data-value={item.value}
                onClick={onClick}
              >
                {item.name}
              </button>
            </Menu.Item>
          ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
