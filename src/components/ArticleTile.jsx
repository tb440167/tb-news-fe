import React, { Component } from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';

class ArticleTile extends Component {
  render() {
    const { article } = this.props;
    return (
      <article className="article-grid-container">
        <div className="title">
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
        </div>

        <div className="topic">{article.topic}</div>
        <div className="article-body">{article.body}</div>
        <div className="author">AUTHOR</div>
        <div className="time">Posted at 7pm</div>

        <div className="voter">
          <Voter id={article.article_id} type="articles" votes={article.votes} />
        </div>
      </article>
    );
  }
}

export default ArticleTile;
