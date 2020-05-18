import React from "react";  
import Link from "next/link";

const Card = ({ blog }) => {  
const imageUrl =  
    process.env.NODE_ENV !== "development"
      ? blog.image.url
    : process.env.API_URL + blog.image.url;
  return (
    <Link href={{ pathname: "blog", query: { id: blog.id } }}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <img
              src={imageUrl}
              alt={blog.image.url}
              height="100"
            />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {blog.categories?.name}
            </p>
            <p id="title" className="uk-text-small">
              {blog.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;