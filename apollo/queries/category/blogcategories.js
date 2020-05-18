import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`  
  query Categories {
    blogcategories {
      id
      name
    }
  }
`;

export default CATEGORIES_QUERY;  