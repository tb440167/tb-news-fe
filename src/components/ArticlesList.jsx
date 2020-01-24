import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleTile from './ArticleTile';
import '../App.css';
import Loader from './Loader';
import ErrHandler from './ErrHandler';

import Sorter from './Sorter';

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, err: '', sort_by: null };

  componentDidMount() {
    api
      .getArticles(this.props.topic)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        console.log(data);

        this.setState({ err: data.message, isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic)
      api.getArticles(this.props.topic).then(articles => {
        this.setState({ articles: articles, isLoading: false, err: '' });
      });
  }

  handleClick = (sort, order) => {
    api.getArticles(this.props.topic, sort, order).then(articles => {
      this.setState({ articles: articles, isLoading: false });
    });
  };

  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler err={err} />;
    return (
      <section>
        <Sorter handleClick={this.handleClick} />
        {this.state.articles.map(article => {
          return <ArticleTile article={article} key={article.article_id} />
        })}
        
      </section>
    );
  }
}

export default ArticlesList;
