import React from 'react';

export default ({ children, href }) => (
  <a
    href={href}
    className="border rounded border-green-700 px-8 py-4 bg-green-500 hover:bg-green-600 text-green-100 text-lg font-bold"
  >
    {children}
  </a>
);
