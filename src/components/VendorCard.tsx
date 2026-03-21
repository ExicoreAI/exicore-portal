import type { Vendor } from '../types';

type VendorCardProps = {
  vendor: Vendor;
};

const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <div className="space-y-4">
      {/* Vendor Logo */}
      <div className="flex items-center justify-center">
        <img 
          src={vendor.logo_url} 
          alt={`${vendor.name} logo`} 
          className="w-24 h-24 object-contain bg-gray-100 p-4 rounded-full"
        />
      </div>
      
      {/* Vendor Info */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-center">{vendor.name}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
          <span className="material-symbols-outlined">badge</span>
          <span>{vendor.tier_badge}</span>
        </div>
        <p className="text-center text-gray-600">{vendor.bio}</p>
      </div>
      
      {/* Compliance Badges */}
      <div className="flex flex-wrap gap-2 justify-center">
        {vendor.compliance_badges.map((badge, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
          >
            {badge}
          </span>
        ))}
      </div>
      
      {/* Contact Rep Button */}
      <div className="pt-4">
        <button 
          className="w-full bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition-colors"
        >
          Contact Representative
        </button>
      </div>
      
      {/* Active Fleets and Support */}
      <div className="mt-4 text-sm text-gray-500 text-center space-y-2">
        <div>
          <span className="font-medium">Active Fleets:</span> <span className="font-bold">1,284</span>
        </div>
        <div>
          <span className="font-medium">Support:</span> <span className="font-bold">24/7</span>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;