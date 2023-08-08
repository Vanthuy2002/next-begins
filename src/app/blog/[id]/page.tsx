'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const DetailsPages = () => {
  const params = useParams();

  return <div>DetailsPages with id {params.id}</div>;
};

export default DetailsPages;
