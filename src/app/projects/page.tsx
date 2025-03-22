'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'upcoming';
  venue: string;
  totalArea: string;
  clientLogo: string;
  images: string[];
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Skyline Industries stand at Industry Showcase 2023',
    startDate: '2023-06-15',
    endDate: '2023-06-20',
    status: 'completed',
    venue: 'Convention Center',
    totalArea: '100 sqm',
    clientLogo: '/images/skyline-logo.png',
    images: ['/images/stand1.jpg', '/images/stand2.jpg', '/images/stand3.jpg']
  },
  // ... other projects
];

function ProjectsList() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const status = searchParams.get('status') || 'all';
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = 10;

  const filteredProjects = mockProjects.filter(project => {
    const matchesQuery = project.name.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === 'all' || project.status === status;
    return matchesQuery && matchesStatus;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search projects..."
            className="px-4 py-2 border rounded-md w-full sm:w-64"
            value={query}
            onChange={(e) => {
              const params = new URLSearchParams(searchParams.toString());
              params.set('q', e.target.value);
              params.set('page', '1');
              window.history.pushState(null, '', `?${params.toString()}`);
            }}
          />
          <select
            className="px-4 py-2 border rounded-md w-full sm:w-48"
            value={status}
            onChange={(e) => {
              const params = new URLSearchParams(searchParams.toString());
              params.set('status', e.target.value);
              params.set('page', '1');
              window.history.pushState(null, '', `?${params.toString()}`);
            }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={project.clientLogo}
                    alt="Company Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.venue}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'active' ? 'bg-green-100 text-green-800' :
                  project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>
              <div className="space-y-2 mt-auto">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Area:</span>
                  <span className="font-medium">{project.totalArea}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{project.startDate} - {project.endDate}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`?${new URLSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                page: page.toString()
              }).toString()}`}
              className={`px-4 py-2 rounded-md ${
                page === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {page}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectsList />
      </Suspense>
    </div>
  );
} 