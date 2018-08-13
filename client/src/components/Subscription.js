import React, {Component} from 'react';
import SubscriptionInput from './SubscriptionInput';

import '../css/Subscription.css';

class Subscription extends Component {
  render() {
    return(
      <div className="Subscription">
        <h2 className="Subscription__Head">
          We have exciting articles about heath and fitness.
          Join our weekly Newsletter for updates.
        </h2>
        <SubscriptionInput />
      </div>
    );
  }
}

export default Subscription;
