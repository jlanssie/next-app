import { useEffect, useState } from "react";
import Link from "next/link";

export const CatFacts = () => {
  const [loading, setLoading] = useState(true);
  const [catFacts, setCatFacts] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://cat-fact.herokuapp.com/facts/",
    )
      .then((response) => response.json())
      .then((payload) => {
        console.debug(payload);
        setCatFacts(payload);
        setLoading(false);
      });
  }, []);

  return (
    <div className="article-list">
      {loading && <div className="loader"/>}
      {catFacts.map((CatFact, index) => {
        return (
          <article key={index}>
            <p>{CatFact.text}</p>
          </article>
        );
      })}
    </div>
  );
};