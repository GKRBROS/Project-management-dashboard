export interface Venue {
  name: string;
  city: string;
  country: string;
  hallNumber: string;
  standNumber: string;
}

export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  venue: Venue;
  totalArea: string;
  logo: string;
  images: string[];
} 