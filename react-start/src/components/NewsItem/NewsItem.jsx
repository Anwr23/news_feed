import React, { useEffect, useState } from 'react';
import './newsItem.css';

function NewsItem({ article }) {
  return (
    <>
    <div className="news-item">
      <div className="news_left">
        <img src={article.urlToImage || '#'} className='news_img' alt='News' />
        <div className="news_desc">
          <span>Published at: {article.publishedAt}</span><br />
          <span>Author: {article.author}</span>
        </div>
      </div>
      <div className="news_right">
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <a href={article.url} className="btn btn-mobile-wide">Read More</a>
      </div>
    </div>
    <hr />
    </>
  );
}

function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Loaded data:', data);
        setArticles(data.articles);
      })
      .catch(error => console.error('Error loading news:', error));
  }, []);

  return (
    <div>
      {articles.length === 0 && <p>Loading news...</p>}
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
