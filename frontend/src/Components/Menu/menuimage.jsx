import React from 'react';
import ReactDOM from 'react-dom';

function MenuImage(props) {
    return (
      <div>
        <img className="MenuImage" src={props.imagesource} />
      </div>
    );
  }

export default MenuImage;