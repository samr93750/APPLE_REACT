import React, { useState, useEffect } from "react";

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDfvIinPmGfJ_7xUT-k4KIldSmdCaU4-Oo&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((res) => res.json())
      .then((data) => {
        const allVideos = data.items;
        setVideos(allVideos);
      });
  }, []);
  console.log(videos);
  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {videos?.map((video, i) => {
            let vidId = video.id.videoId;
            let videoLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="videoWrapper">
                  <div className="videoThumbnail">
                    <a href={videoLink} target="_blank">
                      <img src={video.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={videoLink} target="_blank">
                        {video.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">{video.snippet.description}</div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
};
export default YouTube;
