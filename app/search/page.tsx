import SearchElement from '@/components/SearchElement';
import TheHeader from '@/components/TheHeader';

const SearchPage = () => {
  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gray-main'>
      <TheHeader />
      <main className='flex-1 px-layout-p'>
        <h1 className='text-xl'>search</h1>
        <SearchElement />
      </main>
    </div>
  );
};

export default SearchPage;
