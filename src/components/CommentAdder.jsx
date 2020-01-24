import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

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
    let buttonType = 'danger';
    if (this.state.value.length > 4) onOff = false;
    if (!onOff) buttonType = 'primary';
    return (
      <Form onSubmit={this.props.addCommentHandler}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Leave a comment!</Form.Label>
          <Form.Control as="textarea" rows="3" value={this.state.value} onChange={this.changeHandler} placeholder="Enter your comment here!" />
        </Form.Group>

        <Button variant={buttonType} type="submit" disabled={onOff}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default CommentAdder;
