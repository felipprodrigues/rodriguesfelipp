import React, { Component } from 'react';
import Container from './components/Container';
import './styles/container.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Container />
      </div>
    )
  }
}

export default App;
