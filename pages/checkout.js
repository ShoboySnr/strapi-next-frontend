import React, { Component } from "react";
import Link from 'next/link';
import { compose } from "recompose";
import Router from "next/router";
import { StripeProvider, Elements } from "react-stripe-elements";
import defaultPage from "../components/hocs/defaultPage";
import Cart from "../components/Cart/Cart";
import InjectedCheckoutForm from "../components/Checkout/CheckoutForm";
import { withContext } from "../components/Context/AppProvider";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      stripe: null
    };
  }

  componentDidMount() {
    const { context } = this.props;
    const { isAuthenticated } = this.props;
    if (context.items.length === 0 || !isAuthenticated) {
      Router.push("/");
    }
    this.setState({
      stripe: window.Stripe('pk_test_ISu3VoJpEOBNDmcfIV05voeF00jhh1X2j5')
    });
  }

  render() {
    const { isAuthenticated } = this.props;
    const { context } = this.props;
    if (context.items.length === 0) {
      return (
        <div className="uk-container uk-text-center">
          <p>Loading</p>
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="uk-container">
          <div className="uk-flex uk-flex-center">
            <div className="uk-card uk-card-default uk-card-body uk-flex">
              <div>
                <h1>Checkout</h1>
                <Cart isAuthenticated={isAuthenticated} />
              </div>
              <div className="uk-padding-small">
                <StripeProvider stripe={this.state.stripe}>
                  <Elements>
                    <InjectedCheckoutForm context={this.props.context} />
                  </Elements>
                </StripeProvider>
              </div>  
            </div> 
          </div>
        </div>
      );
    }
  }
}
export default compose(
  defaultPage,
  withContext
)(Checkout);