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

        <CommentsList article_id={this.props.article_id} username={this.props.username} showComments={showComments} />
      </div>
    );
  }
}

export default Article;
