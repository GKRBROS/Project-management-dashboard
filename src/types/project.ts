export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  venue: {
    name: string;
    city: string;
    country: string;
    hallNumber: string;
    standNumber: string;
  };
  totalArea: number;
  logo: string;
  images: string[];
} 