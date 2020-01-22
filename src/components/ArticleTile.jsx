import React, { Component } from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';

class ArticleTile extends Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>-[
        {article.topic}]{article.votes}
        <Voter id={article.article_id} type="articles" votes={article.votes} />
      </div>
    );
  }
}

export default ArticleTile;
