'use client';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        {/* Construction Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto relative animate-bounce">
            <svg
              className="w-full h-full text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z" />
            </svg>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto animate-fade-in-delayed">
          This page is under construction. We're working hard to bring you something amazing!
        </p>

        {/* Animated Progress Bar */}
        <div className="mt-8 w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full animate-progress"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(10px); }
          50% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 90%; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out forwards;
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default UnderConstruction; 