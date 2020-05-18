import React from "react";
import Link from "next/link";
import { compose } from "recompose";
import { withRouter } from "next/router";
import defaultPage from "../hocs/defaultPage";
import { withContext } from "../Context/AppProvider";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem(item) {
    this.props.context.addItem(item);
  }

  removeItem(item) {
    this.props.context.removeItem(item);
  }

  render() {
    const { items } = this.props.context;
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated);

    return (
      <div className="uk-card uk-card-default uk-width-1">
        <div className="uk-card-header">
          <h3>
            Your Order:
          </h3>
        </div>
        <hr />
        <div className="uk-card-body">
          <div className="uk-padding-small">
            <p className="uk-text-small">Items:</p>
          </div>
          <div>
            {items
              ? items.map(item => {
                if (item.quantity > 0) {
                  return (
                    <div className="uk-padding-small" key={item.id}>
                      <div>
                        <span id="item-price">&nbsp; ₦{item.price}</span>
                        <span id="item-name">&nbsp; {item.name}</span>
                      </div>
                      <div>
                        <button className="uk-button uk-button-default uk-button-small  uk-width-1-4" onClick={this.addItem.bind(this, item)}>
                          +
                        </button>
                        <button className="uk-button uk-button-default uk-button-small  uk-width-1-4" onClick={this.removeItem.bind(this, item)}>
                          -
                        </button>
                        <span className="uk-padding-small" id="item-quantity">
                          {item.quantity}x
                        </span>
                      </div>
                    </div>
                  );
                }
              })
              : null}
            {this.props.isAuthenticated ? (
              items.length > 0 ? (
                <div>
                  <div className="uk-padding-small uk-flex uk-text-left uk-text-white">
                    <h5>Total: ₦{this.props.context.total}</h5>
                  </div>
                  {this.props.router.pathname != "/checkout" ? (
                    <div className="uk-padding-small">
                      <Link href="/checkout">
                        <button className="uk-button uk-button-default">
                          <a>Order</a>
                        </button>
                      </Link>
                    </div>
                  ) : null}
                </div>
              ) : (<p className="uk-text-danger">No Items in cart</p>)
            ) : (
                <h5>
                  <Link href="/signin">
                    <a>Sign In to Order</a>
                  </Link>
                </h5>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  withContext,
  defaultPage,
  withRouter
)(Cart)