export interface Venue {
  name: string;
  city: string;
  country: string;
  hallNumber: string;
  standNumber: string;
}

export type ProjectStatus = 
  | 'Design Submitted'
  | 'Project Confirmed'
  | 'Pending'
  | 'In progress'
  | 'Cancelled';

export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: ProjectStatus;
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

export const getStatusStyle = (status: ProjectStatus): { bg: string; text: string } => {
  switch (status) {
    case 'Design Submitted':
      return { bg: 'bg-blue-100', text: 'text-blue-800' };
    case 'Project Confirmed':
      return { bg: 'bg-green-100', text: 'text-green-800' };
    case 'Pending':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800' };
    case 'In progress':
      return { bg: 'bg-purple-100', text: 'text-purple-800' };
    case 'Cancelled':
      return { bg: 'bg-red-100', text: 'text-red-800' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800' };
  }
}; 