import React, { Component } from 'react';
import * as api from '../utils/api';
import {Navbar, Nav, DropdownButton, Dropdown} from 'react-bootstrap'

class NavBar extends Component {
  state = {
    topics: []
  };
  
  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  }

  handleChange = (event, eventkey) => {
    event.preventDefault()
const user = event.nativeEvent.target.text
this.props.handleUserChoice(user)
    
  }

  render() {
    const users = ['jessjelly', 'tickle122', 'happyamy2016', 'cooljmessy', 'weegembump', "grumpy19"];
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Navbar.Brand href="/">{"< " }NC News /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    {this.state.topics.map((topic, index) => {
  return (

      <Nav.Link href={`/topics/${topic.slug}`} key={topic.slug}>
        {topic.slug}
        </Nav.Link>

  );
})}
  
    </Nav>
    <Nav>

  <DropdownButton drop="left" variant="secondary" title={this.props.username}>
        {users.map(user => {

          return <Dropdown.Item eventkey={user} onClick={this.handleChange} key={user}>{user}</Dropdown.Item>
        })}
       
      </DropdownButton>

     
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default NavBar;
