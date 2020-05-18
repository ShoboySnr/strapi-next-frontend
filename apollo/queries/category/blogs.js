import gql from 'graphql-tag';

const CATEGORIES_BLOGS_QUERY = gql`  
  query blogcategories($id: ID!){
    blogcategories(id: $id) {
      name
      blogs {
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
      }
    }
  }
`;

export default CATEGORIES_BLOGS_QUERY;  