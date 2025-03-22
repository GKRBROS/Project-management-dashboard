'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, Suspense } from 'react';
import ProjectList from '@/components/ProjectList';
import SearchBar from '@/components/SearchBar';
import { searchProjects } from '@/utils/search';
import { Project } from '@/types/project';

// Mock data
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Skyline Industries stand at Industry Showcase 2023',
    startDate: '2023-06-15',
    endDate: '2023-06-20',
    status: 'Design Submitted',
    venue: {
      name: 'Convention Center',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '01',
      standNumber: '10'
    },
    totalArea: 100,
    logo: '/images/skyline-logo.png',
    images: ['/images/stand1.png', '/images/stand2.png', '/images/stand3.png']
  },
  // ... other projects
];

function ProjectsContentInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setSearchQuery(searchParams?.get('q') || '');
    setCurrentPage(Number(searchParams?.get('page')) || 1);
  }, [searchParams]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    params.delete('page');
    router.push(`/projects?${params.toString()}`);
  }, [router, searchParams]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`/projects?${params.toString()}`);
  }, [router, searchParams]);

  const filteredProjects = searchProjects(mockProjects, searchQuery);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="max-w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold">Projects</h1>
        <div className="w-full sm:w-auto">
          <SearchBar initialValue={searchQuery} onSearch={handleSearch} />
        </div>
      </div>
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 text-base sm:text-lg">No projects found matching your search criteria.</p>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <ProjectList projects={currentProjects} />
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500 text-center sm:text-left">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} entries
            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-end gap-2">
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span 
                    key={`ellipsis-${index}`} 
                    className="px-2 sm:px-4 py-2 text-sm sm:text-base"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(Number(page))}
                    className={`px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors duration-200 ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsContent() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <ProjectsContentInner />
    </Suspense>
  );
} 