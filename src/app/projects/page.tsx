'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Explore', href: '/explore', icon: '🏠' },
    { name: 'Projects', href: '/projects', icon: '📋' },
    { name: 'Contractors', href: '/contractors', icon: '👥' },
    { name: 'Users', href: '/users', icon: '👤' },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Design Submitted':
        return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'Project Confirmed':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'Pending':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200';
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.venue.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Sidebar - Hidden on mobile, visible on lg screens */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-[#0F0B2D] pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 gap-2 mb-8">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm text-white rounded-lg hover:bg-[#1a1744]"
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-64 bg-[#0F0B2D] text-white p-6 z-50">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <h2 className="text-xl font-semibold">Menu</h2>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-[#1a1744] rounded-lg"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-[#1a1744]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Header */}
        <div className="border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Bars3Icon className="h-6 w-6 text-gray-600" />
                </button>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Projects</h1>
              </div>
              <div className="w-full sm:w-auto max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by location, user..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table/Cards Section */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
          {/* Desktop Table - Hidden on mobile */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[30%]">Name</th>
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="group hover:bg-gray-50">
                    <td className="py-4 pr-4 align-top">
                      <Link href={`/projects/${project.id}`} className="text-sm font-medium text-gray-900 hover:text-indigo-600">
                        {project.name}
                      </Link>
                    </td>
                    <td className="py-4 pr-4 text-sm text-gray-500 align-top whitespace-nowrap">
                      {formatDate(project.startDate)}
                    </td>
                    <td className="py-4 pr-4 text-sm text-gray-500 align-top whitespace-nowrap">
                      {formatDate(project.endDate)}
                    </td>
                    <td className="py-4 pr-4 align-top">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(project.status)}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4 pr-4 align-top">
                      <div className="text-sm text-gray-900">{project.venue.name}</div>
                      <div className="text-sm text-gray-500">
                        Hall {project.venue.hallNumber}, Stand {project.venue.standNumber}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards - Shown only on mobile */}
          <div className="md:hidden space-y-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <Link href={`/projects/${project.id}`} className="text-base font-medium text-gray-900 hover:text-indigo-600">
                    {project.name}
                  </Link>
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Start Date</span>
                    <span className="font-medium text-gray-900">{formatDate(project.startDate)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">End Date</span>
                    <span className="font-medium text-gray-900">{formatDate(project.endDate)}</span>
                  </div>
                  <div className="pt-1">
                    <div className="font-medium text-gray-900">{project.venue.name}</div>
                    <div className="text-gray-500">
                      Hall {project.venue.hallNumber}, Stand {project.venue.standNumber}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 