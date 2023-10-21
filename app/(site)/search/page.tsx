import SearchElement from '@/components/SearchElement';
import SearchResults from '@/components/SearchResults';
import { getSongsByTitle } from '../../actions';

export const revalidate = 0;

interface SearchPageProps {
  searchParams: {
    s: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const query = searchParams.s;
  const searchResults = query ? await getSongsByTitle(query) : [];

  return (
    <main className='flex-1 md:px-layout-p px-2 gradient-dark'>
      <h1 className='md:text-2xl text-xl font-semibold'>Search</h1>
      <section>
        <SearchElement query={query} />
      </section>
      <section>
        <SearchResults searchResults={searchResults} />
      </section>
    </main>
  );
};

export default SearchPage;
