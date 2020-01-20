import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleTile from './ArticleTile';

class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles: articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic)
      api.getArticles(this.props.topic).then(articles => {
        this.setState({ articles: articles, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        ~~~~~ARTICLES LIST~~~~~
        <form>
          <label>
            <button>Newest</button>
          </label>
          <label>
            {' '}
            <button>Most Active (comments)</button>
          </label>
          <label>
            {' '}
            <button>Most Popular (votes)</button>
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
