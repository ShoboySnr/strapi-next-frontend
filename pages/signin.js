import React from "react";
import Cookies from "js-cookie";
import defaultPage from "../components/hocs/defaultPage";
import { strapiLogin } from "../utils/auth";
import Link from "next/link";
import Router from "next/router";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      error: ""
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      Router.push("/"); // redirect if you're already logged in
    }
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
    const { context } = this.props;

    this.setState({ loading: true });

    strapiLogin(email, password).then(() => console.log(Cookies.get("user")));
  }

  render() {
    const { error } = this.state;
    return (
      <div className="uk-container">
        <div className="uk-flex uk-flex-center uk-padding">
          <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            <h3 className="uk-card-title uk-text-center">Sign In</h3>
            <div class="uk-alert-danger" uk-alert>
                <p>{error}</p>
            </div>
             <div class="uk-padding-small">
              <input class="uk-input" type="email" placeholder="Email" onChange={this.onChange.bind(this, "email")} />
            </div>
             <div class="uk-padding-small">
              <input class="uk-input" type="password" placeholder="Password" onChange={this.onChange.bind(this, "password")} />
              <span className="uk-text-left uk-text-italic uk-text-small">
                <Link href="">
                  <a>
                   Forget Password
                  </a>
                </Link>
            </span>
            </div>
            <div className="uk-padding-small uk-text-center">
              <button class="uk-button uk-button-primary" type="submit" onClick={this.onSubmit.bind(this)}> Sign In</button>
            </div>
            <div className="uk-text-center">
              <Link href="/signup">
                <a>
                  Register Instead
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};


export default SignIn;