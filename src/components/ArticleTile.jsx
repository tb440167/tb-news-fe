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

        {/* <div className="topic">{article.topic.toUpperCase()}</div> */}
        <div className="article-body">{article.body}</div>
        <div className="author">
          <div>posted by: {article.author}</div>
          <div>{article.comment_count} comments</div>
        </div>
        <div className="time">
          {article.created_at.slice(0, 10)} @ {article.created_at.slice(11, 16)}
        </div>

        <div className="voter">
          <Voter id={article.article_id} type="articles" votes={article.votes} />
        </div>
      </article>
    );
  }
}

export default ArticleTile;
