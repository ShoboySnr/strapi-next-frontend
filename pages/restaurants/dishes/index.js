import React from "react";
import Query from "../../../components/query";  
import { useRouter } from "next/router";  
import defaultPage from "../../../components/hocs/defaultPage";
import RESTAURANT_DISH_QUERY from "../../../apollo/queries/restaurant/dishes";
import Dishes from '../../../components/dishes';

const RestaurantDishPage = () => {
  const router = useRouter();
  return (
    <div className="uk-container">
      <Query query={RESTAURANT_DISH_QUERY} id={router.query.id}>
        {({ data: { restaurant } }) => {
          return <Dishes restaurant={restaurant} />;
        }}
      </Query>
    </div>
  )
};

export default defaultPage(RestaurantDishPage);