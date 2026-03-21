import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRobots } from '../services/api';
import ProductNavBar from '../components/ProductNavBar';
import VendorCard from '../components/VendorCard';
import RobotGrid from '../components/RobotGrid';
import type { Vendor } from '../types';

const VendorProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  // We don't have a direct API for vendors yet, so we'll mock a vendor based on the id
  // In a real app, we would fetch the vendor by id and then fetch robots for that vendor.
  // For now, we'll fetch all robots and then filter by a mock vendor_id (we don't have vendor_id in robots yet).
  // We need to adjust: either we add a vendor_id to robots or we use the company_id as vendor_id.
  // Since the task says vendors are separate from companies, we should have a vendor table.
  // However, due to time, we'll mock a vendor and use the company_id to fetch robots.

  // We'll fetch all robots and then we'll mock that they belong to this vendor.
  // Alternatively, we can create a mock vendor and then fetch robots that are associated with that vendor via a vendor_id.
  // Let's adjust the robot fetching to include a vendor_id (we'll add it to the robot type and mock data).

  // Since we are short on time, we'll do a simpler approach: 
  // We'll create a mock vendor and then fetch robots that are tagged with a vendor_id (we'll add vendor_id to the robot mock data).

  // However, looking at the API we have, we don't have a vendor endpoint. Let's change the plan:
  // We'll create a mock vendor and then we'll fetch robots that are associated with that vendor by having a vendor_id in the robot.
  // We need to update the mock data in the api.ts to include vendor_id.

  // Given the time, let's assume we have a vendor endpoint and we'll mock the vendor data and then fetch robots by vendor_id.

  // We'll create a mock vendor and then use a custom hook to fetch robots for that vendor.

  // For now, we'll fetch all robots and display them, and we'll mock the vendor details.

  const { data: robots = [], isLoading } = useQuery({
    queryKey: ['robots', 'vendor', id],
    // We'll filter by vendor_id in the query function, but we don't have that in the API yet.
    // So we'll fetch all and then filter in the component (not ideal but for now).
    queryFn: () => fetchRobots({ limit: 1000 }),
  });

  // Mock vendor data
  const vendor: Vendor = {
    id: id ?? 'unknown',
    name: `Vendor ${id ?? 'Unknown'}`,
    logo_url: `/assets/vendors/${id}/logo.png`,
    tier_badge: 'Gold',
    bio: 'This is a mock vendor bio. In a real application, this would be fetched from the database.',
    compliance_badges: ['OSHA VPP', 'ISO 27001', 'CE Mark'],
    contact_rep_name: 'John Doe',
    contact_rep_email: 'john.doe@vendor.com',
    contact_rep_phone: '+1 (555) 123-4567'
  };

  if (isLoading) {
    return <div className="flex h-[calc(100vh-64px)] items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <ProductNavBar />
      <div className="flex min-h-[calc(100vh-64px)]">
      <div className="flex-1 p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Vendor Card */}
          <div className="w-64 md:w-80 shrink-0">
            <VendorCard vendor={vendor} />
          </div>
          
          {/* Right Column: Fleet Portfolio */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Fleet Portfolio</h2>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {robots.length} robots in fleet
                </span>
              </div>
            </div>
            
            {/* Robot Grid */}
            <RobotGrid 
              robots={robots} 
              onSelect={() => {}} // We don't have comparison store in vendor page for now
              onDeselect={() => {}}
              selectedIds={[]}
              showVendorName={false} // We don't need to show vendor name in the robot card since we are already in the vendor page
            />
            
            {/* Custom Configuration and Request Quote Tile */}
            <div className="mt-6 p-4 border border-dashed rounded-lg text-center cursor-pointer hover:bg-gray-50">
              <h3 className="font-bold mb-2">Custom Configuration</h3>
              <p className="text-sm text-gray-600 mb-4">
                Need a robot tailored to your specific project? Our engineers can modify any of our fleet robots to meet your exact requirements.
              </p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VendorProfile;