import React from 'react';

export default ({ title, description, author }) => (
  <header>
    <p>
      {title} by {author}
    </p>
    <p>{description}</p>
  </header>
);
