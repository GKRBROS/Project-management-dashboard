import { Project } from '@/types/project';

export function searchProjects(projects: Project[], query: string): Project[] {
  if (!query.trim()) {
    return projects;
  }

  const searchTerm = query.toLowerCase().trim();
  
  return projects.filter(project => {
    return (
      project.name.toLowerCase().includes(searchTerm) ||
      project.venue.name.toLowerCase().includes(searchTerm) ||
      project.venue.city.toLowerCase().includes(searchTerm) ||
      project.venue.country.toLowerCase().includes(searchTerm) ||
      project.status.toLowerCase().includes(searchTerm)
    );
  });
} 