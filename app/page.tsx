import TheHeader from '@/components/TheHeader';

export default function Home() {
  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gradient-to-b from-accent-dark from-1% via-[#30705599] via-6%  to-gray-main to-25%'>
      <TheHeader />
      <main className='flex-1 px-4'>
        <h1 className='text-xl font-semibold'>Welcome back!</h1>
      </main>
    </div>
  );
}
