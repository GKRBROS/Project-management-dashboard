'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';

interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'upcoming';
  venue: string;
  totalArea: string;
  logo: string;
  images: string[];
  client: {
    name: string;
    logo: string;
    contact: string;
    email: string;
  };
}

// Mock data
const mockProject: Project = {
  id: '1',
  name: 'Skyline Industries stand at Industry Showcase 2023',
  startDate: '2023-02-18',
  endDate: '2023-02-28',
  status: 'completed',
  venue: 'Innovation Hub D',
  totalArea: '1200 sq. mtr',
  logo: '/images/skyline-logo.png',
  images: [
    '/images/stand1.png',
    '/images/stand2.png',
    '/images/stand3.png',
    '/images/stand4.png',
    '/images/stand5.png',
    '/images/stand6.png'
  ],
  client: {
    name: 'Skyline Industries',
    logo: '/images/skyline-logo.png',
    contact: '+1 (555) 123-4567',
    email: 'contact@skyline.com'
  }
};

export default function ProjectDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:pl-64">
        {/* Header with navigation */}
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <div className="flex items-center h-14 md:h-16">
              <Link
                href="/projects"
                className="inline-flex items-center text-gray-500 hover:text-gray-700"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="ml-2 text-sm font-medium">Back</span>
              </Link>
            </div>

            {/* Project title */}
            <div className="py-3 md:py-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 line-clamp-2 sm:line-clamp-1 max-w-3xl">
                {mockProject.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 bg-white">
          <div className="px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              <a
                href="#"
                className="border-b-2 border-indigo-500 py-4 px-1 text-sm font-medium text-indigo-600 whitespace-nowrap"
              >
                Details
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
              >
                Contractors
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap"
              >
                Quotations
              </a>
            </nav>
          </div>
        </div>

        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Project Details */}
              <div className="col-span-12 lg:col-span-8">
                {/* Project Info Grid */}
                <div className="bg-white rounded-lg shadow-sm mb-8">
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                      <img
                        src={mockProject.logo}
                        alt="Project Logo"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover bg-gray-50"
                      />
                      <div className="mt-4 sm:mt-0 flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                              {mockProject.name}
                            </h2>
                            <p className="text-sm text-gray-500">{mockProject.venue}</p>
                          </div>
                          <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <button
                              className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                              Sync
                            </button>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              mockProject.status === 'active' ? 'bg-green-100 text-green-800' :
                              mockProject.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {mockProject.status.charAt(0).toUpperCase() + mockProject.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Start date</dt>
                        <dd className="mt-1 text-sm text-gray-900">{mockProject.startDate}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">End date</dt>
                        <dd className="mt-1 text-sm text-gray-900">{mockProject.endDate}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Venue name</dt>
                        <dd className="mt-1 text-sm text-gray-900">{mockProject.venue}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Venue city</dt>
                        <dd className="mt-1 text-sm text-gray-900">Dubai</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Venue hall number</dt>
                        <dd className="mt-1 text-sm text-gray-900">01</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Venue stand number</dt>
                        <dd className="mt-1 text-sm text-gray-900">10</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Total sq. mtr</dt>
                        <dd className="mt-1 text-sm text-gray-900">{mockProject.totalArea}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Venue country</dt>
                        <dd className="mt-1 text-sm text-gray-900">UAE</dd>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stand Designs */}
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Stand Designs</h3>
                    <div className="aspect-w-16 aspect-h-9 mb-6">
                      <img
                        src={mockProject.images[selectedImage]}
                        alt={`Stand Design ${selectedImage + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {mockProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                            selectedImage === index ? 'ring-2 ring-indigo-500' : ''
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Information */}
              <div className="col-span-12 lg:col-span-4">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Client Information</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={mockProject.client.logo}
                      alt="Client Logo"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{mockProject.client.name}</h4>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Contact</h4>
                      <p className="mt-1 text-sm text-gray-900">{mockProject.client.contact}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Email</h4>
                      <p className="mt-1 text-sm text-gray-900">{mockProject.client.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}