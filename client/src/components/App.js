import React, { Component } from 'react';
import Head from './Head';
import Main from './Main';
import Footer from './Footer';

import '../css/App.css';

class App extends Component {
  state = {
    title: 'Health',
    is_open: false
  }

  onClick = event => {
    event.preventDefault();

    this.setState(prev_current => {
      return {is_open: !prev_current.is_open}
    })
  }

  render() {
    return (
      <div className="App">
        <Head
          title={this.state.title}
          onClick={this.onClick}
        />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
