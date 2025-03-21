'use client';

import { useState } from 'react';
import Image from 'next/image';
import UnderConstruction from '../../components/UnderConstruction';

// This would normally come from an API based on the ID
const mockProjects = [
  {
    id: '1',
    name: 'Skyline Industries stand at Industry Showcase 2023',
    startDate: '2023-02-18',
    endDate: '2023-02-28',
    status: 'Design Submitted',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '01',
      standNumber: '10',
    },
    totalArea: 1200,
    logo: '/images/skyline-logo.png',
    standImages: ['/images/stand1.png', '/images/stand2.png', '/images/stand3.png', '/images/stand4.png', '/images/stand5.png']
  },
  {
    id: '2',
    name: 'TechCorp stand at Industry Showcase 2023',
    startDate: '2023-11-11',
    endDate: '2023-11-15',
    status: 'Project Confirmed',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '02',
      standNumber: '15',
    },
    totalArea: 1000,
    logo: '/images/skyline-logo.png',
    standImages: ['/images/stand2.png', '/images/stand3.png', '/images/stand4.png', '/images/stand5.png', '/images/stand1.png']
  },
  {
    id: '3',
    name: 'TechCorp stand at Smart Solutions Fair 2022',
    startDate: '2022-10-11',
    endDate: '2022-10-14',
    status: 'Pending',
    venue: {
      name: 'Tech Park E',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '03',
      standNumber: '20',
    },
    totalArea: 800,
    logo: '/images/skyline-logo.png',
    standImages: ['/images/stand3.png', '/images/stand4.png', '/images/stand5.png', '/images/stand1.png', '/images/stand2.png']
  },
  {
    id: '4',
    name: 'Vertex Technologies stand at Corporate Trade Show 2024',
    startDate: '2024-10-10',
    endDate: '2024-10-19',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '04',
      standNumber: '25',
    },
    totalArea: 1500,
    logo: '/images/skyline-logo.png',
    standImages: ['/images/stand4.png', '/images/stand5.png', '/images/stand1.png', '/images/stand2.png', '/images/stand3.png']
  },
  {
    id: '5',
    name: 'Pioneer Group stand at Corporate Trade Show 2024',
    startDate: '2024-12-26',
    endDate: '2024-12-31',
    status: 'Design Submitted',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '05',
      standNumber: '30',
    },
    totalArea: 1100,
    logo: '/images/skyline-logo.png',
    standImages: ['/images/stand5.png', '/images/stand1.png', '/images/stand2.png', '/images/stand3.png', '/images/stand4.png']
  },
  {
    id: '6',
    name: 'Vertex Technologies stand at Enterprise Conference 2021',
    startDate: '2021-09-14',
    endDate: '2021-09-19',
    status: 'Pending',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '06',
      standNumber: '35',
    },
    totalArea: 900,
    logo: '/images/skyline-logo.png',
    standImages: ['/images/stand1.png', '/images/stand3.png', '/images/stand5.png', '/images/stand2.png', '/images/stand4.png']
  },
  {
    id: '7',
    name: 'Skyline Industries stand at Digital Transformation Expo 2021',
    startDate: '2021-01-11',
    endDate: '2021-01-17',
    status: 'Pending',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '07',
      standNumber: '40',
    },
    totalArea: 1300,
    logo: '/images/skyline-logo.png',
    standImages: Array(5).fill('/images/stand2.png')
  },
  {
    id: '8',
    name: 'Quantum Solutions stand at Enterprise Conference 2024',
    startDate: '2024-08-01',
    endDate: '2024-08-08',
    status: 'Design Submitted',
    venue: {
      name: 'Tech Park E',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '08',
      standNumber: '45',
    },
    totalArea: 1400,
    logo: '/images/quantum-logo.png',
    standImages: Array(5).fill('/images/stand3.png')
  },
  {
    id: '9',
    name: 'Innova Ltd stand at NextGen Exhibition 2021',
    startDate: '2021-01-28',
    endDate: '2021-02-02',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '09',
      standNumber: '50',
    },
    totalArea: 950,
    logo: '/images/innova-logo.png',
    standImages: Array(5).fill('/images/stand4.png')
  },
  {
    id: '10',
    name: 'NexGen Systems stand at NextGen Exhibition 2021',
    startDate: '2021-04-11',
    endDate: '2021-04-19',
    status: 'Admin Approved',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '10',
      standNumber: '55',
    },
    totalArea: 1050,
    logo: '/images/nexgen-logo.png',
    standImages: Array(5).fill('/images/stand5.png')
  },
  {
    id: '11',
    name: 'Fusion Enterprises stand at Industry Showcase 2020',
    startDate: '2020-09-14',
    endDate: '2020-09-18',
    status: 'Pending',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '11',
      standNumber: '60',
    },
    totalArea: 850,
    logo: '/images/fusion-logo.png',
    standImages: Array(5).fill('/images/stand1.png')
  },
  {
    id: '12',
    name: 'TechCorp stand at NextGen Exhibition 2023',
    startDate: '2023-01-15',
    endDate: '2023-01-24',
    status: 'Project Confirmed',
    venue: {
      name: 'Expo Hall B',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '12',
      standNumber: '65',
    },
    totalArea: 1250,
    logo: '/images/techcorp-logo.png',
    standImages: Array(5).fill('/images/stand2.png')
  },
  {
    id: '13',
    name: 'Innova Ltd stand at Innovation Fair 2020',
    startDate: '2020-02-08',
    endDate: '2020-02-17',
    status: 'Admin Approved',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '13',
      standNumber: '70',
    },
    totalArea: 1150,
    logo: '/images/innova-logo.png',
    standImages: Array(5).fill('/images/stand3.png')
  },
  {
    id: '14',
    name: 'Skyline Industries stand at Global Expo 2020',
    startDate: '2020-08-28',
    endDate: '2020-09-05',
    status: 'Design Submitted',
    venue: {
      name: 'Convention Center A',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '14',
      standNumber: '75',
    },
    totalArea: 1350,
    logo: '/images/skyline-logo.png',
    standImages: Array(5).fill('/images/stand4.png')
  },
  {
    id: '15',
    name: 'Alpha Dynamics stand at Industry Showcase 2022',
    startDate: '2022-10-05',
    endDate: '2022-10-13',
    status: 'Project Confirmed',
    venue: {
      name: 'Expo Hall B',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '15',
      standNumber: '80',
    },
    totalArea: 1050,
    logo: '/images/alpha-logo.png',
    standImages: Array(5).fill('/images/stand5.png')
  },
  {
    id: '16',
    name: 'Skyline Industries stand at Digital Transformation Expo 2023',
    startDate: '2023-02-09',
    endDate: '2023-02-17',
    status: 'Design Submitted',
    venue: {
      name: 'Expo Hall B',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '16',
      standNumber: '85',
    },
    totalArea: 1450,
    logo: '/images/skyline-logo.png',
    standImages: Array(5).fill('/images/stand1.png')
  },
  {
    id: '17',
    name: 'TechCorp stand at Digital Transformation Expo 2021',
    startDate: '2021-04-27',
    endDate: '2021-05-02',
    status: 'Project Confirmed',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '17',
      standNumber: '90',
    },
    totalArea: 1100,
    logo: '/images/techcorp-logo.png',
    standImages: Array(5).fill('/images/stand2.png')
  },
  {
    id: '18',
    name: 'NexGen Systems stand at Future Trends Expo 2020',
    startDate: '2020-03-21',
    endDate: '2020-03-25',
    status: 'Design Submitted',
    venue: {
      name: 'Tech Park E',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '18',
      standNumber: '95',
    },
    totalArea: 900,
    logo: '/images/nexgen-logo.png',
    standImages: Array(5).fill('/images/stand3.png')
  },
  {
    id: '19',
    name: 'Vertex Technologies stand at Innovation Fair 2021',
    startDate: '2021-02-17',
    endDate: '2021-02-21',
    status: 'Project Confirmed',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '19',
      standNumber: '100',
    },
    totalArea: 1200,
    logo: '/images/skyline-logo.png',
    standImages: Array(5).fill('/images/stand4.png')
  },
  {
    id: '20',
    name: 'Fusion Enterprises stand at Enterprise Conference 2025',
    startDate: '2025-01-21',
    endDate: '2025-01-29',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '20',
      standNumber: '105',
    },
    totalArea: 1300,
    logo: '/images/fusion-logo.png',
    standImages: Array(5).fill('/images/stand5.png')
  }
];

