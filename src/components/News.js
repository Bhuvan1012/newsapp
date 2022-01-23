import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitaliseFirstLetter = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
  };
  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    );
    props.setProgress(30);
    let resultArticles = await response.json();
    props.setProgress(70);
    setArticles(resultArticles.articles);
    setTotalResults(resultArticles.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitaliseFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  // handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews();
  // };

  // handleNextClick = async () => {
  //   setPage(page+1)
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`
    );
    setPage(page + 1);
    let resultArticles = await response.json();
    setArticles(articles.concat(resultArticles.articles));
    setTotalResults(resultArticles.totalResults);
    // setLoading(false);
  };

  return (
    <>
      {/* <div className="container my-3"> */}
      <h1 className="my-4 mb-4 text-center">
        NewsMonkey - Top{" "}
        {props.category !== "general" && capitaliseFirstLetter(props.category)}{" "}
        Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center", color: "#FFFFFF8C" }}>
            <b>You have seen it all.</b>
          </p>
        }
      >
        <div className="container">
          <div className="row">
            {!loading &&
              articles.map((article) => {
                return (
                  <div className="col-md-4" key={article.url}>
                    <NewsItem
                      title={
                        article.title
                          ? article.title.slice(0, 45)
                          : "No Title found"
                      }
                      description={
                        article.description
                          ? article.description.slice(0, 60)
                          : "No Description found"
                      }
                      imageUrl={article.urlToImage}
                      newsUrl={article.url}
                      author={article.author}
                      publishedAt={article.publishedAt}
                      source={article.source.name}
                      mode={props.mode}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
      {/* </div> */}

      {/* <div className="container  d-flex justify-content-between mb-5">
          <button
            type="button"
            className="btn btn-dark "
            disabled={page <= 1}
            onClick={handlePrevClick}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark "
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            onClick={handleNextClick}
          >
            Next &raquo;
          </button>
        </div> */}
    </>
  );
}
News.defaultProps = {
  pageSize: 8,
  country: "in",
  category: "general",
  author: "Anonymous",
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
};
