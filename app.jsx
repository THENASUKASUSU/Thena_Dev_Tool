import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkDependencies = () => {
      if (
        window.Header &&
        window.Hero &&
        window.About &&
        window.Skills &&
        window.Portfolio &&
        window.CryptoTool &&
        window.Contact &&
        window.Footer
      ) {
        setIsReady(true);
      }
    };

    checkDependencies();
    const interval = setInterval(checkDependencies, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-gray-300 text-lg">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <window.Header />
      <window.Hero />
      <window.About />
      <window.Skills />
      <window.Portfolio />
      <window.CryptoTool />
      <window.Contact />
      <window.Footer />
    </div>
  );
}

createRoot(document.getElementById('renderDiv')).render(<App />);