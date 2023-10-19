import SearchElement from '@/components/SearchElement';
import SearchResults from '@/components/SearchResults';
import TheHeader from '@/components/TheHeader';
import { getSongsByTitle } from '../actions';

export const revalidate = 0;

interface SearchPageProps {
  searchParams: {
    s: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const searchResults = searchParams.s
    ? await getSongsByTitle(searchParams.s)
    : [];
  return (
    // <div className='flex-1 flex flex-col rounded overflow-hidden bg-gray-main'>
    // <TheHeader />
    <main className='flex-1 md:px-layout-p px-2 bg-gray-main'>
      <h1 className='md:text-2xl text-xl font-semibold'>Search</h1>
      <section>
        <SearchElement />
      </section>
      <section>
        <SearchResults searchResults={searchResults} />
      </section>
    </main>
    // </div>
  );
};

export default SearchPage;
