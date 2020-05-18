import React from "react";
import Link from "next/link"
import RestaurantCard from '../components/RestaurantCard';
import Cart from "./Cart/Cart";

const Restaurants = ({ restaurants, isAuthenticated }) => {
  return (
    <div>
      <div className="uk-child-width-1" data-uk-grid>
        <div className="uk-flex">
          <div className="uk-child-width-1-4@m uk-grid-match" data-uk-grid>
            {restaurants.map((restaurant, i) => {
              return <RestaurantCard restaurant={restaurant} key={`blog__${restaurant.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Restaurants;