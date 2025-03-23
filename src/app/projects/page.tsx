'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import ProjectList from '@/components/ProjectList';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      project.name.toLowerCase().includes(searchTerm) ||
      project.venue.city.toLowerCase().includes(searchTerm) ||
      project.venue.country.toLowerCase().includes(searchTerm) ||
      project.status.toLowerCase().includes(searchTerm)
    );
  });

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <SearchBar onSearch={setSearchQuery} />
      </div>
      
      <ProjectList projects={currentProjects} />
      
      {/* Pagination info */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-700">
          Showing {indexOfFirstProject + 1} to {Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length} entries
        </p>
        
        {/* Pagination controls */}
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? 'bg-[#0A0B1C] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
} 