'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const navigationItems = [
    { name: 'Explore', href: '/explore', icon: '🏠' },
    { name: 'Projects', href: '/projects', icon: '📋' },
    { name: 'Contractors', href: '/contractors', icon: '👥' },
    { name: 'Users', href: '/users', icon: '👤' },
  ];

  const tabs = [
    { id: 'details', label: 'Details' },
    { id: 'contractors', label: 'Contractors' },
    { id: 'quotations', label: 'Quotations' },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

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
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Header */}
        <div className="border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 py-4 w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Bars3Icon className="h-6 w-6 text-gray-600" />
                </button>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{project.name}</h1>
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-[#0F0B2D] px-3 sm:px-5 h-11 text-white text-sm font-medium whitespace-nowrap">
                <ArrowPathIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Sync</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 w-full">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="h-full">
            {activeTab === 'details' && (
              <>
                {/* Project Info Card */}
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="p-6 lg:p-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                    <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                      <div className="relative w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border border-gray-200">
                        <Image
                          src={project.logo}
                          alt={project.name}
                          fill
                          className="object-contain p-6"
                        />
                      </div>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-6">
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500">Start date</p>
                          <p className="text-base lg:text-lg font-medium">{formatDate(project.startDate)}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500">End date</p>
                          <p className="text-base lg:text-lg font-medium">{formatDate(project.endDate)}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500">Venue name</p>
                          <p className="text-base lg:text-lg font-medium">{project.venue.name}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500">Venue city</p>
                          <p className="text-base lg:text-lg font-medium">{project.venue.city}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500">Venue country</p>
                          <p className="text-base lg:text-lg font-medium">{project.venue.country}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500">Venue hall number</p>
                          <p className="text-base lg:text-lg font-medium">{project.venue.hallNumber}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500">Venue stand number</p>
                          <p className="text-base lg:text-lg font-medium">{project.venue.standNumber}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-500">Total sq. mtr</p>
                          <p className="text-base lg:text-lg font-medium">{project.totalArea}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Images */}
                <div className="mt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-6">Project Images</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {project.images.map((image, index) => (
                      <div 
                        key={index} 
                        className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow-sm"
                      >
                        <Image
                          src={image}
                          alt={`Project image ${index + 1}`}
                          fill
                          className="object-contain hover:scale-105 transition-all duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            
            {activeTab === 'contractors' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="h-12 w-12 text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Under Construction</h3>
                  <p className="text-gray-500">This section is currently being developed</p>
                </div>
              </div>
            )}
            
            {activeTab === 'quotations' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="h-12 w-12 text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Under Construction</h3>
                  <p className="text-gray-500">This section is currently being developed</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}