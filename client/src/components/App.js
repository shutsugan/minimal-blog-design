import React, { Component } from 'react';
import Head from './Head';
import Main from './Main';
import Footer from './Footer';
import SideNav from './SideNav';
import Overlay from './Overlay';

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
        <Head title={this.state.title} onClick={this.onClick} />
        <Main />
        <Footer />
        <Overlay open={this.state.is_open} onClick={this.onClick} />
        <SideNav open={this.state.is_open} />
      </div>
    );
  }
}

export default App;
