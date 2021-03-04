/**
 * The Highlight component is used to style the contained text in a custom colour.
 * The highlighting can be achieved in one of two modes: (1) changing the font
 * colour ("text" mode), and (2) changing the background colour of the line 
 * ("background" mode).
 * The highlight colour defaults to a yellow colour (defined in styles.css), but 
 * can be customised by passing the desired color code as a property when calling 
 * the component.
 * 
 * Properties (? = optional, * = required):
 * - mode: String (?)   = The highlighting mode, either "text" or "background" (default: "text")
 * - color: String (?)  = The name or code of the colour to use for highlighting (default: "#f7b902")
 * 
 * Example Usage:
 * (1) (<>A Heading With Some <Highlight>Yellow Text</Hightlight></>)
 * (2) (<>A Heading With Some <Highlight color="red">Red Text</Highlight>)
 * (2) (<>A Heading With Some <Highlight mode="background" color="orange">Text with Orange Background</Highlight>)
 */

import React from 'react';
import clsx from 'clsx';
import "./styles.css";

function Highlight(props) {
  const {children, mode, color} = props;
  
  if (mode && mode == "background") {
    var modeClass = "highlight-background";
    var colorStyle = (color && {backgroundColor: color})
  } else {
    var modeClass = "highlight-text";
    var colorStyle = (color && {color: color})
  }

  return (
    <span 
      className={clsx("component-highlight", modeClass)}
      style={colorStyle}
      >
        {children}
      </span>
  );
}
  
export default Highlight;