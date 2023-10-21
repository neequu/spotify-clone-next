import TheLibrary from '@/components/library/TheLibrary';

const page = () => {
  return (
    <main className='flex-1 md:px-layout-p px-2 gradient-dark'>
      <TheLibrary>
        <h1 className='text-xl font-semibold'>Your library</h1>
      </TheLibrary>
    </main>
  );
};

export default page;
