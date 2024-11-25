import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/article/1">게시글 1번</Link>
      </li>
      <li>
        <Link to="/article/2">게시글 2번</Link>
      </li>
      <li>
        <Link to="/article/3">게시글 3번</Link>
      </li>
    </ul>
  );
};
export default Articles;
