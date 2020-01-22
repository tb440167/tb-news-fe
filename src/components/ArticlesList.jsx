import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleTile from './ArticleTile';
import '../App.css';
import Loader from './Loader';
import ErrHandler from './ErrHandler';
import down_sort from "../img/down_sort.png"
import up_sort from "../img/up_sort.png"

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, err: '', sort_by: null, asc: null };

  componentDidMount() {
    api
      .getArticles(this.props.topic)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false, asc: false });
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
    const { isLoading, asc, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler err={err} />;
    return (
      <section>
        <div className="sortNav">
        <div className="sortNav">Date: <img src={down_sort} alt="sort" onClick={() => this.handleClick("created_at", "desc")}/><img src={up_sort} alt="sort" onClick={() => this.handleClick("created_at", "asc")} /></div>
        <div className="sortNav">Comments: <img src={down_sort} alt="sort" onClick={() => this.handleClick("comment_count", "desc")}/><img src={up_sort} alt="sort" onClick={() => this.handleClick("comment_count", "asc")}/></div>
        <div className="sortNav">Votes: <img src={down_sort} alt="sort" onClick={() => this.handleClick("votes", "desc")}/><img src={up_sort} alt="sort" onClick={() => this.handleClick("votes", "desc")}/></div>
        </div>
        {this.state.articles.map(article => {
          return <ArticleTile article={article} key={article.article_id} />;
        })}
      </section>
    );
  }
}

export default ArticlesList;


