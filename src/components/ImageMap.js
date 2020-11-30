/**
 * ImageMap component
 */

import React from 'react';
import ReactElementResize from 'react-element-resize';

class ImageMap extends React.Component {

  constructor(props) {
    super(props);
    const filename = props.src.split("/").slice(-1)[0]; // use the image file name as the base for both the image and map IDs
    const random = Math.floor((Math.random() * 10000) + 1); // add a random identifier to avoid conflicts when the same image is used for two maps on the same page
    this.src = props.src;
    this.areas = props.areas;
    this.imgID = [filename, random, "img"].join("-");
    this.mapID = [filename, random, "map"].join("-");
    this.naturalWidth = null;
    this.state = {displayRatio: 1};
  }

  init() {
    if(!this.naturalWidth) {
      var component = this;
      var naturalImg = new Image();
      var displayImg = document.getElementById(this.imgID);
      naturalImg.onload = function() {
        component.naturalWidth = naturalImg.width;
        component.setState({displayRatio: displayImg.width / naturalImg.width});
      }
      naturalImg.src = this.src;
    }
  }

  resize() {
    if (this.naturalWidth) {
      var displayImg = document.getElementById(this.imgID);
      this.setState({displayRatio: displayImg.width / this.naturalWidth});
    }
  }

  render() {
    return (
      <>
        <ReactElementResize onResize={() => this.resize()}/>
        <img id={this.imgID} onLoad={() => this.init()} src={this.src} useMap={"#" + this.mapID}/>
        <map name={this.mapID}>
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