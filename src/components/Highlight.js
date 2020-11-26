import React from 'react';

function Highlight(props) {
    const {children, color} = props;
  
    return (
      <span 
        className="component-highlight"
        style={color && {color: color}}
        >
          {children}
        </span>
    );
  }
  
  export default Highlight;