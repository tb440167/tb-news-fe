import React, { Component } from 'react';
import * as api from '../utils/api';
import { Button } from 'react-bootstrap';
import down_sort from '../img/down_sort.png';
import up_sort from '../img/up_sort.png';

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
        <Button variant="success" size="sm" onClick={() => this.handleClick(1)} disabled={this.state.optiVote > 0}>
          <img src={up_sort} alt="UP VOTE"></img>
        </Button>

        <div>{this.state.optiVote + this.props.votes}</div>
        <Button variant="danger" size="sm" onClick={() => this.handleClick(-1)} disabled={this.state.optiVote < 0}>
          <img src={down_sort} alt="DOWN VOTE"></img>
        </Button>
        <div className="article-downVote"></div>
      </div>
    );
  }
}

export default Voter;
