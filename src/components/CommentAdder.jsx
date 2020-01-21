import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {
    value: ''
  };

  changeHandler = event => {
    this.setState({ value: event.target.value })
  };


  render() {
    return (
      <div>
        {' '}
        <form onSubmit={this.props.addCommentHandler}>
          <label>
            <textarea value={this.state.value} onChange={this.changeHandler}></textarea>
            <button>Add Comment!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default CommentAdder;
