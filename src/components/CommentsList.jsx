import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentTile from './CommentTile';

class CommentsList extends Component {
  state = { comments: [] };

  componentDidMount() {
    api.getCommentsByArticle(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  }
  render() {
    const { comments } = this.state;
    console.log(this.state.comments);
    return (
      <div>
        {comments.map(comment => {
          return <CommentTile comment={comment} key={comment.comment_id}/>
        })}
      </div>
    );
  }
}

export default CommentsList;
