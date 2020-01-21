import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleTile from './ArticleTile';
import Loading from './Loading';

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sort_by: null, asc: null };

  componentDidMount() {
    api.getArticles(this.props.topic).then(articles => {
      this.setState({ articles: articles, isLoading: false, asc: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic)
      api.getArticles(this.props.topic).then(articles => {
        this.setState({ articles: articles, isLoading: false });
      });
  }

  handleClick = event => {
    const order = this.state.asc ? 'asc' : 'desc';
    console.log(order);

    event.preventDefault();
    this.setState({ sort_by: event.target.value, asc: !this.state.asc }, () => {
      api.getArticles(this.props.topic, this.state.sort_by, order).then(articles => {
        this.setState({ articles: articles, isLoading: false });
      });
    });
  };

  render() {
    const { isLoading, asc } = this.state;
    return (
      <div>
        {isLoading ? <Loading /> : null}
        ~~~~~ARTICLES LIST~~~~~
        <form>
          <label>
            <button value="created_at" onClick={this.handleClick}>
              {asc ? 'Oldest' : 'Newest'}
            </button>
          </label>
          <label>
            {' '}
            <button value="comment_count" onClick={this.handleClick}>
              {asc ? 'Least Active' : 'Most Active'}
            </button>
          </label>
          <label>
            {' '}
            <button value="votes" onClick={this.handleClick}>
              {asc ? 'Most Popular' : 'Least Popular'}
            </button>
          </label>
        </form>
        {this.state.articles.map(article => {
          return <ArticleTile article={article} key={article.article_id} />;
        })}
      </div>
    );
  }
}

export default ArticlesList;
