/**
 * The ImageMap component is used to display an image with multiple overlayed
 * hyperlinks. These links are defined as regions (or "areas") of the image
 * with a particular bounding box that is directed to a specified URL. Three
 * types of bounding box are supported for these areas: rect (rectangle), 
 * circle and poly (polygon). The provided area coordinates are based on the 
 * original size of the image, where the origin [0,0] is the top left corner 
 * of the image. The component automatically handles the scaling of these
 * coordinates when the image is resized (for example, when the user changes
 * the size of the browser window).
 * 
 * Properties (? = optional, * = required):
 * - src: String (*)                      = The path to the image to be used as the background for this image map
 * - areas: Array[Object] (*)
 *   - link: String (*)                   = The URL for the clickable link associated with this area
 *   - boundary: Object (*)
 *     - topLeft: Array[Float] (?)        = Rectangle Area: The [X, Y] coordinates for the top left of the bounding box
 *     - bottomRight: Array[Float] (?)    = Rectangle Area: The [X, Y] coordinates for the bottom right of the bounding box
 *     - centre: Array[Float] (?)         = Circle Area: The [X, Y] coordinates for the centre of the bounding circle
 *     - radius: Float (?)                = Circle Area: The length of the radius for the bounding circle
 *     - points: Array[Array[Float]] (?)  = Polygon Area: The array of [X, Y] coordinates for the vertices of the bounding polygon
 */

import React from 'react';
import ReactElementResize from 'react-element-resize';

class ImageMap extends React.Component {

  constructor(props) {
    super(props);
    this.imgRef = React.createRef(); // reference to the component's image HTML element, used for accessing element dimensions
    const filename = props.src.split("/").slice(-1)[0]; // use the image file name as the base for both the image and map IDs
    const random = Math.floor((Math.random() * 10000) + 1); // add a random identifier to avoid conflicts when the same image is used for two maps on the same page
    this.mapID = [filename, random, "map"].join("-");
    this.src = props.src;
    this.areas = props.areas;
    this.naturalWidth = null;
    this.state = {displayRatio: 1}; // initialise the display ratio (i.e. displayed image width / natural image width) to 1
  }

  init() {
    if(!this.naturalWidth) { // only run init if we have not already calculated the natural image width
      var component = this;
      var naturalImg = new Image(); // create an image object to load the original image
      var displayImg = this.imgRef.current;
      naturalImg.onload = function() { // when this image loads, the width represents the actual size of the image
        component.naturalWidth = naturalImg.width;
        component.setState({displayRatio: displayImg.width / naturalImg.width}); // updating state triggers re-render
      }
      naturalImg.src = this.src; // set src after defining onload
    }
  }

  resize() {
    if (this.naturalWidth) {
      var displayImg = this.imgRef.current;
      this.setState({displayRatio: displayImg.width / this.naturalWidth}); // updating state triggers re-render
    }
  }

  render() {
    return (
      <>
        <ReactElementResize onResize={() => this.resize()}/>
        <img ref={this.imgRef} onLoad={() => this.init()} src={this.src} useMap={"#" + this.mapID}/>
        <map name={this.mapID} ref={this.mapRef}>
          {this.areas.map((props, idx) => (
            <Area
              key={idx}
              link={props.link}
              boundary={props.boundary}
              displayRatio={this.state.displayRatio}
            />
          ))}
        </map>
      </>
    );
  }

}

function Area(props) {

  const {link, boundary, displayRatio} = props;

  var shape = "";
  var coords = [];

  if (boundary.topLeft && boundary.bottomRight) {
    shape = "rect";
    coords = boundary.topLeft.concat(boundary.bottomRight);

  } else if (boundary.centre && boundary.radius) {
    shape = "circle";
    coords = boundary.centre.concat([boundary.radius]);

  } else if (boundary.points) {
    shape = "poly";
    coords = [].concat.apply([], boundary.points); // flatten 2D array into 1D array (source: https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays)
  }

  return (
    <area shape={shape} coords={coords.map(x => x * displayRatio).join()} href={link}/>
  );

}
    
export default ImageMap;