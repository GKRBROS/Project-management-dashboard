'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function ProjectDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isSyncing, setIsSyncing] = useState(false);
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return <div>Project not found</div>;
  }

  const handleSync = async () => {
    setIsSyncing(true);
    // Simulate sync delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSyncing(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getStatusStyle = (status: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
    switch (status) {
      case 'Design Submitted':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'Project Confirmed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Admin Approved':
        return `${baseClasses} bg-purple-100 text-purple-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h1>
          {/* Sync Button */}
          <button
            onClick={handleSync}
            disabled={isSyncing}
            className="inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0A0B1C] hover:bg-[#1C1D35] focus:outline-none transition-colors duration-200"
          >
            <svg
              className={`h-4 w-4 mr-2 ${isSyncing ? 'animate-spin' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {isSyncing ? 'Syncing...' : 'Sync'}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className={getStatusStyle(project.status)}>{project.status}</span>
          <span className="text-gray-500">ID: {project.id}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('contractors')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'contractors'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Contractors
          </button>
          <button
            onClick={() => setActiveTab('quotations')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'quotations'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Quotations
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white shadow rounded-lg">
        {activeTab === 'overview' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Details */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h2>
                <div className="flex gap-6 mb-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-40 h-24 rounded-lg overflow-hidden bg-white shadow-sm">
                      <Image
                        src="/images/skyline-logo.png"
                        alt="Company Logo"
                        fill
                        className="object-contain p-2"
                        priority
                      />
                    </div>
                  </div>
                  {/* Basic Details */}
                  <div className="flex-grow">
                    <dl className="grid grid-cols-1 gap-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Project ID</dt>
                        <dd className="mt-1 text-sm text-gray-900">#{project.id}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                        <dd className="mt-1">
                          <span className={getStatusStyle(project.status)}>{project.status}</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                {/* Additional Details */}
                <dl className="grid grid-cols-1 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Start Date</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formatDate(project.startDate)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">End Date</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formatDate(project.endDate)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Total Area</dt>
                    <dd className="mt-1 text-sm text-gray-900">{project.totalArea} sq. meters</dd>
                  </div>
                </dl>
              </div>

              {/* Venue Details */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Venue Details</h2>
                <dl className="grid grid-cols-1 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Venue Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">{project.venue.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900">{project.venue.city}, {project.venue.country}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Hall & Stand</dt>
                    <dd className="mt-1 text-sm text-gray-900">Hall {project.venue.hallNumber}, Stand {project.venue.standNumber}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Project Images */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Project Images</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={image}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contractors' && (
          <div className="p-6">
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Under Construction</h3>
              <p className="text-gray-500">This section is currently being developed.</p>
            </div>
          </div>
        )}

        {activeTab === 'quotations' && (
          <div className="p-6">
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Under Construction</h3>
              <p className="text-gray-500">This section is currently being developed.</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}