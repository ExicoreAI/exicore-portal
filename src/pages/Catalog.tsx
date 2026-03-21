import { useQuery } from '@tanstack/react-query';
import { fetchCompanies, fetchRobots, fetchCategories } from '../services/api';
import { useComparisonStore } from '../store/comparisonStore';
import type { Robot } from '../types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterRail from '../components/FilterRail';
import RobotGrid from '../components/RobotGrid';
import CompareButton from '../components/CompareButton';

const Catalog = () => {
  const navigate = useNavigate();
  const { selectedRobotIds, addRobot, removeRobot, clear } = useComparisonStore();
  const [filters, setFilters] = useState({
    category: '',
    country: '',
    task: '',
    power_source: '',
  });
  const [sortBy, setSortBy] = useState('name');
  const [gridView, setGridView] = useState(true); // true for grid, false for list

  // Fetch data
  const { data: companies = [], isLoading: companiesLoading } = useQuery({
    queryKey: ['companies', filters],
    queryFn: () => fetchCompanies({ 
      category: filters.category || undefined,
      country: filters.country || undefined,
      limit: 1000 // get all for filtering
    }),
  });

  const { data: robots = [], isLoading: robotsLoading } = useQuery({
    queryKey: ['robots', filters, sortBy],
    queryFn: () => fetchRobots({ 
      category: filters.category || undefined,
      country: filters.country || undefined,
      task: filters.task || undefined,
      power_source: filters.power_source || undefined,
      limit: 1000
    }),
  });

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  // Apply filters and sorting to robots
  const filteredRobots = robots.filter(robot => {
    // If we have company filters, check if robot's company matches
    if (filters.category && robot.company.category !== filters.category) return false;
    if (filters.country && robot.company.country !== filters.country) return false;
    if (filters.task && !robot.tasks.includes(filters.task)) return false;
    if (filters.power_source && robot.power_source !== filters.power_source) return false;
    return true;
  });

  const sortedRobots = [...filteredRobots].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price_low') return a.price_per_hour - b.price_per_hour;
    if (sortBy === 'price_high') return b.price_per_hour - a.price_per_hour;
    return 0;
  });

  if (companiesLoading || robotsLoading) {
    return <div className="flex h-[70vh] items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Filter Rail */}
      <FilterRail 
        categories={categories} 
        companies={companies}
        filters={filters}
        setFilters={setFilters}
        selectedRobotIds={selectedRobotIds}
        clearSelection={clear}
      />
      
      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Robot Catalog</h1>
          <div className="flex items-center gap-4">
            <CompareButton
              count={selectedRobotIds.length}
              onClick={() => navigate('/compare')}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="name">Sort by Name</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
          </select>
          
          <button 
            onClick={() => setGridView(!gridView)}
            className="border rounded px-3 py-1 flex items-center gap-1"
          >
            {gridView ? 'List View' : 'Grid View'}
          </button>
        </div>
        
        {gridView ? (
          <RobotGrid 
            robots={sortedRobots} 
            onSelect={addRobot} 
            onDeselect={removeRobot} 
            selectedIds={selectedRobotIds}
          />
        ) : (
          <div className="space-y-4">
            {sortedRobots.map(robot => (
              <RobotListItem 
                key={robot.id} 
                robot={robot} 
                onSelect={() => addRobot(robot.id)}
                onDeselect={() => removeRobot(robot.id)}
                selected={selectedRobotIds.includes(robot.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const RobotListItem = ({ robot, onSelect, onDeselect, selected }: { robot: Robot; onSelect: (id: string) => void; onDeselect: (id: string) => void; selected: boolean }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded hover:bg-gray-50">
      <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
        <img src={robot.image_url} alt={robot.name} className="w-full h-full object-contain" />
      </div>
      <div className="flex-1">
        <h2 className="font-bold">{robot.name}</h2>
        <p className="text-sm text-gray-600">{robot.model}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{robot.power_source}</span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{robot.status}</span>
        </div>
        <p className="mt-2 line-clamp-2">{robot.description}</p>
      </div>
      <div className="flex items-center">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => (selected ? onDeselect(robot.id) : onSelect(robot.id))}
            className="form-checkbox h-4 w-4 text-teal-600"
          />
          <span>Add to Compare</span>
        </label>
      </div>
    </div>
  );
};

export default Catalog;