import { useRouter } from "next/router";  
import Query from "../components/query";  
import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";  
import BLOG_QUERY from "../apollo/queries/blog/blog";

const Article = () => {  
  const router = useRouter();
  return (
    <Query query={BLOG_QUERY} id={router.query.id}>
      {({ data: { blog } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? blog.image.url
            : process.env.API_URL + blog.image.url;
        return (
          <div className="uk-container">
            <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
              data-src={imageUrl}
              data-srcset={imageUrl}
              data-uk-img
            >
              <h1>{blog.title}</h1>
            </div>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={blog.content} />
                <p> Published on: {' '}
                  <Moment format="MMM Do YYYY">{blog.updated_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;