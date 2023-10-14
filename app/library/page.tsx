import TheHeader from '@/components/TheHeader';
import React from 'react';

const page = () => {
  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gray-main'>
      <TheHeader />
      <main className='flex-1 px-4'>
        <h1 className='text-xl font-semibold'>Your library</h1>
      </main>
    </div>
  );
};

export default page;
