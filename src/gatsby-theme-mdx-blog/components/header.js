import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, author, description },
      },
    }) => (
      <div className="p-8">
        {window.location.pathname !== '/' && (
          <Link to="/" className="absolute text-gray-600">
            ← Home
          </Link>
        )}
        <div className="mb-4">
          <h1 className="mt-16 text-4xl text-gray-800 text-center">
            <Link to="/">{author}</Link>
          </h1>
          <p className="mt-2 text-base text-gray-600 text-center">
            <span>{description},</span>
            <Link to="/about" className="ml-2 text-blue-600">
              more →
            </Link>
          </p>
        </div>
      </div>
    )}
  />
);
