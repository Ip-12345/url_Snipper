import Header from '@/components/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div> 
      <main className='min-h-screen container mx-auto'>
        <Header/> 
        <Outlet/>  
      </main>  
      <div className='p-10 mt-10 text-center bg-gray-800'>
        Made with 💖 by Indupriya B
      </div>
    </div>
  )
}

export default AppLayout;