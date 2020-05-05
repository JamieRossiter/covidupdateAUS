import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import NewsItem from "../subcomponents/NewsItem.js";
import { Item, Grid } from "semantic-ui-react";

const News = () => {
  //State Declaration
  const [newsCards, updateNewsCards] = useState([]);

  //Effect Hook
  useEffect(() => {
    fetch("/.netlify/functions/key")
      .then((res) => res.json())
      .then((data) => {
        let articles = data.articles;
        let articleDates = filterArticleDate(data.articles);
        createNewsCards(articles, articleDates);
      });
  }, []);

  //Function

  function filterArticleDate(data) {
    let articleDatesTimes = data.map((article) =>
      article.publishedAt.split("T")
    );
    let articleDates = articleDatesTimes.map((date) => date[0]);
    return articleDates;
  }

  function createNewsCards(articles, articleDates) {
    let i;
    let cards = [];
    for (i = 0; i < 6; i++) {
      if (articles[i]) {
        cards.push(
          <NewsItem
            key={i}
            header={!articles ? "No Header" : articles[i].title}
            image={!articles ? "" : articles[i].urlToImage}
            publishInfo={
              !articles
                ? ""
                : `Published by ${articles[i].source.name} on ${articleDates[i]}`
            }
            description={!articles ? "" : articles[i].description}
            link={!articles ? "" : articles[i].url}
          ></NewsItem>
        );
      }
    }
    updateNewsCards(cards);
  }

  return (
    <div id="nav-news" className="news-container">
      <Item.Group link divided>
        {newsCards}
      </Item.Group>
    </div>
  );
};

export default News;
