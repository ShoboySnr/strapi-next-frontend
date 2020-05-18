import gql from "graphql-tag";

const BLOG_QUERY = gql`  
  query Blogs($id: ID!) {
    blog(id: $id) {
      id
      title
      content
      image {
        url
      }
      categories {
        id
        name
      }
      published_at
    }
  }
`;

export default BLOG_QUERY; 