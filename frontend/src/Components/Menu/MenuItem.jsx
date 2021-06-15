import React from 'react';
import ReactDOM from 'react-dom';
import MenuImage from "./menuimage";

function MenuItem(props) {
    return (
      <div>
        {" "}
        <h6 className="MenuItem">
          {props.title}
          <br></br>
          ${props.price}
          <br></br>
          <MenuImage imagesource={props.imagesource} />
        </h6>
        
      </div>
    );
  }

export default MenuItem;