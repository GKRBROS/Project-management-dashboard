'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation */}
      <MobileNav isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <Sidebar />
      </div>

      <div className="lg:pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile Header with Menu Button */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-[#0A0B1C] hover:text-[#1C1D35] focus:outline-none transition-colors duration-200"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Page Content */}
          {children}
        </div>
      </div>
    </div>
  );
} 