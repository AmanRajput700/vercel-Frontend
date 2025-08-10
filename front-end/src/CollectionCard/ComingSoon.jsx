import React from 'react';

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="text-center p-6 bg-white shadow-lg rounded-xl max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Coming Soon</h1>
        <p className="text-lg text-gray-600 mb-6">
          This module is under development. Stay tuned for updates!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
