import PollGrid from '../components/PollGrid';
import SearchFilters from '../components/SearchFilters';

const Browse = ({ pollStore }) => {
  const { polls, categories, query, setQuery, category, setCategory, status, setStatus } =
    pollStore;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-primary-700">Browse</p>
        <h1 className="text-2xl font-bold text-slate-900">Discover and vote on polls</h1>
        <p className="text-slate-600">
          Filter by category, status, and keywords. Designed to stay fast on mobile.
        </p>
      </div>

      <SearchFilters
        query={query}
        onQueryChange={setQuery}
        category={category}
        onCategoryChange={setCategory}
        status={status}
        onStatusChange={setStatus}
        categories={categories}
      />

      <PollGrid polls={polls} />
    </div>
  );
};

export default Browse;

