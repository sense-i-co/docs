/**
 * The Highlight component is used to style the containing text in a custom colour.
 * This defaults to a yellow colour (defined in styles.highlight.css), but can be
 * customised by passing the desired color code as a property when calling the 
 * component.
 * 
 * Parameters:
 * - color (optional): The colour code to use for the text colour (default is yellow)
 * 
 * Example Usage:
 * (1) (<>A Heading With Some <Highlight>Yellow Text</Hightlight></>)
 * (2) (<>A Heading With Some <Highlight color="red">Red Text</Highlight>)
 */

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