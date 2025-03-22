'use client';

import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Project
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Venue
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Dates
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {projects.map((project) => (
          <tr key={project.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <Link href={`/projects/${project.id}`} className="group">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full object-cover" src={project.logo} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                      {project.name}
                    </div>
                  </div>
                </div>
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{project.venue.name}</div>
              <div className="text-sm text-gray-500">{project.venue.city}, {project.venue.country}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{project.startDate}</div>
              <div className="text-sm text-gray-500">{project.endDate}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                project.status === 'Design Submitted' ? 'bg-yellow-100 text-yellow-800' :
                project.status === 'Project Confirmed' ? 'bg-green-100 text-green-800' :
                project.status === 'Admin Approved' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 