'use client';

import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="min-w-full divide-y divide-gray-200">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="block hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex items-center gap-4 sm:gap-6">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <h2 className="text-sm sm:text-base font-medium text-gray-900 truncate">
                  {project.name}
                </h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {project.status}
                </span>
              </div>
              
              <div className="mt-1 sm:mt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Venue:</span>
                  {project.venue.name}, {project.venue.city}, {project.venue.country}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Hall:</span>
                  {project.venue.hallNumber}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Stand:</span>
                  {project.venue.standNumber}
                </div>
              </div>
              
              <div className="mt-1 sm:mt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Start:</span>
                  {new Date(project.startDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">End:</span>
                  {new Date(project.endDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Area:</span>
                  {project.totalArea}m²
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 