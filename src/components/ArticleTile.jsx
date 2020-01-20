import React from 'react';
import { Link } from '@reach/router';

const ArticleTile = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div>
        {article.title}-[
        {article.topic}]
      </div>
    </Link>
  );
};

export default ArticleTile;
