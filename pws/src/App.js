import React, { Component, Fragment } from 'react';
import GlobalStyles from './styles/Global.style';
import Container from './components/Container';
import Header from './components/Header';
import Bio from './components/Bio';
import Resume from './components/Resume';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <Header />
        <Bio />
        <Resume />
      </Fragment>
    )
  }
}

export default App;
