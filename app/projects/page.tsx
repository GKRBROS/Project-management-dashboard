'use client';

import { useSearchParams } from 'next/navigation';
import ProjectList from '../components/ProjectList';
import SearchBar from '../components/SearchBar';
import { searchProjects } from '../utils/search';
import { Project } from '../types/project';

// This would normally come from an API
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Skyline Industries stand at Industry Showcase 2023',
    startDate: '2023-02-18',
    endDate: '2023-02-28',
    status: 'Design Submitted',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '01',
      standNumber: '10',
    },
    totalArea: 1200,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand1.png', '/images/stand2.png', '/images/stand3.png', '/images/stand4.png', '/images/stand5.png']
  },
  {
    id: '2',
    name: 'TechCorp stand at Industry Showcase 2023',
    startDate: '2023-11-11',
    endDate: '2023-11-15',
    status: 'Project Confirmed',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '02',
      standNumber: '15',
    },
    totalArea: 1000,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand2.png', '/images/stand3.png', '/images/stand4.png', '/images/stand5.png', '/images/stand1.png']
  },
  {
    id: '3',
    name: 'TechCorp stand at Smart Solutions Fair 2022',
    startDate: '2022-10-11',
    endDate: '2022-10-14',
    status: 'Pending',
    venue: {
      name: 'Tech Park E',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '03',
      standNumber: '20',
    },
    totalArea: 800,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand3.png', '/images/stand4.png', '/images/stand5.png', '/images/stand1.png', '/images/stand2.png']
  },
  {
    id: '4',
    name: 'Vertex Technologies stand at Corporate Trade Show 2024',
    startDate: '2024-10-10',
    endDate: '2024-10-19',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '04',
      standNumber: '25',
    },
    totalArea: 1500,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand4.png', '/images/stand5.png', '/images/stand1.png', '/images/stand2.png', '/images/stand3.png']
  },
  {
    id: '5',
    name: 'Pioneer Group stand at Corporate Trade Show 2024',
    startDate: '2024-12-26',
    endDate: '2024-12-31',
    status: 'Design Submitted',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '05',
      standNumber: '30',
    },
    totalArea: 1100,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand5.png', '/images/stand1.png', '/images/stand2.png', '/images/stand3.png', '/images/stand4.png']
  },
  {
    id: '6',
    name: 'Vertex Technologies stand at Enterprise Conference 2021',
    startDate: '2021-09-14',
    endDate: '2021-09-19',
    status: 'Pending',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '06',
      standNumber: '35',
    },
    totalArea: 900,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand1.png', '/images/stand3.png', '/images/stand5.png', '/images/stand2.png', '/images/stand4.png']
  },
  {
    id: '7',
    name: 'Skyline Industries stand at Digital Transformation Expo 2021',
    startDate: '2021-01-11',
    endDate: '2021-01-17',
    status: 'Pending',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '07',
      standNumber: '40',
    },
    totalArea: 1300,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand2.png', '/images/stand4.png', '/images/stand1.png', '/images/stand3.png', '/images/stand5.png']
  },
  {
    id: '8',
    name: 'Quantum Solutions stand at Enterprise Conference 2024',
    startDate: '2024-08-01',
    endDate: '2024-08-08',
    status: 'Design Submitted',
    venue: {
      name: 'Tech Park E',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '08',
      standNumber: '45',
    },
    totalArea: 1400,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand3.png', '/images/stand5.png', '/images/stand2.png', '/images/stand4.png', '/images/stand1.png']
  },
  {
    id: '9',
    name: 'Innova Ltd stand at NextGen Exhibition 2021',
    startDate: '2021-01-28',
    endDate: '2021-02-02',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '09',
      standNumber: '50',
    },
    totalArea: 950,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand4.png', '/images/stand1.png', '/images/stand3.png', '/images/stand5.png', '/images/stand2.png']
  },
  {
    id: '10',
    name: 'NexGen Systems stand at NextGen Exhibition 2021',
    startDate: '2021-04-11',
    endDate: '2021-04-19',
    status: 'Admin Approved',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '10',
      standNumber: '55',
    },
    totalArea: 1050,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand5.png', '/images/stand2.png', '/images/stand4.png', '/images/stand1.png', '/images/stand3.png']
  },
  {
    id: '11',
    name: 'Fusion Enterprises stand at Industry Showcase 2020',
    startDate: '2020-09-14',
    endDate: '2020-09-18',
    status: 'Pending',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '11',
      standNumber: '60',
    },
    totalArea: 850,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand1.png', '/images/stand4.png', '/images/stand2.png', '/images/stand5.png', '/images/stand3.png']
  },
  {
    id: '12',
    name: 'TechCorp stand at NextGen Exhibition 2023',
    startDate: '2023-01-15',
    endDate: '2023-01-24',
    status: 'Project Confirmed',
    venue: {
      name: 'Expo Hall B',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '12',
      standNumber: '65',
    },
    totalArea: 1250,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand2.png', '/images/stand5.png', '/images/stand3.png', '/images/stand1.png', '/images/stand4.png']
  },
  {
    id: '13',
    name: 'Innova Ltd stand at Innovation Fair 2020',
    startDate: '2020-02-08',
    endDate: '2020-02-17',
    status: 'Admin Approved',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '13',
      standNumber: '70',
    },
    totalArea: 1150,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand3.png', '/images/stand1.png', '/images/stand5.png', '/images/stand2.png', '/images/stand4.png']
  },
  {
    id: '14',
    name: 'Skyline Industries stand at Global Expo 2020',
    startDate: '2020-08-28',
    endDate: '2020-09-05',
    status: 'Design Submitted',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '14',
      standNumber: '75',
    },
    totalArea: 1350,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand4.png', '/images/stand2.png', '/images/stand1.png', '/images/stand5.png', '/images/stand3.png']
  },
  {
    id: '15',
    name: 'Alpha Dynamics stand at Industry Showcase 2022',
    startDate: '2022-10-05',
    endDate: '2022-10-13',
    status: 'Project Confirmed',
    venue: {
      name: 'Expo Hall B',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '15',
      standNumber: '80',
    },
    totalArea: 1050,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand5.png', '/images/stand3.png', '/images/stand4.png', '/images/stand2.png', '/images/stand1.png']
  },
  {
    id: '16',
    name: 'Skyline Industries stand at Digital Transformation Expo 2023',
    startDate: '2023-02-09',
    endDate: '2023-02-17',
    status: 'Design Submitted',
    venue: {
      name: 'Expo Hall B',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '16',
      standNumber: '85',
    },
    totalArea: 1450,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand1.png', '/images/stand5.png', '/images/stand2.png', '/images/stand4.png', '/images/stand3.png']
  },
  {
    id: '17',
    name: 'TechCorp stand at Digital Transformation Expo 2021',
    startDate: '2021-04-27',
    endDate: '2021-05-02',
    status: 'Project Confirmed',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '17',
      standNumber: '90',
    },
    totalArea: 1100,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand2.png', '/images/stand1.png', '/images/stand4.png', '/images/stand3.png', '/images/stand5.png']
  },
  {
    id: '18',
    name: 'NexGen Systems stand at Future Trends Expo 2020',
    startDate: '2020-03-21',
    endDate: '2020-03-25',
    status: 'Design Submitted',
    venue: {
      name: 'Tech Park E',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '18',
      standNumber: '95',
    },
    totalArea: 900,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand3.png', '/images/stand2.png', '/images/stand5.png', '/images/stand1.png', '/images/stand4.png']
  },
  {
    id: '19',
    name: 'Vertex Technologies stand at Innovation Fair 2021',
    startDate: '2021-02-17',
    endDate: '2021-02-21',
    status: 'Project Confirmed',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '19',
      standNumber: '100',
    },
    totalArea: 1200,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand4.png', '/images/stand3.png', '/images/stand1.png', '/images/stand5.png', '/images/stand2.png']
  },
  {
    id: '20',
    name: 'Fusion Enterprises stand at Enterprise Conference 2025',
    startDate: '2025-01-21',
    endDate: '2025-01-29',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '20',
      standNumber: '105',
    },
    totalArea: 1300,
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand5.png', '/images/stand4.png', '/images/stand2.png', '/images/stand3.png', '/images/stand1.png']
  }
];

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 10;

  const filteredProjects = searchProjects(mockProjects, searchQuery);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages = [];
    
    pages.push(1);
    
    if (currentPage > 2) {
      pages.push('...');
    }
    
    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(currentPage);
    }
    
    if (currentPage < totalPages - 1) {
      pages.push('...');
    }
    
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <main className="flex-1 min-h-screen bg-gray-50">
      <div className="max-w-full px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold">Projects</h1>
          <div className="w-full sm:w-auto">
            <SearchBar />
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
                    <a
                      key={page}
                      href={`?page=${page}${searchQuery ? `&q=${searchQuery}` : ''}`}
                      className={`px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </a>
                  )
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
} 