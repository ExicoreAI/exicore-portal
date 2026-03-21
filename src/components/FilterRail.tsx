import type { Category } from '../types';

type Filters = {
  category: string;
  country: string;
  task: string;
  power_source: string;
};

type FilterRailProps = {
  categories: Category[];
  companies: Array<{ id: string; name: string; country: string; category: string }>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  selectedRobotIds: string[];
  clearSelection: () => void;
};

const TASKS = [
  'Rebar Tying', 'Grading', '3D Mapping', 'Bricklaying', 'Concrete Pouring',
  'Site Layout', 'Material Transport', 'Welding', 'Painting', 'Demolition'
];

const POWER_SOURCES = ['Electric', 'Diesel Hybrid', 'Hydraulic'];

const FilterRail = ({
  categories,
  companies,
  filters,
  setFilters,
  selectedRobotIds,
  clearSelection
}: FilterRailProps) => {
  const countries = [...new Set(companies.map(c => c.country))].sort();

  const toggleFilter = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: prev[key] === value ? '' : value }));
  };

  const clearFilter = (key: keyof Filters) => {
    setFilters(prev => ({ ...prev, [key]: '' }));
  };

  return (
    <aside className="w-64 lg:w-80 shrink-0 space-y-6 p-4 bg-white border-r">
      <div className="space-y-4">
        <h2 className="font-bold text-lg">Filters</h2>

        {/* Category */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-700">Trade</p>
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category === cat.name}
                onChange={() => toggleFilter('category', cat.name)}
                className="accent-teal-600"
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>

        {/* Country */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-700">Country</p>
          {countries.map(country => (
            <label key={country} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={filters.country === country}
                onChange={() => toggleFilter('country', country)}
                className="accent-teal-600"
              />
              <span>{country}</span>
            </label>
          ))}
        </div>

        {/* Task */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-700">Task</p>
          {TASKS.map(task => (
            <label key={task} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={filters.task === task}
                onChange={() => toggleFilter('task', task)}
                className="accent-teal-600"
              />
              <span>{task}</span>
            </label>
          ))}
        </div>

        {/* Power Source */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-700">Power Source</p>
          {POWER_SOURCES.map(source => (
            <label key={source} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={filters.power_source === source}
                onChange={() => toggleFilter('power_source', source)}
                className="accent-teal-600"
              />
              <span>{source}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Applied Filters */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Applied Filters</p>
        <div className="flex flex-wrap gap-1">
          {(Object.keys(filters) as Array<keyof Filters>).map(key => (
            filters[key] ? (
              <span key={key} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded flex items-center gap-1">
                {filters[key]}
                <button onClick={() => clearFilter(key)} className="hover:text-teal-900">×</button>
              </span>
            ) : null
          ))}
          {Object.values(filters).every(v => !v) && (
            <span className="text-sm text-gray-400">No active filters</span>
          )}
        </div>
      </div>

      {/* Compare */}
      <div className="pt-4 border-t">
        <p className="text-sm font-medium text-gray-700 mb-2">Compare</p>
        <p className="text-sm text-gray-600 mb-2">{selectedRobotIds.length} robots selected</p>
        <button
          onClick={clearSelection}
          disabled={selectedRobotIds.length === 0}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded disabled:opacity-50 text-sm"
        >
          Clear Selection
        </button>
      </div>

      {/* Info */}
      <div className="pt-4 border-t text-sm text-gray-500 space-y-1">
        <p><span className="font-medium">Active Fleets:</span> <span className="font-bold">1,284</span></p>
        <p><span className="font-medium">Support:</span> <span className="font-bold">24/7</span></p>
      </div>
    </aside>
  );
};

export default FilterRail;
