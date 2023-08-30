import React, { useState, useEffect } from "react";
import YouTube from "./Youtube";

const News = () => {
    const [allNews, setAllNews] = useState([]);
    useEffect(() => {
      var today = new Date();
      var dd = String(today.getDate() + 1).padStart(2, "0");
      var mm = String(today.getMonth()).padStart(2, "0"); //January is 0!
      mm === "00" && (mm = "01");
      var yyyy = today.getFullYear();
      today = yyyy + "-" + mm + "-" + dd;
      console.log(today);
      fetch(
        `https://newsapi.org/v2/everything?q=apple&from=${today}&to=${today}&sortBy=popularity&apiKey=890cb6d87dcc4c85a439df7cf40d08f5`
      )
        .then((res) => res.json())
        .then((data) => {
          let newsArticles = data.articles;
          setAllNews(newsArticles);
        });
    }, []);
    console.log(allNews);
  return (
    <div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest News
              </div>
            </div>
            {allNews.slice(0, 6)?.map((news, i) => {
              let newsUrl = news.url;
              let newsTitle = news.title;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="videoWrapper">
                    <div className="videoThumbnail">
                      <a href={newsUrl} target="_blank">
                        <img src={news.urlToImage} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={newsUrl} target="_blank">
                          {news.title}
                        </a>
                      </div>
                      <div className="videoDesc">{news.description}</div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
      <YouTube />
    </div>
  );
};

export default News;
