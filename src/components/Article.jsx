import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentsList from './CommentsList';

class Article extends Component {
  state = { article: '', showComments: false, comment_body: '' };

  componentDidMount() {
    api.getSingleArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }

  handleCommentClick = () => {
    this.setState({ showComments: !this.state.showComments });
  };

  handleCommentSubmit = event => {
    event.preventDefault();
    const { article_id, username } = this.props;
    const body = this.state.comment_body;

    api.postNewComment(article_id, username, body).then(comment => {
      this.setState({ comment_body: '' });
    });
  };

  handleOnChange = event => {
    this.setState({ comment_body: event.target.value });
  };

  render() {
    const { article } = this.state;
    const { showComments } = this.state;
    return (
      <div>
        {article.title}
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <p>Posted at: {article.created_at}</p>
        <form onSubmit={this.handleCommentSubmit}>
          <label>
            <textarea id="comment_body" name="comment" onChange={this.handleOnChange} value={this.state.value}></textarea>
            <button>Add Comment!</button>
          </label>
        </form>
        <p>
          <button onClick={this.handleCommentClick}>Show {article.comment_count} Comments</button>
        </p>
        {showComments ? <CommentsList article_id={article.article_id} /> : null}
      </div>
    );
  }
}

export default Article;
