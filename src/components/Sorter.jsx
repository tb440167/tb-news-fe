import React from 'react';
import down_sort from '../img/down_sort.png';
import up_sort from '../img/up_sort.png';
import { Container, Navbar } from 'react-bootstrap';

const Sorter = props => {
  console.log(props);

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light" className="sorter">
        <Navbar.Brand className="sortItem">
          <img src={up_sort} alt="sort" onClick={() => props.handleClick('created_at', 'asc')} />
          Date
          <img src={down_sort} alt="sort" onClick={() => props.handleClick('created_at', 'desc')} />
        </Navbar.Brand>
        <Navbar.Brand className="sortItem">
          <img src={up_sort} alt="sort" onClick={() => props.handleClick('comment_count', 'asc')} />
          Comments
          <img src={down_sort} alt="sort" onClick={() => props.handleClick('comment_count', 'desc')} />
        </Navbar.Brand>
        <Navbar.Brand className="sortItem">
          <img src={up_sort} alt="sort" onClick={() => props.handleClick('votes', 'desc')} />
          Votes <img src={down_sort} alt="sort" onClick={() => props.handleClick('votes', 'desc')} />
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default Sorter;

// <div className="sorter">

// <div className="sortItem">
//   <img src={up_sort} alt="sort" onClick={() => props.handleClick('created_at', 'asc')} />
//   Date
//   <img src={down_sort} alt="sort" onClick={() => props.handleClick('created_at', 'desc')} />
// </div>
// <div className="sortItem">
//   <img src={up_sort} alt="sort" onClick={() => props.handleClick('comment_count', 'asc')} />
//   Comments
//   <img src={down_sort} alt="sort" onClick={() => props.handleClick('comment_count', 'desc')} />
// </div>
// <div className="sortItem">
//   <img src={up_sort} alt="sort" onClick={() => props.handleClick('votes', 'desc')} />
//   Votes
//   <img src={down_sort} alt="sort" onClick={() => props.handleClick('votes', 'desc')} />
// </div>
// </div>
