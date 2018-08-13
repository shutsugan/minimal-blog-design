import React from 'react';

import '../css/CopyRight.css';

const CopyRight = props => (
  <div className="CopyRight">
    <p className="CopyRight__text">Created By {props.author} @ {props.date}</p>
  </div>
);

export default CopyRight;
