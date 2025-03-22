import StaticProjectsContent from '@/components/projects/StaticProjectsContent';

export const dynamic = 'force-static';
export const runtime = 'edge';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StaticProjectsContent />
    </div>
  );
} 