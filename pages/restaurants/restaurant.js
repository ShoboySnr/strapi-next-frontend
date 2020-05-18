import { useRouter } from "next/router";  
import Query from "../../components/query";  
import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";  
import RESTAURANT_QUERY from "../../apollo/queries/restaurant/restaurant";
import Link from "next/link";
import defaultPage from "../../components/hocs/defaultPage";

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
                <p>
                  {restaurant.dishes.map((dish, i) => {
                    return (
                      <ul key={dish.id} className="uk-list uk-list-divider">
                        <li>
                          <Link href={{ pathname: "dishes", query: { id: dish.id } }}>
                            <a>
                              <p>
                                {dish.name}
                             </p>
                            </a>
                          </Link>
                        </li>
                      </ul> 
                    )
                  })}
                </p>
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