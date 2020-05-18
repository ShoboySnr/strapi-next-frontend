import gql from "graphql-tag";

const BLOGS_QUERY = gql`  
  query Blogs {
    blogs {
      id
      title
      categories {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default BLOGS_QUERY;  