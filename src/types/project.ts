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
  status: string;
  venue: Venue;
  totalArea: number;
  logo: string;
  images: string[];
} 