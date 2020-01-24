import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentsList from './CommentsList';
import {Card} from "react-bootstrap"

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

    return (
<Card className="text-center">
  <Card.Header><Card.Title>{title}</Card.Title></Card.Header>
  <Card.Body>
    <Card.Text>
    <blockquote className="blockquote mb-0">
  {body}
  </blockquote>
    </Card.Text>

  </Card.Body>
  <Card.Footer className="text-muted">written by: {author}</Card.Footer><br/><br/>
  <CommentsList article_id={this.props.article_id} username={this.props.username} />
  
</Card>
    );
  }
}

export default Article;

