import gql from "graphql-tag";

const RESTAURANTS_QUERY = gql`  
  query Restaurants {
    restaurants {
      id
      name
      dishes {
        id
        name
        price
      }
      image {
        url
      }
    }
  }
`;

export default RESTAURANTS_QUERY;  