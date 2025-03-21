import { Project } from '../types/project';

export const searchProjects = (projects: Project[], searchQuery: string): Project[] => {
  if (!searchQuery) return projects;

  const query = searchQuery.toLowerCase();
  return projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(query) ||
      project.venue.name.toLowerCase().includes(query) ||
      project.venue.city.toLowerCase().includes(query) ||
      project.venue.country.toLowerCase().includes(query) ||
      project.venue.hallNumber.toLowerCase().includes(query) ||
      project.venue.standNumber.toLowerCase().includes(query) ||
      project.status.toLowerCase().includes(query)
    );
  });
}; 