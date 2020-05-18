import React from "react";
import Cart from "../components/Cart/Cart";  
import defaultPage from "../components/hocs/defaultPage";

class CartPage extends React.Component {
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
            <h1>Cart</h1>
            <Cart isAuthenticated={isAuthenticated} />;
          </div>
        </div>
      </div>
    );
  }
}

export default defaultPage(CartPage);