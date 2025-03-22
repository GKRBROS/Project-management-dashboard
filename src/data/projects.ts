import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Skyline Industries stand at Industry Showcase 2023',
    startDate: '2023-02-18',
    endDate: '2023-02-28',
    status: 'Completed',
    venue: {
      name: 'Innovation Hub D',
      city: 'Dubai',
      country: 'UAE',
      hallNumber: '01',
      standNumber: '10'
    },
    totalArea: '1200 sq. mtr',
    logo: '/images/skyline-logo.png',
    images: [
      '/images/stand1.png',
      '/images/stand2.png',
      '/images/stand3.png',
      '/images/stand4.png',
      '/images/stand5.png',
      '/images/stand6.png'
    ]
  },
  {
    id: '2',
    name: 'TechCorp Exhibition at Global Tech Summit 2023',
    startDate: '2023-03-15',
    endDate: '2023-03-20',
    status: 'In Progress',
    venue: {
      name: 'Convention Center',
      city: 'Singapore',
      country: 'Singapore',
      hallNumber: '03',
      standNumber: '25'
    },
    totalArea: '800 sq. mtr',
    logo: '/images/skyline-logo.png',
    images: [
      '/images/stand1.png',
      '/images/stand2.png',
      '/images/stand3.png',
      '/images/stand4.png',
      '/images/stand5.png',
      '/images/stand6.png'
    ]
  },
  {
    id: '3',
    name: 'Future Innovations Pavilion at World Expo 2023',
    startDate: '2023-04-01',
    endDate: '2023-04-15',
    status: 'Planning',
    venue: {
      name: 'Expo Center',
      city: 'Tokyo',
      country: 'Japan',
      hallNumber: '05',
      standNumber: '42'
    },
    totalArea: '1500 sq. mtr',
    logo: '/images/skyline-logo.png',
    images: [
      '/images/stand1.png',
      '/images/stand2.png',
      '/images/stand3.png',
      '/images/stand4.png',
      '/images/stand5.png',
      '/images/stand6.png'
    ]
  },
  {
    id: '4',
    name: 'EcoTech Solutions Booth at Green Energy Summit 2023',
    startDate: '2023-05-10',
    endDate: '2023-05-15',
    status: 'Planning',
    venue: {
      name: 'Green Convention Center',
      city: 'Berlin',
      country: 'Germany',
      hallNumber: '02',
      standNumber: '15'
    },
    totalArea: '600 sq. mtr',
    logo: '/images/skyline-logo.png',
    images: [
      '/images/stand1.png',
      '/images/stand2.png',
      '/images/stand3.png',
      '/images/stand4.png',
      '/images/stand5.png',
      '/images/stand6.png'
    ]
  },
  {
    id: '5',
    name: 'HealthTech Innovations at Medical Expo 2023',
    startDate: '2023-06-01',
    endDate: '2023-06-10',
    status: 'In Progress',
    venue: {
      name: 'Medical Center',
      city: 'Boston',
      country: 'USA',
      hallNumber: '04',
      standNumber: '30'
    },
    totalArea: '1000 sq. mtr',
    logo: '/images/skyline-logo.png',
    images: [
      '/images/stand1.png',
      '/images/stand2.png',
      '/images/stand3.png',
      '/images/stand4.png',
      '/images/stand5.png',
      '/images/stand6.png'
    ]
  }
]; 