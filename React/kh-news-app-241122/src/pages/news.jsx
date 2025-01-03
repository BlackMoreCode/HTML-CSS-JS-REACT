import { useCallback, useState } from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default News;
