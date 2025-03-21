# Project Management Dashboard

A modern, responsive project management dashboard built with Next.js 14, TypeScript, and Tailwind CSS. This application helps manage exhibition and event projects with features like project tracking, status management, and detailed project views.

## Features

- 🎨 Modern and responsive UI design
- 📱 Mobile-first approach with collapsible sidebar
- 🔍 Advanced search functionality
- 📊 Project status tracking with visual indicators
- 📅 Date and venue management
- 🖼️ Image gallery for project stands
- 📱 Responsive design for all devices
- 🎯 Pagination for better performance
- 🔒 Type-safe development with TypeScript

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Version Control:** Git/GitHub

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- Git

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-management-dashboard.git
cd project-management-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add any necessary environment variables:
```env
# Add your environment variables here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
project-management-dashboard/
├── app/
│   ├── components/     # Reusable components
│   ├── projects/       # Project-related pages
│   ├── types/         # TypeScript type definitions
│   └── layout.tsx     # Root layout
├── public/
│   └── images/        # Static images
├── styles/            # Global styles
└── README.md
```

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Configure your project settings
5. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm start
# or
yarn start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and maintainers

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
