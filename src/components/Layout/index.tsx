import React from 'react';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
interface LayoutMainProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: LayoutMainProps) => {
  return (
    <main className='main'>
      <Navbar />
      <section className='grid grid-cols-[250px_minmax(0,1fr)] min-h-[calc(100vh-80px)]'>
        <SideBar />
        <section className='p-3'>{children}</section>
      </section>
    </main>
  );
};

export default MainLayout;
