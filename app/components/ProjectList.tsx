'use client';

import { Project } from '../types/project';
import Link from 'next/link';

interface ProjectListProps {
  projects: Project[];
}

const StatusBadge = ({ status }: { status: Project['status'] }) => {
  const statusColors = {
    'Design Submitted': 'bg-green-100 text-green-800',
    'Project Confirmed': 'bg-yellow-100 text-yellow-800',
    'Pending': 'bg-red-100 text-red-800',
    'In progress': 'bg-yellow-100 text-yellow-800',
    'Cancelled': 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs ${statusColors[status]}`}>
      {status}
    </span>
  );
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/3 sm:w-auto">
              Name
            </th>
            <th className="hidden sm:table-cell px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Start date
            </th>
            <th className="hidden sm:table-cell px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              End date
            </th>
            <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="hidden md:table-cell px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Venue
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {projects.map((project) => (
            <tr
              key={project.id}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <td className="px-3 sm:px-6 py-3 sm:py-4">
                <Link href={`/projects/${project.id}`} className="text-blue-600 hover:text-blue-800 block">
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-medium break-words">{project.name}</span>
                    <div className="sm:hidden mt-1 space-y-1 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Dates:</span>
                        <span>{project.startDate} - {project.endDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Venue:</span>
                        <span>{project.venue.name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </td>
              <td className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 text-sm whitespace-nowrap">
                {project.startDate}
              </td>
              <td className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 text-sm whitespace-nowrap">
                {project.endDate}
              </td>
              <td className="px-3 sm:px-6 py-3 sm:py-4">
                <StatusBadge status={project.status} />
              </td>
              <td className="hidden md:table-cell px-3 sm:px-6 py-3 sm:py-4 text-sm whitespace-nowrap">
                {project.venue.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList; 