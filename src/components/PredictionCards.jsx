import React from 'react';

const PredictionCard = ({ title, icon, bgColor, percentage, nextDays, change, audienceHealth, description, confidence }) => {
  const getHealthColor = (health) => {
    const colors = {
      'POOR': 'bg-red-200',
      'FAIR': 'bg-yellow-200',
      'GOOD': 'bg-blue-200',
      'EXCELLENT': 'bg-green-500'
    };
    return colors[health] || 'bg-gray-200';
  };

  const getConfidenceIndicator = (level) => {
    return Array.from({ length: 3 }, (_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
      />
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900 p-6 transition-colors">
      <div className="flex items-center space-x-2 mb-4">
        <div className={`w-6 h-6 ${bgColor} rounded flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg. Likelihood to {title.split(' ')[2]}</div>
        <div className="text-3xl font-bold text-gray-900 dark:text-white">{percentage}</div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
          <span>{nextDays}</span>
          <div className="ml-auto flex items-center">
            <span className="text-gray-400">{change}</span>
            <span className="ml-1 text-xs">vs. last week</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Audience Health</h5>
        <div className="flex space-x-1 mb-2">
          {['POOR', 'FAIR', 'GOOD', 'EXCELLENT'].map((level, idx) => (
            <div key={level} className={`flex-1 h-2 ${getHealthColor(level)} ${idx === 0 ? 'rounded-l' : idx === 3 ? 'rounded-r' : ''}`}></div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-3">
          <span>POOR</span>
          <span>FAIR</span>
          <span>GOOD</span>
          <span>EXCELLENT</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {description}
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Learn More</a>
      </p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Model Confidence:</span>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {getConfidenceIndicator(confidence)}
          </div>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Details</a>
        </div>
      </div>
    </div>
  );
};

const PredictionCards = () => {
  const predictions = [
    {
      title: "Email Open Prediction",
      icon: <span className="text-purple-600 text-xs">@</span>,
      bgColor: "bg-purple-100",
      percentage: "10.51%",
      nextDays: "NEXT 14 DAYS",
      change: "0.0%",
      audienceHealth: "FAIR",
      description: "During the next 14 days, your audience is less likely than average to open an email.",
      confidence: 3
    },
    {
      title: "Email Click Prediction",
      icon: <span className="text-purple-600 text-xs">@</span>,
      bgColor: "bg-purple-100",
      percentage: "9.57%",
      nextDays: "NEXT 14 DAYS",
      change: "0.0%",
      audienceHealth: "EXCELLENT",
      description: "During the next 14 days, your audience is much more likely than average to click a link within an email.",
      confidence: 3
    },
    {
      title: "Web Conversion Prediction",
      icon: <span className="text-blue-600 text-xs">🌐</span>,
      bgColor: "bg-blue-100",
      percentage: "1.08%",
      nextDays: "NEXT 14 DAYS",
      change: "0.0%",
      audienceHealth: "GOOD",
      description: "During the next 14 days, your audience is more likely than average to convert on the web (e.g., purchase an item, open a white paper, click on a link, etc.; whatever you define as a conversion).",
      confidence: 3
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {predictions.map((prediction, idx) => (
        <PredictionCard key={idx} {...prediction} />
      ))}
    </div>
  );
};

export default PredictionCards;