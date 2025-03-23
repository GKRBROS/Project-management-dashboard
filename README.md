# Project Management Dashboard

A modern, responsive project management dashboard built with Next.js 14, TypeScript, and Tailwind CSS. This application helps teams manage and track various projects, contractors, and users efficiently.

## Features

- 📊 **Project Overview**: View and manage all projects in a clean, organized interface
- 🔍 **Search Functionality**: Easily search through projects by name, location, or status
- 📱 **Responsive Design**: Fully responsive layout that works on all devices
- 🎨 **Modern UI**: Clean and intuitive user interface with Tailwind CSS
- 📅 **Project Details**: Comprehensive project information including dates, status, and venue details
- 🔄 **Real-time Updates**: Dynamic status updates and filtering
- 📊 **Pagination**: Efficient handling of large project lists
- 🔒 **Type Safety**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Icons**: Heroicons
- **Date Handling**: Native JavaScript Date API

## Getting Started

### Prerequisites

- Node.js >= 20.17.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GKRBROS/Project-management-dashboard.git
```

2. Navigate to the project directory:
```bash
cd Project-management-dashboard
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Create a `.env` file in the root directory (if needed):
```env
# Add any environment variables here
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── projects/          # Projects pages
│   ├── contractors/       # Contractors page
│   ├── explore/          # Explore page
│   └── users/            # Users page
├── components/            # Reusable components
├── data/                 # Static data and mock data
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Features in Detail

### Projects Page
- List view of all projects
- Search functionality
- Status filtering
- Pagination
- Project details view

### Project Details
- Comprehensive project information
- Status tracking
- Venue details
- Timeline information

### Navigation
- Sidebar navigation
- Mobile-responsive menu
- Quick access to all sections

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors who have helped with the project

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
