import type { Robot, Company, Category } from '../types';

// Mock data - in a real app, this would be replaced with actual API calls
let companies: Company[] = [];
let robots: Robot[] = [];
let categories: Category[] = [];

// Initialize mock data from the JSON file
export const initMockData = async () => {
  try {
    const response = await fetch('/data/companies.json');
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    companies = data.companies.map((c: any, i: number) => ({ ...c, id: c.id ?? String(i + 1) }));

    // Generate mock robots based on companies
    robots = [];
    companies.forEach(company => {
      const numRobots = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numRobots; i++) {
        const robotName = `${company.name} Robot ${i + 1}`;
        const robot: Robot = {
          id: crypto.randomUUID(),
          company_id: company.id,
          name: robotName,
          model: `Model ${['A', 'B', 'C', 'D', 'E'][i]}`,
          description: `${robotName} is a state-of-the-art construction robot designed for ${company.category.toLowerCase()}.`,
          power_source: ['Electric', 'Diesel Hybrid', 'Hydraulic'][Math.floor(Math.random() * 3)],
          tasks: [['Rebar Tying', 'Grading', '3D Mapping', 'Bricklaying', 'Concrete Pouring'][Math.floor(Math.random() * 5)]],
          price_per_hour: Math.floor(Math.random() * 200) + 50,
          status: Math.random() > 0.3 ? 'In Stock' : 'Enterprise Ready',
          image_url: `/assets/robots/${crypto.randomUUID()}.png`,
          spec_sheet_url: `/assets/specs/${crypto.randomUUID()}.pdf`,
          company: {
            id: company.id,
            name: company.name,
            country: company.country,
            category: company.category,
            description: company.description,
            website: company.website,
            linkedin: company.linkedin,
            contact_email: company.contact_email,
            funding: company.funding,
            status: company.status
          }
        };
        robots.push(robot);
      }
    });

    // Mock categories
    categories = [
      { id: '1', name: 'Bricklaying/Masonry' },
      { id: '2', name: '3D Printing' },
      { id: '3', name: 'Site Surveying/Layout' },
      { id: '4', name: 'Demolition' },
      { id: '5', name: 'Drywall/Painting' },
      { id: '6', name: 'Rebar/Metal' },
      { id: '7', name: 'Autonomous Vehicles' },
      { id: '8', name: 'Drones' },
      { id: '9', name: 'Exoskeletons' },
      { id: '10', name: 'Welding' },
      { id: '11', name: 'Concrete' },
      { id: '12', name: 'Prefab/Modular' },
      { id: '13', name: 'Crane/Logistics' },
      { id: '14', name: 'Other' }
    ];
  } catch (error) {
    console.error('Failed to load mock data:', error);
    companies = [{
      id: '1',
      name: 'Example Company',
      country: 'United States',
      category: 'Bricklaying/Masonry',
      description: 'An example construction robotics company.',
      website: 'https://example.com',
      linkedin: '',
      contact_email: 'info@example.com',
      funding: '$10M',
      status: 'Active'
    }];
    robots = [{
      id: '1',
      company_id: '1',
      name: 'Example Robot',
      model: 'EX-1',
      description: 'An example construction robot.',
      power_source: 'Electric',
      tasks: ['Bricklaying'],
      price_per_hour: 100,
      status: 'In Stock',
      image_url: '/assets/robots/example.png',
      spec_sheet_url: '/assets/specs/example.pdf',
      company: companies[0]
    }];
    categories = [{ id: '1', name: 'Bricklaying/Masonry' }];
  }
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchCompanies = async (filters: { category?: string; country?: string; limit?: number; offset?: number } = {}) => {
  await delay(500);
  let filtered = companies;
  if (filters.category) {
    filtered = filtered.filter(c => c.category === filters.category);
  }
  if (filters.country) {
    filtered = filtered.filter(c => c.country === filters.country);
  }
  const limit = filters.limit ?? 20;
  const offset = filters.offset ?? 0;
  return filtered.slice(offset, offset + limit);
};

export const fetchCompany = async (id: string): Promise<Company | null> => {
  await delay(300);
  const company = companies.find(c => c.id === id);
  return company ?? null;
};

export const fetchRobots = async (filters: { 
  category?: string; 
  country?: string; 
  task?: string; 
  power_source?: string; 
  limit?: number; 
  offset?: number 
} = {}) => {
  await delay(500);
  let filtered = robots;
  if (filters.category) {
    filtered = filtered.filter(r => r.company.category === filters.category);
  }
  if (filters.country) {
    filtered = filtered.filter(r => r.company.country === filters.country);
  }
  if (filters.task) {
    filtered = filtered.filter(r => r.tasks.includes(filters.task!));
  }
  if (filters.power_source) {
    filtered = filtered.filter(r => r.power_source === filters.power_source);
  }
  const limit = filters.limit ?? 20;
  const offset = filters.offset ?? 0;
  return filtered.slice(offset, offset + limit);
};

export const fetchRobot = async (id: string): Promise<Robot | null> => {
  await delay(300);
  const robot = robots.find(r => r.id === id);
  return robot ?? null;
};

export const fetchCompare = async (ids: string[]): Promise<Robot[]> => {
  await delay(400);
  return robots.filter(r => ids.includes(r.id));
};

export const fetchCategories = async (): Promise<Category[]> => {
  await delay(200);
  return categories;
};

export const fetchSearch = async (q: string): Promise<{ companies: Company[]; robots: Robot[] }> => {
  await delay(600);
  const query = q.toLowerCase();
  const filteredCompanies = companies.filter(c => 
    c.name.toLowerCase().includes(query) || 
    c.description.toLowerCase().includes(query)
  );
  const filteredRobots = robots.filter(r => 
    r.name.toLowerCase().includes(query) || 
    r.description.toLowerCase().includes(query) ||
    r.company.name.toLowerCase().includes(query)
  );
  return { companies: filteredCompanies, robots: filteredRobots };
};
