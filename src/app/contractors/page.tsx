'use client';

import Layout from '@/components/Layout';

export default function ContractorsPage() {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Contractors</h1>
      </div>

      {/* Placeholder content */}
      <div className="bg-white shadow rounded-lg p-6">
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
    </Layout>
  );
} 