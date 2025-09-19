import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EinsteinEngagementScoring from './components/EinsteinEngagementScoring';
import PredictionCards from './components/PredictionCards';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="max-w-7xl mx-auto p-6">
        <EinsteinEngagementScoring />
        <PredictionCards />
      </main>
    </div>
  );
}

export default App;