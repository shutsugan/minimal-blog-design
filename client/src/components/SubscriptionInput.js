import React, {Component} from 'react';

import '../css/SubscriptionInput.css';

class SubscriptionInput extends Component {
  state = {
    value: ''
  }

  onChange = event => {
    this.setState({value: event.target.value});
  }

  onSubmit = event => {
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form className="SubscriptionInput" onSubmit={this.onSubmit}>
          <input
            className="SubscriptionInput__input"
            type="email"
            placeholder="Your Email Here"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button className="SubscriptionInput__button" type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default SubscriptionInput;
