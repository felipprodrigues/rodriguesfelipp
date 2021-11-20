import React, { Component, Fragment } from 'react';
import GlobalStyles from './styles/Global.style';
import Container from './components/Container';
import Header from './components/Header';
import Bio from './components/Bio';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <Header />
        <Bio />
      </Fragment>
    )
  }
}

export default App;
