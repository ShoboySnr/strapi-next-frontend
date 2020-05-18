import React from "react";  
import Link from "next/link";
import { withRouter } from "next/router";
import { compose } from "recompose";
import { withContext } from "../components/Context/AppProvider";
import defaultPage from "../components/hocs/defaultPage";

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem(item) {
    this.props.context.addItem(item);
  }

  render() {
    const {
      router,
      context,
      isAuthenticated, restaurant
    } = this.props;
    const imageUrl =
      process.env.NODE_ENV !== "development"
        ? restaurant.image?.url
        : process.env.API_URL + restaurant.image.url;
    return (
      <div className="uk-flex restaurants">
        <Link href={{ pathname: "restaurants/restaurant", query: { id: restaurant.id } }}>
          <a className="uk-link-reset">
            <div className="uk-card uk-card-muted">
              <div className="uk-card-media-top">
                <img
                  src={imageUrl}
                  alt={restaurant.image.url}
                  height="150"
                />
              </div>
              <div className="uk-card-body">
                <p id="category" className="uk-text-uppercase">
                  {restaurant.dishes[0]?.name}
                </p>
                <p id="title" className="uk-text-large">
                  {restaurant.name}
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link  href={{ pathname: "/restaurants/dishes", query: { id: restaurant.id } }}>
          <a className="uk-button uk-button-primary">View Dishes</a>
        </Link>
      </div>
    );
  }
};

export default compose(
  withRouter,
  defaultPage,
  withContext
)(RestaurantCard);