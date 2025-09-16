import React from 'react';
import Header from './components/Header';
import EinsteinEngagementScoring from './components/EinsteinEngagementScoring';
import PredictionCards from './components/PredictionCards';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <EinsteinEngagementScoring />
        <PredictionCards />
      </main>
    </div>
  );
}

export default App;