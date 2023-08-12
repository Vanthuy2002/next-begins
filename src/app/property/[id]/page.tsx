'use client';
import MainLayout from '@/components/Layout';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const DetailsPages = () => {
  const params = useParams();

  return <MainLayout>DetailsPages with id {params.id}</MainLayout>;
};

export default DetailsPages;
