import MainLayout from '@/components/Layout';
import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const MyProfile = () => {
  return (
    <MainLayout>
      <UserProfile />
    </MainLayout>
  );
};

export default MyProfile;
