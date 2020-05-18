import { useRouter } from "next/router";  
import Query from "../../components/query";  
import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";  
import RESTAURANT_QUERY from "../../apollo/queries/restaurant/restaurant";
import Link from "next/link";
import defaultPage from "../../components/hocs/defaultPage";
import DishCard from '../../components/DishCard';

const Restaurant = () => {  
  const router = useRouter();
  return (
    <Query query={RESTAURANT_QUERY} id={router.query.id}>
      {({ data: { restaurant } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? restaurant.image.url
            : process.env.API_URL + restaurant.image?.url;
        console.log(restaurant)
        return (
          <div className="uk-container">
            <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
              data-src={imageUrl}
              data-srcset={imageUrl}
              data-uk-img
            >
              <h1>{restaurant.name}</h1>
            </div>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={restaurant.description} />
                <h4 className="uk-text-danger">Dishes Served</h4>
                <div className="uk-flex">
                  {
                    restaurant.dishes.length > 0 ? (
                    <div className="uk-child-width-1-4@m uk-grid-match" data-uk-grid>
                      {restaurant.dishes.map((dish, i) => {
                          return (
                          <DishCard dish={dish} key={`blog__${restaurant.id}`} />
                          )
                        })}
                    </div>
                    ) : (<p>Sorry No dish was found for this restaurant</p>)
                  }
                </div>
                <hr />
                <p> Published on: {' '}
                  <Moment format="MMM Do YYYY">{restaurant.updated_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default defaultPage(Restaurant);