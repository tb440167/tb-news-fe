import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {
    value: ''
  };

  changeHandler = event => {
    this.setState({ value: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.checker !== this.props.checker) this.setState({ value: '' });
  }

  render() {
    let onOff = true;
    if (this.state.value.length > 2) onOff = false;
    return (
      <div>
        <form onSubmit={this.props.addCommentHandler}>
          <label>
            <textarea value={this.state.value} onChange={this.changeHandler} placeholder="Enter your comment here!"></textarea>
            <button disabled={onOff}>Add Comment!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default CommentAdder;
