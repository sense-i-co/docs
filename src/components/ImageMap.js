/**
 * use react state instead of data- attributes
 */

import React from 'react';
import ReactElementResize from 'react-element-resize';

function ImageMap(props) {
  const {src, links} = props;
  // use the image file name as the base for both the image and map IDs
  const filename = src.split("/").slice(-1)[0];
  // add a random identifier to avoid conflicts when the same image is used for two maps on the same page
  const random = Math.floor((Math.random() * 10000) + 1);
  const imgID = [filename, random, "img"].join("-");
  const mapID = [filename, random, "map"].join("-"); 

  // initMap is called when the image first loads to retrieve the original size of the image
  return (
    <>
      <ReactElementResize onResize={() => adjustMapCoords(imgID, mapID)}/>
      <img id={imgID} onLoad={() => initMap(imgID, mapID, src)} src={src} useMap={"#" + mapID} data-init="0"/>
      <map id={mapID} name={mapID}>
        {links.map((props, idx) => (
          <Area key={idx} {...props}/>
        ))}
      </map>
    </>
  );
}

function Area(props) {
  const {to, boundary} = props;
  var coords = "";

  var shape = "";
  if (boundary.topLeft && boundary.bottomRight) {
    shape = "rect";
  } else if (boundary.centre && boundary.radius) {
    shape = "circle";
  } else if (boundary.points) {
    shape = "poly";
  }

  switch(shape) {
    case "rect":
      coords = boundary.topLeft.concat(boundary.bottomRight).join();
      break;
    case "circle":
      coords = boundary.centre.concat([boundary.radius]).join();
      break;
    case "poly":
      // flatten 2D array into 1D array (source: https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays)
      coords = [].concat.apply([], boundary.points);
      break;
  }

  return (
    <area shape={shape} data-original-coords={coords} href={to}/>
  );
}

function initMap(imgID, mapID, src) {  
  var originalImg = new Image();
  var displayImg = document.getElementById(imgID);

  originalImg.onload = function() {
    displayImg.setAttribute("data-original-width", originalImg.width);
    displayImg.setAttribute("data-init", "1");
    adjustMapCoords(imgID, mapID);
  }

  originalImg.src = src;
}

function adjustMapCoords(imgID, mapID) {
  var img = document.getElementById(imgID);
  if (img.getAttribute("data-init") == true) {
    var map = document.getElementById(mapID);
    var ratio = img.width / parseFloat(img.getAttribute("data-original-width"));
    var areas = map.children;
    for (var i = 0; i < areas.length; i++) {
      var area = areas[i];
      var oldCoords = area.getAttribute("data-original-coords").split(",");
      var newCoords = "";
      for (var j = 0; j < oldCoords.length; j++) {
        newCoords += (parseInt(oldCoords[j]) * ratio) + ",";
      }
      area.setAttribute("coords", newCoords);
    }
  }
}
    
export default ImageMap;