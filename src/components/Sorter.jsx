import React from 'react';
import down_sort from '../img/down_sort.png';
import up_sort from '../img/up_sort.png';

const Sorter = props => {
  return (
    <div className="sortNav">
      <div className="sortNavItem">
        <img src={up_sort} alt="sort" onClick={() => props.handleClick('created_at', 'asc')} />
        Date
        <img src={down_sort} alt="sort" onClick={() => props.handleClick('created_at', 'desc')} />
      </div>
      <div className="sortNavItem">
        <img src={up_sort} alt="sort" onClick={() => props.handleClick('comment_count', 'asc')} />
        Comments
        <img src={down_sort} alt="sort" onClick={() => props.handleClick('comment_count', 'desc')} />
      </div>
      <div className="sortNavItem">
        <img src={up_sort} alt="sort" onClick={() => props.handleClick('votes', 'desc')} />
        Votes
        <img src={down_sort} alt="sort" onClick={() => props.handleClick('votes', 'desc')} />
      </div>
    </div>
  );
};

export default Sorter;
