import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentsList from './CommentsList';

class Article extends Component {
  state = { article: '', comment_body: '' };

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
    const { title, body, author, created_at } = this.state.article;
    const postedAt = created_at;

    return (
      <div>
        {title}
        <p>{body}</p>
        <p>Author: {author}</p>
        <p>Posted at: {postedAt}</p>

        <CommentsList article_id={this.props.article_id} username={this.props.username} />
      </div>
    );
  }
}

export default Article;
