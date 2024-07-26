import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [lastPage, setLastPage] = useState(1);

  const toInitCap = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  document.title = `InfiNews - ${toInitCap(props.category)}`;

  const fetchNews = async (pageNum) => {
    setLoading(true);
    props.setProgress(20);
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&page=${pageNum}&pagesize=${props.pagesize}&category=${props.category}`;
    let rowdata = await fetch(URL);
    let data = await rowdata.json();
    setArticles(data.articles);
    setTotalArticles(data.totalResults);
    setLoading(false);
    props.setProgress(100);
    setLastPage(Math.ceil(data.totalResults / props.pagesize));
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const nextClick = async () => {
    if (page + 1 <= lastPage) {
      setPage(page + 1);
    }
  };

  const prevClick = async () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const firstClick = async () => {
    setPage(1);
  };

  const lastClick = async () => {
    setPage(lastPage);
  };

  return (
    <div>
      <div className='container my-5 py-3'>
        <h1 style={{marginTop:'20px'}}>{toInitCap(props.category)} - Top News</h1>
        {loading && <Spinner />}
        <div className='row'>
          {!loading &&
            articles.map((element) => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ''}
                    description={
                      element.description ? element.description.trim(0, 50) + '...' : ''
                    }
                    imgurl={
                      element.urlToImage
                        ? element.urlToImage
                        : 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'
                    }
                    newsurl={element.url}
                    dateofpublish={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                    category={props.category}
                  />
                </div>
              );
            })}
          <div className='d-flex  justify-content-center'>
            <button
              type='button'
              disabled={page === 1}
              className='btn btn-dark mx-2'
              onClick={firstClick}
            >
              First
            </button>
            <button
              type='button'
              disabled={page === 1}
              className='btn btn-dark mx-2'
              onClick={prevClick}
            >
              Prev.
            </button>
            <button
              type='button'
              disabled={page === lastPage}
              className='btn btn-dark mx-2'
              onClick={nextClick}
            >
              Next
            </button>
            <button
              type='button'
              disabled={page === lastPage}
              className='btn btn-dark mx-2'
              onClick={lastClick}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// News.defaultProps = {
//   country: 'in',
//   pagesize: 5,
//   apikey: '4b7e3ca417dc4363907c58a5ea84e703',
//   category: 'Home',
// };

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  apikey: PropTypes.string,
  category: PropTypes.string,
};

export default News;
