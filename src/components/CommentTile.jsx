import React, { Component } from 'react';
import Voter from './Voter';
import '../Comments.css';
import trash from '../img/bin.png';

class CommentTile extends Component {
  state = { optiVote: 0 };

  render() {
    const { comment } = this.props;
    return (
      <div className="singleComment">
        <div className="commentBody">{comment.body}</div>
        <div className="commentAuthor">{comment.author}</div>
        <div className="commentVoter">
          <Voter id={comment.comment_id} votes={comment.votes} type="comments" />
        </div>
        <div className="commentDelete">
          {this.props.username === comment.author ? (
            <img src={trash} alt="Delete your comment" onClick={() => this.props.handleDeleteClick(comment.comment_id)}></img>
          ) : null}
        </div>
      </div>
    );
  }
}

export default CommentTile;
