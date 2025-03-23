'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function ProjectDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Details');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const tabs = ['Details', 'Contractors', 'Quotations'];
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

  return (
    <div className="min-h-screen bg-white relative">
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed inset-y-0 left-0 w-64 bg-[#0F0B2D] text-white p-6 z-50">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold">Menu</h2>
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

      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-30">
        <div className="px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between max-w-[1400px] mx-auto">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Bars3Icon className="h-6 w-6 text-gray-600" />
              </button>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 truncate max-w-[200px] sm:max-w-none pl-0 lg:pl-8">
                {project.name}
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search by location, user..."
                  className="w-[200px] md:w-[320px] h-11 rounded-lg border border-gray-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-[#0F0B2D] px-3 sm:px-5 h-11 text-white text-sm font-medium whitespace-nowrap">
                <ArrowPathIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Sync</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden px-4 py-3 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location, user..."
              className="w-full h-11 rounded-lg border border-gray-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <nav className="flex space-x-8 sm:space-x-12 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    py-4 px-2 -mb-px border-b-2 text-sm font-medium transition-colors whitespace-nowrap
                    ${activeTab === tab
                      ? 'border-[#0F0B2D] text-[#0F0B2D]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-6 sm:py-8">
        {activeTab === 'Details' ? (
          <>
            {/* Project Info Card */}
            <div className="mb-8 bg-white rounded-lg border border-gray-200">
              <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-8 sm:gap-12">
                <div className="relative h-[180px] sm:h-[240px] w-[180px] sm:w-[240px] rounded-full overflow-hidden border border-gray-200 mx-auto sm:mx-0">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-12 sm:gap-x-24">
                  <div className="p-4 sm:p-0">
                    <p className="text-sm text-gray-500 mb-1">Start date</p>
                    <p className="text-base font-medium">{formatDate(project.startDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">End date</p>
                    <p className="text-base font-medium">{formatDate(project.endDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Venue name</p>
                    <p className="text-base font-medium">{project.venue.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Venue city</p>
                    <p className="text-base font-medium">{project.venue.city}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Venue country</p>
                    <p className="text-base font-medium">{project.venue.country}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Venue hall number</p>
                    <p className="text-base font-medium">{project.venue.hallNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Venue stand number</p>
                    <p className="text-base font-medium">{project.venue.standNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total sq. mtr</p>
                    <p className="text-base font-medium">{project.totalArea}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 bg-white rounded-lg border border-gray-200">
            <div className="h-12 w-12 text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Under Construction</h3>
            <p className="text-gray-500">This section is currently being developed</p>
          </div>
        )}
      </div>
    </div>
  );
}