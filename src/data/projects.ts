import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Skyline Industries stand at Industry Showcase 2023',
    startDate: '2023-02-18',
    endDate: '2023-02-28',
    status: 'Design Submitted',
    venue: {
      name: 'Innovation Hub D',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '01',
      standNumber: '10'
    },
    totalArea: 1200,
    logo: '/images/skyline-logo.png',
    images: ['/images/stand1.png', '/images/stand2.png']
  },
  {
    id: '2',
    name: 'TechCorp stand at Industry Showcase 2023',
    startDate: '2023-11-11',
    endDate: '2023-11-15',
    status: 'Project Confirmed',
    venue: {
      name: 'Convention Center A',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '02',
      standNumber: '15'
    },
    totalArea: 800,
    logo: '/images/skyline-logo.png',
    images: ['/images/stand2.png', '/images/stand3.png']
  },
  {
    id: '3',
    name: 'TechCorp stand at Smart Solutions Fair 2022',
    startDate: '2022-10-11',
    endDate: '2022-10-14',
    status: 'Pending',
    venue: {
      name: 'Tech Park E',
      city: 'London',
      country: 'UK',
      hallNumber: '02',
      standNumber: '08'
    },
    totalArea: 600,
    logo: '/images/skyline-logo.png',
    images: ['/images/stand3.png', '/images/stand4.png']
  },
  {
    id: '4',
    name: 'Vertex Technologies stand at Corporate Trade Show 2024',
    startDate: '2024-10-10',
    endDate: '2024-10-19',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '04',
      standNumber: '25'
    },
    totalArea: 1000,
    logo: '/images/vertex-logo.png',
    images: ['/images/vertex-1.jpg', '/images/vertex-2.jpg']
  },
  {
    id: '5',
    name: 'Pioneer Group stand at Corporate Trade Show 2024',
    startDate: '2024-12-26',
    endDate: '2024-12-31',
    status: 'Design Submitted',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '05',
      standNumber: '30'
    },
    totalArea: 1500,
    logo: '/images/pioneer-logo.png',
    images: ['/images/pioneer-1.jpg', '/images/pioneer-2.jpg']
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
      hallNumber: '02',
      standNumber: '18'
    },
    totalArea: 750,
    logo: '/images/vertex-logo.png',
    images: ['/images/vertex-3.jpg', '/images/vertex-4.jpg']
  },
  {
    id: '7',
    name: 'Skyline Industries stand at Digital Transformation Expo 2021',
    startDate: '2021-01-11',
    endDate: '2021-01-17',
    status: 'Pending',
    venue: {
      name: 'Innovation Hub D',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '03',
      standNumber: '22'
    },
    totalArea: 950,
    logo: '/images/skyline-logo.png',
    images: ['/images/skyline-3.jpg', '/images/skyline-4.jpg']
  },
  {
    id: '8',
    name: 'Quantum Solutions stand at Enterprise Conference 2024',
    startDate: '2024-08-01',
    endDate: '2024-08-08',
    status: 'Design Submitted',
    venue: {
      name: 'Tech Park E',
      city: 'London',
      country: 'UK',
      hallNumber: '01',
      standNumber: '15'
    },
    totalArea: 850,
    logo: '/images/quantum-logo.png',
    images: ['/images/quantum-1.jpg', '/images/quantum-2.jpg']
  },
  {
    id: '9',
    name: 'Innova Ltd stand at NextGen Exhibition 2021',
    startDate: '2021-01-28',
    endDate: '2021-02-02',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '02',
      standNumber: '12'
    },
    totalArea: 700,
    logo: '/images/innova-logo.png',
    images: ['/images/innova-1.jpg', '/images/innova-2.jpg']
  },
  {
    id: '10',
    name: 'NexGen Systems stand at NextGen Exhibition 2021',
    startDate: '2021-04-11',
    endDate: '2021-04-19',
    status: 'Admin Approved',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '04',
      standNumber: '28'
    },
    totalArea: 1100,
    logo: '/images/nexgen-logo.png',
    images: ['/images/nexgen-1.jpg', '/images/nexgen-2.jpg']
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
      hallNumber: '03',
      standNumber: '20'
    },
    totalArea: 650,
    logo: '/images/fusion-logo.png',
    images: ['/images/fusion-1.jpg', '/images/fusion-2.jpg']
  },
  {
    id: '12',
    name: 'TechCorp stand at NextGen Exhibition 2023',
    startDate: '2023-01-15',
    endDate: '2023-01-24',
    status: 'Project Confirmed',
    venue: {
      name: 'Expo Hall B',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '01',
      standNumber: '05'
    },
    totalArea: 900,
    logo: '/images/techcorp-logo.png',
    images: ['/images/techcorp-5.jpg', '/images/techcorp-6.jpg']
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
      hallNumber: '02',
      standNumber: '15'
    },
    totalArea: 800,
    logo: '/images/innova-logo.png',
    images: ['/images/innova-3.jpg', '/images/innova-4.jpg']
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
      hallNumber: '04',
      standNumber: '30'
    },
    totalArea: 1200,
    logo: '/images/skyline-logo.png',
    images: ['/images/skyline-5.jpg', '/images/skyline-6.jpg']
  },
  {
    id: '15',
    name: 'Alpha Dynamics stand at Industry Showcase 2022',
    startDate: '2022-10-05',
    endDate: '2022-10-13',
    status: 'Project Confirmed',
    venue: {
      name: 'Expo Hall B',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '03',
      standNumber: '25'
    },
    totalArea: 950,
    logo: '/images/alpha-logo.png',
    images: ['/images/alpha-1.jpg', '/images/alpha-2.jpg']
  },
  {
    id: '16',
    name: 'Skyline Industries stand at Digital Transformation Expo 2023',
    startDate: '2023-02-09',
    endDate: '2023-02-17',
    status: 'Design Submitted',
    venue: {
      name: 'Expo Hall B',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '02',
      standNumber: '18'
    },
    totalArea: 850,
    logo: '/images/skyline-logo.png',
    images: ['/images/skyline-7.jpg', '/images/skyline-8.jpg']
  },
  {
    id: '17',
    name: 'TechCorp stand at Digital Transformation Expo 2021',
    startDate: '2021-04-27',
    endDate: '2021-05-02',
    status: 'Project Confirmed',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '01',
      standNumber: '10'
    },
    totalArea: 700,
    logo: '/images/techcorp-logo.png',
    images: ['/images/techcorp-7.jpg', '/images/techcorp-8.jpg']
  },
  {
    id: '18',
    name: 'NexGen Systems stand at Future Trends Expo 2020',
    startDate: '2020-03-21',
    endDate: '2020-03-25',
    status: 'Design Submitted',
    venue: {
      name: 'Tech Park E',
      city: 'London',
      country: 'UK',
      hallNumber: '04',
      standNumber: '22'
    },
    totalArea: 600,
    logo: '/images/nexgen-logo.png',
    images: ['/images/nexgen-3.jpg', '/images/nexgen-4.jpg']
  },
  {
    id: '19',
    name: 'Vertex Technologies stand at Innovation Fair 2021',
    startDate: '2021-02-17',
    endDate: '2021-02-21',
    status: 'Project Confirmed',
    venue: {
      name: 'Trade Fair Arena C',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '03',
      standNumber: '15'
    },
    totalArea: 750,
    logo: '/images/vertex-logo.png',
    images: ['/images/vertex-5.jpg', '/images/vertex-6.jpg']
  },
  {
    id: '20',
    name: 'Fusion Enterprises stand at Enterprise Conference 2025',
    startDate: '2025-01-21',
    endDate: '2025-01-29',
    status: 'Project Confirmed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '02',
      standNumber: '20'
    },
    totalArea: 1100,
    logo: '/images/fusion-logo.png',
    images: ['/images/fusion-3.jpg', '/images/fusion-4.jpg']
  }
]; 