import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Robot } from '../types';
import { useComparisonStore } from '../store/comparisonStore';

type RobotGridProps = {
  robots: Robot[];
  onSelect: (id: string) => void;
  onDeselect: (id: string) => void;
  selectedIds: string[];
  showVendorName?: boolean; // whether to show the vendor (company) name in the card
};

const RobotGrid = ({
  robots,
  onSelect,
  onDeselect,
  selectedIds,
  showVendorName = true
}: RobotGridProps) => {
  const [view, setView] = useState<'grid' | 'list'>('grid'); // We can keep this if we want to toggle, but we are handling it in the page

  // We'll use the comparison store to get the toggle function for selecting robots
  const { selectedRobotIds, addRobot, removeRobot } = useComparisonStore();

  // We'll override the onSelect and onDeselect with the store's functions if needed, but we'll keep the props for flexibility.
  // Actually, we are receiving onSelect and onDeselect from the page, which are the store's addRobot and removeRobot.
  // So we can use them directly.

  return (
    <div className="space-y-6">
      {robots.map((robot) => (
        <RobotCard
          key={robot.id}
          robot={robot}
          onSelect={() => onSelect(robot.id)}
          onDeselect={() => onDeselect(robot.id)}
          selected={selectedIds.includes(robot.id)}
          showVendorName={showVendorName}
        />
      ))}
    </div>
  );
};

type RobotCardProps = {
  robot: Robot;
  onSelect: () => void;
  onDeselect: () => void;
  selected: boolean;
  showVendorName?: boolean;
};

const RobotCard = ({
  robot,
  onSelect,
  onDeselect,
  selected,
  showVendorName = true
}: RobotCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="relative group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 w-full">
        <img 
          src={robot.image_url} 
          alt={robot.name} 
          className="w-full h-full object-cover"
        />
        {/* Selection Checkbox */}
        <label className="absolute top-2 left-2 flex items-center gap-2">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => (selected ? onDeselect() : onSelect())}
            className="form-checkbox h-4 w-4 text-teal-600 ring-offset-white"
          />
          <span className="text-xs font-medium">Add to Compare</span>
        </label>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Vendor/Company Name */}
        {showVendorName && (
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs text-teal-600">{robot.company.name}</span>
          </div>
        )}
        
        {/* Robot Name and Model */}
        <h3 className="font-bold text-lg mb-2 truncate">
          {robot.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2 truncate">
          {robot.model}
        </p>
        
        {/* Spec Summary */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">weight</span>
            <span>{robot.price_per_hour}/hr</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">flash_on</span>
            <span>{robot.power_source}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">check_circle</span>
            <span>{robot.status}</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-4">
          <button
            onClick={() => navigate(`/robots/${robot.id}`)}
            className="w-full bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition-colors"
          >
            View Technical Specs
          </button>
        </div>
      </div>
    </div>
  );
};

export default RobotGrid;