type PageProps = {
  params: {
    id: string;
  };
};

export default function ProjectDetailsPage({ params }: PageProps) {
  const mockProject = mockProjects.find(project => project.id === params.id) || mockProjects[0];
  const [activeTab, setActiveTab] = useState<TabType>('details');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <>
            <div className="flex gap-12">
              {/* Company Logo */}
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/skyline-logo.png"
                    alt="Company Logo"
                    width={128}
                    height={128}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 grid grid-cols-2 gap-x-16">
                <div className="space-y-1">
                  <DetailRow label="Start date" value={mockProject.startDate} />
                  <DetailRow label="End date" value={mockProject.endDate} />
                  <DetailRow label="Venue name" value={mockProject.venue.name} />
                  <DetailRow label="Venue city" value={mockProject.venue.city} />
                </div>
                <div className="space-y-1">
                  <DetailRow label="Venue country" value={mockProject.venue.country} />
                  <DetailRow label="Venue hall number" value={mockProject.venue.hallNumber} />
                  <DetailRow label="Venue stand number" value={mockProject.venue.standNumber} />
                  <DetailRow label="Total sq. mtr" value={mockProject.totalArea} />
                </div>
              </div>
            </div>

            {/* Stand Images */}
            <div className="mt-12">
              <h2 className="text-lg font-medium mb-6">Stand Designs</h2>
              <div className="grid grid-cols-5 gap-6">
                {mockProject.standImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`Stand design ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                      className="object-contain p-2"
                      priority={index < 3}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case 'contractors':
      case 'quotations':
        return (
          <div className="py-8">
            <UnderConstruction />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">{mockProject.name}</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#0A0B1C] text-white rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Sync
        </button>
      </div>

      <div className="bg-white rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="flex gap-8 px-6">
            <button 
              onClick={() => setActiveTab('details')}
              className={`py-4 font-medium transition-colors ${
                activeTab === 'details' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Details
            </button>
            <button 
              onClick={() => setActiveTab('contractors')}
              className={`py-4 font-medium transition-colors ${
                activeTab === 'contractors' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Contractors
            </button>
            <button 
              onClick={() => setActiveTab('quotations')}
              className={`py-4 font-medium transition-colors ${
                activeTab === 'quotations' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Quotations
            </button>
          </nav>
        </div>
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

const DetailRow = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex gap-8 py-3">
    <div className="w-1/3">
      <span className="text-gray-500 text-sm">{label}</span>
    </div>
    <div className="w-2/3">
      <span className="text-[#1a1a1a] font-medium">{value}</span>
    </div>
  </div>
);

type TabType = 'details' | 'contractors' | 'quotations';