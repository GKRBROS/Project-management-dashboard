'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'upcoming';
  venue: string;
  totalArea: string;
  logo: string;
  standImages: string[];
}

const mockProject: Project = {
  id: '1',
  name: 'Skyline Industries stand at Industry Showcase 2023',
  startDate: '2023-06-15',
  endDate: '2023-06-20',
  status: 'completed',
  venue: 'Convention Center',
  totalArea: '100 sqm',
  logo: '/images/skyline-logo.png',
  standImages: [
    '/images/stand1.png',
    '/images/stand2.png',
    '/images/stand3.png'
  ]
};

function ProjectDetails() {
  const params = useParams();
  const project = mockProject; // In a real app, fetch based on params.id
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (src: string) => {
    console.error(`Failed to load image: ${src}`);
    setImageErrors(prev => ({ ...prev, [src]: true }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button and Sync */}
      <div className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/projects" 
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-2">{project.name}</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'active' ? 'bg-green-100 text-green-800' :
                project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                title="Sync project data"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Sync
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Project Info */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Project Images */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48 sm:h-64 md:h-96">
                <Image
                  src={project.standImages[0]}
                  alt="Project Stand"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => handleImageError(project.standImages[0])}
                  quality={90}
                />
                {imageErrors[project.standImages[0]] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <p className="text-gray-500">Failed to load image</p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {project.standImages.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-square">
                      <Image
                        src={image}
                        alt={`Project Stand ${index + 2}`}
                        fill
                        className="object-cover rounded-md hover:opacity-90 transition-opacity"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        onError={() => handleImageError(image)}
                        quality={90}
                      />
                      {imageErrors[image] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md">
                          <p className="text-gray-500 text-sm">Failed to load image</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Project Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Venue</h3>
                  <p className="mt-1 text-sm text-gray-900">{project.venue}</p>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Total Area</h3>
                  <p className="mt-1 text-sm text-gray-900">{project.totalArea}</p>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
                  <p className="mt-1 text-sm text-gray-900">{project.startDate}</p>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">End Date</h3>
                  <p className="mt-1 text-sm text-gray-900">{project.endDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Info */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow p-4 sm:p-6 sticky top-24">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Client Information</h2>
              <div className="flex items-center gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div className="relative w-16 h-16">
                  <Image
                    src={project.logo}
                    alt="Company Logo"
                    fill
                    className="object-contain"
                    sizes="64px"
                    onError={() => handleImageError(project.logo)}
                    quality={90}
                  />
                  {imageErrors[project.logo] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md">
                      <p className="text-gray-500 text-xs">Failed to load logo</p>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Skyline Industries</p>
                  <p className="text-xs font-medium text-gray-500">Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <Suspense fallback={<div>Loading project details...</div>}>
      <ProjectDetails />
    </Suspense>
  );
} 