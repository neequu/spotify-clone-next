import SearchElement from '@/components/SearchElement';
import SearchResults from '@/components/SearchResults';
import TheHeader from '@/components/TheHeader';
import { getSongs, getSongsByTitle } from '../actions';

interface SearchPageProps {
  params: {
    q: string;
  };
}

const SearchPage = async ({ params }: SearchPageProps) => {
  // const searchResults = await getSongsByTitle(params.q);
  const searchResults = await getSongs();
  return (
    <div className='flex-1 flex flex-col rounded overflow-hidden bg-gray-main'>
      <TheHeader />
      <main className='flex-1 md:px-layout-p px-2'>
        <h1 className='md:text-2xl text-xl font-semibold'>Search</h1>
        <SearchElement />
        <SearchResults searchResults={searchResults} />
      </main>
    </div>
  );
};

export default SearchPage;
