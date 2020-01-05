import React from 'react';

const colorMap = {
  tip: {
    border: 'border-green-500',
    text: 'text-green-800',
  },
  warning: {
    border: 'border-orange-500',
    text: 'text-orange-800',
  },
  danger: {
    border: 'border-red-500',
    text: 'text-red-800',
  },
  trivial: {
    border: 'border-gray-500',
    text: 'text-gray-700',
  },
};

export default ({ className = '', level, title, children }) => (
  <div className={`flex ${className}`}>
    <div className={`border-l-4 ${colorMap[level].border} mr-4`}></div>
    <div className="-mb-2">
      <p className={`${colorMap[level].text} mt-2 font-bold`}>{title}</p>
      {children}
    </div>
  </div>
);
