import React from "react";
export default function NewsItem(props) {
  // myStyle = {
  //   backgroundColor: props.mode === "light" ? "white" : "#11052C",
  //   color: props.mode === "light" ? "black" : "white",
  // };

  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <div className="card my-3">
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          position: "absolute",
          right: "0",
        }}
      >
        <span className=" badge rounded-pill bg-danger">{source}</span>
      </div>
      <img
        src={
          imageUrl
            ? imageUrl
            : "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202109/breaing_news_sept_17_1200x768.jpeg?jA0ghKz3VYxn0ttkXHcEV3_2zM.QC5kL&size=770:433"
        }
        className="card-img-top"
        alt="News"
        style={{ height: "215px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text">
          <small className="text-muted">
            By {author ? author : "Unknown"} on{" "}
            {new Date(publishedAt).toGMTString()}
          </small>
        </p>

        <a
          href={newsUrl}
          rel="noreferrer"
          target="_blank"
          className="btn btn-sm btn-outline-secondary"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
