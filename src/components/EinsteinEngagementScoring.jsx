import React from 'react';

const EinsteinEngagementScoring = () => {
  const engagementData = [
    { likelihood: "Least Likely", counts: [192902, 370, 59, 50] },
    { likelihood: "Less Likely", counts: [521509, 15252, 2390, 3499] },
    { likelihood: "More Likely", counts: [116056, 100836, 51604, 22256] },
    { likelihood: "Most Likely", counts: [51597, 125392, 166002, 403581] }
  ];

  const columns = [
    { title: "830,033", subtitle: "Win-back/Dormant", description: "low open, low click" },
    { title: "5,998", subtitle: "Window Shoppers", description: "high open, low click" },
    { title: "394,781", subtitle: "Selective Subscribers", description: "low open, high click" },
    { title: "644,343", subtitle: "Loyalists", description: "high open, high click" }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900 p-6 mb-6 transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Einstein Engagement Scoring</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>1,875,155 Engaged Audience</span>
              <span>•</span>
              <span>Last updated on 9/29/2017</span>
              <span>•</span>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">What is model confidence?</a>
            </div>
          </div>
        </div>
      </div>

      {/* Email Engagement Prediction Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
              <span className="text-purple-600 text-xs">@</span>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">Email Engagement Prediction</h3>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded">Actual</button>
            <button className="px-4 py-1 text-blue-600 dark:text-blue-400 text-sm border border-blue-600 dark:border-blue-400 rounded">Percentage</button>
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Likelihood to open email</div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 w-48"></th>
                {columns.map((col, idx) => (
                  <th key={idx} className="text-center py-3 px-4 border-l border-gray-200 dark:border-gray-600">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{col.title}</div>
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">{col.subtitle}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{col.description}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-600">
                <td className="py-2 px-2 text-sm text-gray-600 dark:text-gray-400 font-medium">Likelihood to open email</td>
                <td colSpan={4} className="text-center py-1"></td>
              </tr>
              {engagementData.map((row, idx) => (
                <tr key={idx} className="border-t border-gray-100 dark:border-gray-700">
                  <td className="py-2 px-2 text-sm font-medium text-gray-700 dark:text-gray-300">{row.likelihood}</td>
                  {row.counts.map((count, countIdx) => (
                    <td key={countIdx} className="text-center py-2 px-4 border-l border-gray-100 dark:border-gray-700">
                      <div className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                        idx === 0 && countIdx === 0 ? 'bg-blue-100 text-blue-800' :
                        idx === 1 && countIdx === 0 ? 'bg-blue-100 text-blue-800' :
                        idx === 2 && countIdx === 0 ? 'bg-blue-100 text-blue-800' :
                        idx === 3 && countIdx === 0 ? 'bg-blue-100 text-blue-800' :
                        idx === 3 && countIdx === 3 ? 'bg-blue-600 text-white' :
                        'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        {count.toLocaleString()}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4 text-sm">
          <span className="text-gray-600 dark:text-gray-400">Size of Population</span>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-400">50</span>
            <div className="w-48 h-2 bg-blue-200 rounded-full">
              <div className="w-full h-full bg-blue-600 rounded-full"></div>
            </div>
            <span className="text-gray-600 dark:text-gray-400">622K</span>
          </div>
        </div>
      </div>

      {/* Subscriber Retention Prediction */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
              <span className="text-purple-600 text-xs">@</span>
            </div>
            <h4 className="font-medium text-gray-900 dark:text-white">Subscriber Retention Prediction</h4>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Avg. Likelihood to Stay Subscribed</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">99.96%</div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>NEXT 14 DAYS</span>
            <div className="ml-auto flex items-center">
              <span className="text-gray-400">0.0%</span>
              <span className="ml-1 text-xs">vs. last week</span>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Audience Health</h5>
            <div className="flex space-x-1 mb-2">
              <div className="flex-1 bg-red-200 h-2 rounded-l"></div>
              <div className="flex-1 bg-yellow-200 h-2"></div>
              <div className="flex-1 bg-blue-200 h-2"></div>
              <div className="flex-1 bg-green-500 h-2 rounded-r"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>POOR</span>
              <span>FAIR</span>
              <span>GOOD</span>
              <span>EXCELLENT</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            During the next 14 days, your audience is much more likely than average to stay subscribed.
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Learn More</a>
          </p>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Model Confidence:</span>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EinsteinEngagementScoring;