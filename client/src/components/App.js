import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Head from './Head';
import Main from './Main';
import Footer from './Footer';
import SideNav from './SideNav';
import Overlay from './Overlay';
import PostPage from './PostPage';

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
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/post/:post" component={PostPage} />
        </Switch>
        <Footer />
        <Overlay open={this.state.is_open} onClick={this.onClick} />
        <SideNav open={this.state.is_open} />
      </div>
    );
  }
}

export default App;
