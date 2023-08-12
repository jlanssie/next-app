import { useEffect, useState } from "react";
import Link from "next/link";

export const ArticleList = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jlanssie",
    )
      .then((response) => response.json())
      .then((payload) => {
        console.debug(payload);
        setArticles(payload.items);
        setLoading(false);
      });
  }, []);

  return (
    <div className="article-list">
      {loading && <div className="loader"></div>}

      {articles.map((article, index) => {
        return (
          <article key={index}>
            <div className="txtWrapper">
              <p className="pubDate">{article.pubDate.substring(0, 10)}</p>

              <a href={article.guid} target="_blank" rel="noreferrer">
                <p>{article.title}</p>
                <p className="cta">Read more &#9205;</p>
              </a>
            </div>
            {/*<div className="imgWrapper">
              <a href={article.guid} target="_blank" rel="noreferrer">
                <img src={article.thumbnail} />
              </a>
        </div>*/}
            <div className="tagWrapper">
              {article.categories.length > 1 && (
                <>
                  {" "}
                  {article.categories.map((category, index) => {
                    return (
                      <p key={index} className="tag">
                        {category}
                      </p>
                    );
                  })}
                </>
              )}
            </div>
            <hr />
          </article>
        );
      })}
    </div>
  );
};
