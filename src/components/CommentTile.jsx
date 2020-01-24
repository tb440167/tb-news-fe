import React, { Component } from 'react';
import Voter from './Voter';
import '../Comments.css';
import trash from '../img/bin.png';
import {Card} from "react-bootstrap"

class CommentTile extends Component {
  state = { optiVote: 0 };

  render() {
    const { comment } = this.props;
    return (
      <div>
<Card>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <div className="commentTile-grid-container">
        <div className="commentTile-voter">   <Voter id={comment.comment_id} votes={comment.votes} type="comments" /></div>
        <div className="commentTile-body">{comment.body}</div>
      
        </div>
        <footer className="blockquote-footer">
        by {comment.author}, @ {comment.created_at.slice(11, 16)} on {comment.created_at.slice(0, 10)}   {this.props.username === comment.author ? (
    <img src={trash} alt="Delete your comment" onClick={() => this.props.handleDeleteClick(comment.comment_id)}></img>
  ) : null}
      </footer>
     </blockquote>
       
  </Card.Body>
</Card>
           </div>
    );
  }
}

export default CommentTile;
