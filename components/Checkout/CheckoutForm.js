import React from "react";

import CardSection from "./CardSection";
import { injectStripe } from "react-stripe-elements";
import Strapi from "strapi-sdk-javascript/build/main";
import Router from "next/router";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);
/* components/Checkout/CheckoutForm.js */
class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        address: "",
        city: "",
        state: "",
        stripe_id: ""
      },
      error: ""
    };
    this.submitOrder = this.submitOrder.bind(this);
  }

  onChange(propertyName, e) {
    const { data } = this.state;
    data[propertyName] = e.target.value;
    this.setState({ data });
  }

  submitOrder() {
    const { context } = this.props;
    const { data } = this.state;
    console.log(context);
    console.log(this.props.stripe.createToken())
    this.props.stripe.createToken()
      .then(res => {
        strapi
          .createEntry("orders", {
            amount: context.total,
            dishes: context.items,
            address: data.address,
            city: data.city,
            state: data.state,
            token: res.token.id
          })
          .then(Router.push("/"));
      })
      .catch(err => this.setState({ error: err }))
  }

  render() {
    return (
      <div className="paper">
        <h5>Your information:</h5>
        <hr />
        <div className="uk-flex">
          <div className="uk-padding-small">
            <label for="address">Address</label>
            <input type="text" id="address" className="uk-input" placeholder="Address" onChange={this.onChange.bind(this, "address")} />
          </div>
        </div>
        <div className="uk-flex">
          <div className="uk-padding-small">
            <label for="city">City</label>
            <input type="text" id="city" className="uk-input" placeholder="City" onChange={this.onChange.bind(this, "city")} />
          </div>
          <div className="uk-padding-small">
            <label for="state">State</label>
            <input className="uk-input" id="state" type="text" onChange={this.onChange.bind(this, "state")} />
          </div>
        </div>

        <CardSection
          context={this.props.context}
          data={this.state.data}
          submitOrder={this.submitOrder}
        />
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);