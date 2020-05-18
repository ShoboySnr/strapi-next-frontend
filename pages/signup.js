import React from "react";
import { strapiRegister } from "../utils/auth";
import Link from "next/link";
import Router from "next/router";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        username: "",
        password: ""
      },
      loading: false,
      error: ""
    };
  }

  onChange(propertyName, event) {
    const { data } = this.state;
    data[propertyName] = event.target.value;
    this.setState({ data });
  }
  onSubmit() {
    const {
      data: { email, username, password }
    } = this.state;
    this.setState({ loading: true });

    strapiRegister(username, email, password)
      .then(() => this.setState({ loading: false }))
      .catch(error => this.setState({ error: error }));
  }

  render() {
    const { error } = this.state;
    return (
      <div className="uk-container">
        <div className="uk-flex uk-flex-center uk-text-center uk-padding">
          <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            <h3 className="uk-card-title">Sign Up</h3>
            <div class="uk-alert-danger" uk-alert>
                <p>{error}</p>
            </div>
            <div class="uk-padding-small">
              <input class="uk-input" type="text" placeholder="Username"  onChange={this.onChange.bind(this, "username")} />
            </div>
             <div class="uk-padding-small">
              <input class="uk-input" type="email" placeholder="Email" onChange={this.onChange.bind(this, "email")} />
            </div>
             <div class="uk-padding-small">
              <input class="uk-input" type="password" placeholder="Password"  onChange={this.onChange.bind(this, "password")} />
            </div>
            <div className="uk-padding-small">
              <button class="uk-button uk-button-primary" type="submit" onClick={this.onSubmit.bind(this)}> Create account</button>
            </div>
            <span className="uk-text-left">
              <Link href="/signin">
                <a>
                  Login Instead
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  };
};


export default SignUp;