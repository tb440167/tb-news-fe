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
        {this.state.topics.map(topic => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              <h4> {topic.slug}-----</h4>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
