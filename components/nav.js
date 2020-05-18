import React from "react";  
import Link from "next/link"
import { withRouter } from "next/router";
import Cookie from "js-cookie";
import { unsetToken } from "../utils/auth";
import defaultPage from "./hocs/defaultPage";
import { compose } from "recompose";
import { withContext } from "./Context/AppProvider";

class Nav extends React.Component {
   constructor(props) {
    super(props);
   }

  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, isAuthenticated };
  }
  render() {
    const { isAuthenticated, children, context } = this.props;
    return (
      <div>
        <div className="uk-container">
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link href="/">
                    <a>NEXT WITH STRAPI</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li>
                  <Link href="/">
                    <a className="uk-link-reset">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/restaurants">
                    <a className="uk-link-reset">Restaurants</a>
                  </Link>
                </li>
                <li>
                  <Link href="/carts">
                    <a className="uk-link-reset">Cart ({context.items.length})</a>
                  </Link>
                </li>
                {isAuthenticated ? (
                  <>
                    <li>
                      <Link href="/">
                        <a className="uk-link-reset" onClick={unsetToken}>Logout</a>
                      </Link>
                    </li>
                    <li>
                      <a href="">
                        <span className="uk-link-reset uk-text-primary"> Welcome {this.props.loggedUser}!</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/signin">
                        <a className="uk-link-reset">Sign In</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a className="uk-link-reset">Sign Up</a>
                      </Link>
                    </li>
                  </>
                  )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
};
export default compose(
  withRouter,
  defaultPage,
  withContext
)(Nav);