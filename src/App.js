import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import ErrHandler from './components/ErrHandler';

class App extends Component {
  state = {
    username: 'jessjelly'
  };

  handleUserChoice = user => {
    this.setState({ username: user });
  };

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} class="header" handleUserChoice={this.handleUserChoice} />
        <NavBar />

        <Router className="articles">
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:topic" username={this.state.username} />
          <Article path="/articles/:article_id" username={this.state.username} />
          <ErrHandler default />
        </Router>
      </div>
    );
  }
}

export default App;
