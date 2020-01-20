import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";

class Article extends Component {
  state = { article: "", showComments: false };

  componentDidMount() {
    api.getSingleArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }

  handleCommentClick = () => {
    this.setState({ showComments: !this.state.showComments });
  };

  render() {
    const { article } = this.state;
    const { showComments } = this.state;
    return (
      <div>
        {article.title}
        <p>{article.body}</p>
        <p>Author: {article.author}</p>
        <p>Posted at: {article.created_at}</p>
        <p>
          <button onClick={this.handleCommentClick}>Show {article.comment_count} Comments</button>
        </p>
        {showComments ? <CommentsList article_id={article.article_id} /> : null}
      </div>
    );
  }
}

export default Article;
