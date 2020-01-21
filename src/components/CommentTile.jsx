import React, { Component } from 'react';
import * as api from "../utils/api"

class CommentTile extends Component {
state = {optiVote: 0}

handleClick =(event) =>{
  const increment = +event.target.value
  const comment_id = this.props.comment.comment_id
  
  api.patchCommentVotes(comment_id, this.state.optiVote)

  this.setState(currentState => {
    return ({optiVote: currentState.optiVote + increment})
    })

}


  render() {
    let upDisbaled = false
    let downDisabled = false
    if(this.state.optiVote === 1) {
      upDisbaled=true
    } 
    if(this.state.optiVote === -1) {
      downDisabled=true
    }

    return (
      <div>
      <p>{this.props.comment.body}</p>
     <p>{this.props.comment.author}</p> <button onClick={this.handleClick} value="1" disabled={upDisbaled}>upVote</button>Votes: {this.state.optiVote + this.props.comment.votes}<button onClick={this.handleClick} value="-1" disabled={downDisabled}>downVote</button>
      </div>
    );
  }
}

export default CommentTile;
