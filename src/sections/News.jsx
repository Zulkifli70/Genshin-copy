import React from "react";

const News = () => {
  return (
    <div className="news-section">
      <div className="news-header">
        <h1 className="text-5xl text-white font-semibold mt-45">NEWS</h1>
      </div>
      <div className="news-card">
        <div className="news-img">
          <img src="/event1.jpg" alt="event 1 lamia" />
        </div>
        <div className="news-list">
          <h2>Latest</h2>
        </div>
      </div>
    </div>
  );
};

export default News;
