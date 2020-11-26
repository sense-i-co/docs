import React from 'react';
import "./styles.highlight.css";

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