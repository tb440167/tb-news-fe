import React, { Component } from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';
import {Card, Button} from 'react-bootstrap'

class ArticleTile extends Component {
  render() {
    const { article } = this.props;
    return (
      <Card>
      <Card.Header as="h5">{article.title}</Card.Header>
      <Card.Body>
               <Card.Text>
               <span className="articleTile-grid-container"><span className="articleTile-voter"><Voter id={article.article_id} type="articles" votes={article.votes} /></span><span className="articleTile-body">{article.body}</span></span>
        </Card.Text>
      <Link to={`/articles/${article.article_id}`}>  <Button variant="secondary"> Read More....</Button></Link> 
      </Card.Body>
      <Card.Footer className="text-muted"><span>posted by: <b>{article.author}</b></span><span>   @ {article.created_at.slice(11, 16)} on {article.created_at.slice(0, 10)} </span><span>// {article.comment_count} comments</span></Card.Footer>
    </Card>
    );
  }
}

export default ArticleTile;


// {/* <article className="article-grid-container">
// <span className="title">
//   <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
// </div>

// {/* <div className="topic">{article.topic.toUpperCase()}</div> */}
// <div className="article-body">{article.body}</div>
// <div className="author">
//   <div>posted by: {article.author}</div>
//   <div>{article.comment_count} comments</div>
// </div>
// <div className="time">
//   {article.created_at.slice(0, 10)} @ {article.created_at.slice(11, 16)}
// </div>

// <div className="voter">
//   <Voter id={article.article_id} type="articles" votes={article.votes} />
// </div>
// </article> */}