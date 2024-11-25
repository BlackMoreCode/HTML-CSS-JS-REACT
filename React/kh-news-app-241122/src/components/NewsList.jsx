import styled from "styled-components";
import NewsItem from "./NewsItems";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = category === "all" ? "all" : `category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&${query}&apiKey=3c00fd60d124498f93c5546bad7cb91f`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [category]); // 의존성 배열이 비어 있으면 mount 시점 (즉, 컴포넌트가 렌더링 이후)에 호출

  return (
    <NewsListBlock>
      {articles &&
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
    </NewsListBlock>
  );
};
export default NewsList;
