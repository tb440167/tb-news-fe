import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentTile from './CommentTile';
import CommentAdder from './CommentAdder';
import Loader from './Loader';
import ErrHandler from './ErrHandler';

class CommentsList extends Component {
  state = { comments: [], err: '', isLoading: true };

  componentDidMount() {
    api
      .getCommentsByArticle(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        this.setState({ err: data.message, isLoading: false });
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

  handleDeleteClick = id => {
    api.deleteComment(id).then(() => {
      api.getCommentsByArticle(this.props.article_id).then(comments => {
        this.setState({ comments });
      });
    });
  };

  render() {
    const { comments, err } = this.state;
    if (this.state.isLoading) return <Loader />;
    if (err) return <ErrHandler err={err} />;
    return (
      <div>
        <CommentAdder addCommentHandler={this.addCommentHandler} />
        {comments.map(comment => {
          return <CommentTile comment={comment} key={comment.comment_id} username={this.props.username} handleDeleteClick={this.handleDeleteClick} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
