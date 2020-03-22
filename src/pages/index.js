import { graphql } from 'gatsby';
import IndexTemplate from '../components/index';

export default IndexTemplate;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { lang: { ne: "ko" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          id
          rawBody
          timeToRead
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
