import React, { Component } from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';

class NavBar extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
    return (
      <nav className="Nav">
        <div></div>
        {this.state.topics.map((topic, index) => {
          return (
            <div className="button" id="button-4" key={index}>
              <div id="underline"></div>
              <Link to={`/topics/${topic.slug}`} key={topic.slug} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
                {topic.slug}
              </Link>
            </div>
          );
        })}
        <div></div>
      </nav>
    );
  }
}

export default NavBar;
