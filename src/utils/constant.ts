import { DashIcon, PropertyIcon, StarIcon, UserIcon } from '@/components/Icon';
import axios from 'axios';
import React from 'react';

const getUUID = (): string => crypto.randomUUID();

interface SidebarItemsProps {
  id: string;
  title: string;
  to: string;
  icon: React.JSX.Element;
}

export const sideBarMenus: SidebarItemsProps[] = [
  { id: getUUID(), title: 'Dashboard', to: '/', icon: DashIcon() },
  { id: getUUID(), title: 'Property', to: '/property', icon: PropertyIcon() },
  { id: getUUID(), title: 'Agent', to: '/agent', icon: UserIcon() },
  { id: getUUID(), title: 'Reviews', to: '/reviews', icon: StarIcon() },
  { id: getUUID(), title: 'My Profile', to: '/me', icon: UserIcon() },
];

export const api = axios.create({
  baseURL: 'https://dummyjson.com/',
});

export const dataDrops = [
  { name: 'Smartphones', value: 'smartphones' },
  { name: 'Laptops', value: 'laptops' },
  { name: 'Groceries', value: 'groceries' },
  { name: 'Skincare', value: 'skincare' },
  { name: 'Home-decoration', value: 'home-decoration' },
  { name: 'Automotive', value: 'automotive' },
  { name: 'Motorcycle', value: 'motorcycle' },
  { name: 'Lighting', value: 'lighting' },
];

export const capitalize = (word: string): string => {
  const newWord = word.charAt(0).toUpperCase() + word.slice(1);
  return newWord;
};
