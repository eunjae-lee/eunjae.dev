import React from 'react';

export default ({ children, href }) => (
  <a
    href={href}
    className="px-8 py-4 border rounded border-green-600 hover:border-green-700 bg-green-500 hover:bg-green-600 text-green-100 text-lg font-bold"
  >
    {children}
  </a>
);
