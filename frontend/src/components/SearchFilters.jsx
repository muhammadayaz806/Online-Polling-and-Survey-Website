const statuses = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'closed', label: 'Closed' }
];

const SearchFilters = ({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
  categories
}) => {
  return (
    <div className="card p-4 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label className="text-sm font-semibold text-slate-700 block mb-2">Search polls</label>
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by title, keyword, or category"
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>
        <div className="w-full md:w-56">
          <label className="text-sm font-semibold text-slate-700 block mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === 'all' ? 'All categories' : item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {statuses.map((item) => (
          <button
            key={item.id}
            onClick={() => onStatusChange(item.id)}
            className={`px-3 py-2 rounded-xl border text-sm font-semibold transition ${
              status === item.id
                ? 'border-primary-200 bg-primary-50 text-primary-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-primary-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;

