import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';

class App extends Component {
  state = {
    username: 'jessjelly'
  };

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <NavBar />
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:topic" username={this.state.username} />
          <Article path="/articles/:article_id" username={this.state.username} />
        </Router>
      </div>
    );
  }
}

export default App;
