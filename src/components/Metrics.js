import React from 'react';

function Metrics() {
  // Placeholder data (replace with API data)
  const metricsData = {
    accuracy: 0.85,
    precision: 0.78,
    recall: 0.92,
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Key Metrics</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow-md">
          <p className="text-lg font-semibold">Accuracy</p>
          <p className="text-2xl">{metricsData.accuracy}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <p className="text-lg font-semibold">Precision</p>
          <p className="text-2xl">{metricsData.precision}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <p className="text-lg font-semibold">Recall</p>
          <p className="text-2xl">{metricsData.recall}</p>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
