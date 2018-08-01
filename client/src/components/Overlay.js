import React from 'react';

import '../css/Overlay.css';

const Overlay = props => {
  const onClick = event => {
      props.onClick(event);
  }

  return(
    <div className={`Overlay ${props.open ? 'Overlay__activate' : 'Overlay__deactivate'}`} onClick={onClick}></div>
  );
};

export default Overlay;
