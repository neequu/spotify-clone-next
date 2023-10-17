import SearchElement from '@/components/SearchElement';
import TheHeader from '@/components/TheHeader';
import toast from 'react-hot-toast';

const SearchPage = async () => {
  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gray-main'>
      <TheHeader />
      <main className='flex-1 px-layout-p'>
        <h1 className='text-2xl font-semibold'>Search</h1>
        <SearchElement />
      </main>
    </div>
  );
};

export default SearchPage;
