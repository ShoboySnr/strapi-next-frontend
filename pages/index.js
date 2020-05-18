import React from "react";
import Blogs from "../components/Blogs";  
import Query from "../components/query";  
import BLOGS_QUERY from "../apollo/queries/blog/blogs";
import defaultPage from "../components/hocs/defaultPage";

class Home extends React.Component {
  constructor(props) {
    super(props);
    //query state will be passed to RestaurantList for the filter query
    this.state = {
      query: ""
    };
   }
  
  onChange(e) {
    //set the state = to the input typed in the search Input Component
    //this.state.query gets passed into RestaurantList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }
  render() {
    return (
      <div>
        <div className="uk-section">
          <div className="uk-container">
            <h1>Blog</h1>
            <Query query={BLOGS_QUERY}>
              {({ data: { blogs } }) => {
                return <Blogs blogs={blogs} />;
              }}
            </Query>
          </div>
        </div>
      </div>
    );
  };   
};

export default defaultPage(Home);