export interface Company {
  id: string;
  name: string;
  country: string;
  category: string;
  description: string;
  website: string;
  linkedin: string;
  contact_email: string;
  funding: string;
  status: string;
}

export interface Robot {
  id: string;
  company_id: string;
  name: string;
  model: string;
  description: string;
  power_source: string;
  tasks: string[]; // In the mock, we are using string[] but in the real DB it's text[]
  price_per_hour: number;
  status: string; // e.g., 'In Stock', 'Enterprise Ready'
  image_url: string;
  spec_sheet_url: string;
  company: Company; // We'll include the company details for convenience
}

export interface Category {
  id: string;
  name: string;
}

export interface Vendor {
  id: string;
  name: string;
  logo_url: string;
  tier_badge: string;
  bio: string;
  compliance_badges: string[];
  contact_rep_name: string;
  contact_rep_email: string;
  contact_rep_phone: string;
}

export interface ComparisonRobot extends Robot {
  // We might add extra fields for comparison if needed
}