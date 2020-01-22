import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = { optiVote: 0 };

  handleClick = num => {
    api.patchCommentVotes(this.props.id, num, this.props.type);

    this.setState(currentState => {
      return { optiVote: currentState.optiVote + num };
    });
  };

  render() {
    return (
      <div>
        Votes: {this.state.optiVote + this.props.votes}
        <button onClick={() => this.handleClick(1)} disabled={this.state.optiVote > 0}>
          upVote
        </button>
        <button onClick={() => this.handleClick(-1)} disabled={this.state.optiVote < 0}>
          downVote
        </button>
      </div>
    );
  }
}

export default Voter;
