import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import ErrHandler from './components/ErrHandler';

class App extends Component {
  state = {
    username: localStorage.getItem('username') || 'jessjelly'
  };

  handleUserChoice = user => {
    this.setState({ username: user });
    localStorage.setItem('username', user);
  };

  render() {
    return (
      <main className="App">
        <NavBar username={this.state.username} handleUserChoice={this.handleUserChoice} />

        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:topic" username={this.state.username} />
          <Article path="/articles/:article_id" username={this.state.username} />
          <ErrHandler default />
        </Router>
      </main>
    );
  }
}

export default App;
