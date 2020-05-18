import React from "react";
import Link from "next/link"
import RestaurantCard from '../components/RestaurantCard';
import DishCard from './DishCard';

const Dishes = ({ restaurant }) => {
  return (
    <div>
      <div className="uk-child-width-1" data-uk-grid>
        <h2>{restaurant.name}'s Dishes</h2>
        <div className="uk-flex">
          {
            restaurant.dishes.length > 0 ? (
              <div className="uk-child-width-1-4@m uk-grid-match" data-uk-grid>
                {
                  restaurant.dishes.map((dish, i) => {
                    return <DishCard dish={dish} key={`blog__${restaurant.id}`} />
                  })
                }
              </div>
            ) : (<p>Sorry No dish was found for this restaurant</p>)
          }
        </div>
      </div>
    </div>
  )
};

export default Dishes;