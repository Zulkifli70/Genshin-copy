import { useState, useEffect } from "react";
import { newsList, images } from "../constant";
import { CiSquarePlus } from "react-icons/ci";

const News = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className="news-section">
      <div className="news-header">
        <h1 className="text-5xl text-white font-semibold mt-45">NEWS</h1>
      </div>
      <div className="news-card">
        <div className="news-img">
          {images.map((image, index) => (
            <img
              src={image.imgUrl}
              alt={images.imgAlt}
              className={`news-image-transition ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              key={image.imgUrl}
            />
          ))}
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
            <div className="flex justify-end mr-5 mt-3 items-center text-white">
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
