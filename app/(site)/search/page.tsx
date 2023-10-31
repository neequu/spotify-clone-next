import SearchElement from "@/components/SearchElement";
import SearchResults from "@/components/SearchResults";
import { getSongsByTitle } from "@/app/actions";
import { Metadata } from "next";

export const revalidate = 0;

interface SearchPageProps {
  searchParams: {
    s: string;
  };
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  return {
    title: `${
      searchParams.s ? "Results for " + searchParams.s : "Search"
    } · Nextify`,
    description: `Search for anything`,
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const query = searchParams.s;
  const searchResults = query ? await getSongsByTitle(query) : null;
  const searchResultsLength = searchResults?.length;

  return (
    <main className="gradient-dark h-screen flex-1 overflow-auto px-2 pb-[64px] pt-[60px] md:px-layout-p md:pb-0">
      <h1 className="font-semibold xs:text-xl md:text-2xl">Search</h1>
      <section>
        <SearchElement query={query} resultsLength={searchResultsLength} />
      </section>
      <section>
        {!!searchResultsLength && (
          <SearchResults
            searchResults={searchResults}
            resultsLength={searchResultsLength}
          />
        )}
      </section>
    </main>
  );
};

export default SearchPage;
