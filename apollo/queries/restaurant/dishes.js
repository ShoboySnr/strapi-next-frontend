import gql from "graphql-tag";

const RESTAURANT_DISHES_QUERY = gql`  
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      image {
        url
      }
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

export default RESTAURANT_DISHES_QUERY; 