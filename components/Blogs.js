import React from "react";
import Link from "next/link"
import Card from "./card";
import CATEGORIES_QUERY from "../apollo/queries/category/blogcategories";
import Query from "../components/query";  

const Blogs = ({ blogs }) => {  
  const leftBlogsCount = Math.ceil(blogs.length / 5);
  const leftBlogs = blogs.slice(0, leftBlogsCount);
  const rightBlogs = blogs.slice(leftBlogsCount, blogs.length);

  return (
    <div>
      <div className="uk-flex-inline">
        <Query query={CATEGORIES_QUERY} id={null}>
          {({ data: { blogcategories } }) => {
              return (
              <ul className="uk-navbar-nav">
                {blogcategories.map((category, i) => {
                    return (
                      <li key={category.id}>
                        <Link
                          href={{
                            pathname: "category",
                            query: { id: category.id }
                          }}
                        >
                          <a className="uk-link-reset">{category.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )
          }}
          </Query>
    </div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftBlogs.map((blog, i) => {
            return <Card blog={blog} key={`blog__${blog.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightBlogs.map((blog, i) => {
              return <Card blog={blog} key={`blog__${blog.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;  