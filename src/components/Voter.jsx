import React, { Component } from 'react';
import * as api from '../utils/api';


class Voter extends Component {
  state = { optiVote: 0, err: '' };

  handleClick = num => {
    api.patchCommentVotes(this.props.id, num, this.props.type).catch(({ response: { data } }) => {
      this.setState({ err: data.message });
    });

    this.setState(currentState => {
      return { optiVote: currentState.optiVote + num };
    });
  };

  render() {
    const { err } = this.state;
    if (err) return 'Voting not available';
    return (
      <div>
        <div className="article-upVote">
          <button onClick={() => this.handleClick(1)} disabled={this.state.optiVote > 0}>
            upVote
          </button>
        </div>
        <div className="article-voteCount">Votes: {this.state.optiVote + this.props.votes}</div>
        <div className="article-downVote">
          <button onClick={() => this.handleClick(-1)} disabled={this.state.optiVote < 0}>
            downVote
          </button>
        </div>
      </div>
    );
  }
}

export default Voter;
