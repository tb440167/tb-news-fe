import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';

const Sorter = props => {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light" className="sorter">
        <Navbar.Brand className="sortItem">
          <Button variant="dark" onClick={() => props.handleClick('created_at', 'desc')}>
            Newest
          </Button>
        </Navbar.Brand>
        <Navbar.Brand className="sortItem">
          <Button variant="dark" onClick={() => props.handleClick('comment_count', 'desc')}>
            Most Popular
          </Button>
        </Navbar.Brand>
        <Navbar.Brand className="sortItem">
          <Button variant="dark" onClick={() => props.handleClick('votes', 'desc')}>
            Most Liked
          </Button>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default Sorter;
