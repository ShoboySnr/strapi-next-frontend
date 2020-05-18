import React from "react";
import Restaurants from "../../components/Restaurants";  
import Query from "../../components/query";  
import RESTAURANTS_QUERY from "../../apollo/queries/restaurant/restaurants";
import defaultPage from "../../components/hocs/defaultPage";

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      isAuthenticated,
      restaurants
    } = this.props;
    return (
      <div className="uk-container">
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Restaurants</h1>
            <Query query={RESTAURANTS_QUERY}>
              {({ data: { restaurants } }) => {
                return <Restaurants restaurants={restaurants} isAuthenticated={isAuthenticated}/>;
              }}
            </Query>
          </div>
        </div>
      </div>
    );
  }
};

export default defaultPage(RestaurantPage);