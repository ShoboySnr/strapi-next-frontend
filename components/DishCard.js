import React from "react";  
import Link from "next/link";
import { withRouter } from "next/router";
import { compose } from "recompose";
import { withContext } from "../components/Context/AppProvider";
import defaultPage from "../components/hocs/defaultPage";

class DishCard extends React.Component {
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
      isAuthenticated, dish
    } = this.props;
    const imageUrl =
      process.env.NODE_ENV !== "development"
        ? dish.image?.url
        : process.env.API_URL + dish.image.url;
    return (
      <div className="uk-flex restaurants uk-margin">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={imageUrl}
            alt={dish.image.url}
            height="150"
          />
        </div>
        <div className="uk-card-body">
          <p id="title" className="uk-text-uppercase">
            {dish.name}
          </p>
            <p>
              {dish.description.substring(0, 100)}
            </p>  
          <p id="price" className="uk-text-large">
            Price: ₦{dish.price}
          </p>
        </div>
      </div>
        <button className="uk-button uk-button-text" onClick={this.addItem.bind(this, dish)}>
          + Add toCart
        </button>
      </div>
    );
  }
};

export default compose(
  withRouter,
  defaultPage,
  withContext
)(DishCard);