import { useRouter } from "next/router";  
import Blogs from "../components/Blogs";  
import Query from "../components/query";  
import CATEGORIES_BLOGS_QUERY from "../apollo/queries/category/blogs";

const Category = () => {  
  const router = useRouter();

  return (
    <Query query={CATEGORIES_BLOGS_QUERY} id={router.query.id}>
      {({ data: { categories } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>Showing: {categories.name}</h1>
                <Blogs articles={categories.blogs} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;  