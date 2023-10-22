import SearchElement from '@/components/SearchElement';
import SearchResults from '@/components/SearchResults';
import { getSongsByTitle } from '../../actions';
import TheHeader from '@/components/TheHeader';

export const revalidate = 0;

interface SearchPageProps {
  searchParams: {
    s: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const query = searchParams.s;
  const searchResults = query ? await getSongsByTitle(query) : null;
  const searchResultsLength = searchResults?.length;

  return (
    <main className='flex-1 md:px-layout-p px-2 gradient-dark pt-[60px] overflow-auto h-screen pb-[64px] md:pb-0'>
      <h1 className='md:text-2xl xs:text-xl font-semibold'>Search</h1>
      <section>
        <SearchElement query={query} resultsLength={searchResultsLength} />
      </section>
      <section>
        <SearchResults
          searchResults={searchResults}
          resultsLength={searchResultsLength}
        />
      </section>
    </main>
  );
};

export default SearchPage;
