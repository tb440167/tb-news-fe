import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentTile from './CommentTile';
import CommentAdder from './CommentAdder';

class CommentsList extends Component {
  state = { comments: [] };

  componentDidMount() {
    api.getCommentsByArticle(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }

  addCommentHandler = event => {
    event.preventDefault();
    const body = event.target.elements[0].value;
    api.postNewComment(this.props.article_id, this.props.username, body).then(comment => {
      this.setState(currentState => {
        return { comments: [comment, ...currentState.comments] };
      });
    });
  };

  render() {
    const { comments } = this.state;

    return (
      <div>
        <CommentAdder addCommentHandler={this.addCommentHandler} />
        {comments.map(comment => {
          return <CommentTile comment={comment} key={comment.comment_id} username={this.props.username} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
