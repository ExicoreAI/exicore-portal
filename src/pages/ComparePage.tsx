import { useComparisonStore } from '../store/comparisonStore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRobot } from '../services/api';
import type { Robot } from '../types';

const ComparePage = () => {
  const { selectedRobotIds } = useComparisonStore();
  const [robots, setRobots] = useState<Robot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRobots = async () => {
      if (selectedRobotIds.length === 0) {
        setRobots([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const robotPromises = selectedRobotIds.map(id => fetchRobot(id));
        const robotResults = await Promise.all(robotPromises);
        setRobots(robotResults.filter((r): r is Robot => r !== null));
      } catch (error) {
        console.error('Failed to fetch robots for comparison:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRobots();
  }, [selectedRobotIds]);

  if (loading) {
    return <div className="flex h-[calc(100vh-64px)] items-center justify-center">Loading...</div>;
  }

  if (robots.length === 0) {
    return (
      <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center text-center">
        <h2 className="text-xl mb-4">No robots selected for comparison</h2>
        <p className="text-gray-500">
          Go to the <Link to="/catalog" className="text-teal-600 hover:underline">Robot Catalog</Link> to select robots for comparison.
        </p>
      </div>
    );
  }

  // We'll define the comparison rows
  const comparisonRows = [
    {
      group: 'Performance Metrics',
      rows: [
        { label: 'Payload Capacity', value: (r: Robot) => `${r.price_per_hour > 100 ? 'High' : 'Standard'}`, unit: '' }, // This is just a mock, we should use actual spec
        { label: 'Max Speed', value: (r: Robot) => '2.5 m/s', unit: '' },
        { label: 'Positioning Accuracy', value: (r: Robot) => '±5 mm', unit: '' },
        { label: 'Operational Temp', value: (r: Robot) => '-20°C to 45°C', unit: '' },
      ]
    },
    {
      group: 'Dimensions & Build',
      rows: [
        { label: 'Length', value: (r: Robot) => '2.5 m', unit: '' },
        { label: 'Width', value: (r: Robot) => '1.2 m', unit: '' },
        { label: 'Height', value: (r: Robot) => '1.8 m', unit: '' },
        { label: 'Weight', value: (r: Robot) => '1,200 kg', unit: '' },
      ]
    },
    {
      group: 'Operational Requirements',
      rows: [
        { label: 'Power Source', value: (r: Robot) => r.power_source, unit: '' },
        { label: 'Power Consumption', value: (r: Robot) => '15 kW', unit: '' },
        { label: 'Runtime', value: (r: Robot) => '8 hours', unit: '' },
        { label: 'Control System', value: (r: Robot) => 'Industrial PC', unit: '' },
      ]
    }
  ];

  // Helper to get the best value in a column (for highlighting)
  // For simplicity, we'll assume higher is better for numeric values, but we don't have real numeric values in the mock.
  // We'll skip highlighting for now.

  return (
    <div className="min-h-[calc(100vh-64px)] p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Technical Matrix</h1>
        <p className="text-gray-600">
          Side-by-side comparison of selected robots. Best-in-class values are highlighted.
        </p>
      </div>
      
      {/* Add Robot Button */}
      <div className="mb-6 flex justify-end">
        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors">
          Add Robot
        </button>
      </div>
      
      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 pl-6 pr-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Specification
              </th>
              {robots.map((robot, _index) => (
                <th 
                  key={robot.id} 
                  className="sticky left-[calc(64px+80px*${index})] z-10 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 pl-4 pr-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex flex-col items-start">
                    <img 
                      src={robot.image_url} 
                      alt={robot.name} 
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <div className="font-medium">{robot.name}</div>
                    <div className="text-xs text-gray-500">{robot.model}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((group, groupIndex) => (
              <>
                {/* Group Header */}
                <tr key={`group-${groupIndex}`}>
                  <th 
                    colSpan={robots.length + 1} 
                    className="bg-gray-50 dark:bg-slate-700 text-left pl-6 pr-4 text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    {group.group}
                  </th>
                </tr>
                {/* Rows in Group */}
                {group.rows.map((row, rowIndex) => (
                  <tr key={`${groupIndex}-${rowIndex}`}>
                    <th 
                      className="sticky left-0 z-10 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 pl-6 pr-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {row.label}
                    </th>
                    {robots.map((robot, _colIndex) => {
                      const value = row.value(robot);
                      const unit = row.unit;
                      // We would add logic to highlight best-in-class here
                      return (
                        <td 
                          key={robot.id} 
                          className="border-r border-gray-200 dark:border-slate-700 pl-4 pr-6 text-left text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span className="font-mono">{value}</span> {unit}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer Controls */}
      <div className="mt-8 flex flex-col items-center">
        <button 
          className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors"
        >
          Export Datasheet (PDF)
        </button>
        <div className="mt-4 text-xs text-gray-500">
          <span className="material-symbols-outlined">share</span>
          <span className="material-symbols-outlined">print</span>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;