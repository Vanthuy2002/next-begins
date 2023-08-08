'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const ImageRouting = () => {
  const params = useParams();

  console.log('🚀 ~ ImageRouting ~ params:', params);

  return <div>ImageRouting</div>;
};

export default ImageRouting;
