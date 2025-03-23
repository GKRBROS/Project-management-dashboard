'use client';

import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectListProps {
  projects: Project[];
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Design Submitted':
      return 'bg-green-50 text-green-600';
    case 'Project Confirmed':
      return 'bg-yellow-50 text-yellow-600';
    case 'Pending':
      return 'bg-red-50 text-red-600';
    case 'In progress':
      return 'bg-yellow-50 text-yellow-600';
    case 'Cancelled':
      return 'bg-red-50 text-red-600';
    default:
      return 'bg-gray-50 text-gray-600';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="min-w-full">
        <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200">
          <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </div>
          <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Start date
          </div>
          <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            End date
          </div>
          <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </div>
          <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Venue
          </div>
        </div>

        <div className="bg-white">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="grid grid-cols-5 hover:bg-gray-50 border-b border-gray-200 transition-colors duration-150"
            >
              <div className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  {project.name}
                </div>
              </div>
              <div className="px-6 py-4 text-sm text-gray-500">
                {formatDate(project.startDate)}
              </div>
              <div className="px-6 py-4 text-sm text-gray-500">
                {formatDate(project.endDate)}
              </div>
              <div className="px-6 py-4">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <div className="px-6 py-4">
                <div className="text-sm text-gray-900">{project.venue.name}</div>
                <div className="text-xs text-gray-500">
                  Hall {project.venue.hallNumber}, Stand {project.venue.standNumber}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 