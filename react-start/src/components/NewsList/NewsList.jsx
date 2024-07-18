import React from 'react';
import NewsItem from './../NewsItem/NewsItem';
import './newsList.css';

function NewsList({ news }) {
  return (
    <div className="newsItem">
      <h1 className='title'>
        News Feed
      </h1>
      <div className="news_items">
        <NewsItem />
      </div>
    </div>
  );
}

export default NewsList;
