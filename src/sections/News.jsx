import React from "react";
import { newsList } from "../constant";
import { CiSquarePlus } from "react-icons/ci";

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
          <div className="p-5">
            <div className="border-b-4 border-[rgba(241,190,50,0.14)]">
              <h2 className="border-b-4 w-fit mb-[-4px] border-[rgba(241,190,50,0.79)] text-xl py-3 px-4 text-[rgba(241,190,50,0.79)]">
                Latest
              </h2>
            </div>
            <div className="news">
              {newsList.map((news) => (
                <div className="news-link">
                  <a href="#">{news.newsTitle}</a>
                  <p>{news.newsDate}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end mr-5 mt-6 items-center text-white">
              <a className="flex items-center gap-2 rounded-2xl hover:text-[rgba(241,190,50,0.79)]  cursor-pointer">
                <CiSquarePlus size={30} color="rgba(241,190,50,0.79)" />
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
