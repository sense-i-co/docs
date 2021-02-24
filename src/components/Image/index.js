/**
 * The Image component is used to display a basic image on the page with an
 * optional text caption below it.
 * 
 * Properties (? = optional, * = required):
 * - src: String (*)       = The path to the image file
 * - caption: String (?)   = The text caption to display below the image (default: none)
 * - maxWidth: String (?)  = The maximum display width (in px) for this image (default: none)
 * 
 * Example Usage:
 * (1) <Image src="/img/pages/systems/operations-management/report.png"/>
 * (2) <Image src="/img/pages/systems/operations-management/report.png" caption="Example Report"/>
 */

import React from 'react';
import "./styles.css";

function Image(props) {
  const {src, caption, maxWidth} = props;

  return (
    <figure className="component-image">
      <img src={src} style={maxWidth && {maxWidth: maxWidth}}/>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
  
export default Image;