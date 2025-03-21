export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'Design Submitted' | 'Project Confirmed' | 'Pending' | 'In progress' | 'Cancelled' | 'Admin Approved';
  venue: {
    name: string;
    city: string;
    country: string;
    hallNumber: string;
    standNumber: string;
  };
  totalArea: number;
  clientLogo?: string;
  images?: string[];
}

export type ProjectStatus = Project['status'];

export interface ProjectsResponse {
  projects: Project[];
  total: number;
  page: number;
  perPage: number;
} 