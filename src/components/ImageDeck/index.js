/**
 * The ImageDeck component is used to display a rotating slideshow of images.
 * The aspect ratio of the slideshow container conforms to the size of the
 * first image in the src list (and remains the same as you rotate between
 * images). Multiple UI options are available, including navigation buttons 
 * and position indicator dots. Furthermore, an automatic advance timer can be 
 * used to move on to the next image after a specific timeout interval (without 
 * user interaction).
 * 
 * Properties (? = optional, * = required):
 * - src: Array[String] (*)               = The array of paths to the images used in this slideshow
 * - options: Object (?)
 *   - buttons: Boolean (?)               = Whether or not to display the next and previous buttons (default: true)
 *   - dots: Boolean (?)                  = Whether or not to display the position indicator dots (default: true)
 *   - timer: Boolean (?)                 = Whether or not to use a timer to automatically advance to the next image (default: true)
 *   - interval: Float (?)                = The timeout interval (in seconds) to wait before advancing to the next image (default: 5)
 */

import React from 'react';
import ReactElementResize from 'react-element-resize';
import clsx from 'clsx';
import "./styles.css";

class ImageDeck extends React.Component {

  constructor(props) {
    super(props);
    const random = Math.floor((Math.random() * 10000) + 1);
    this.id = ["imagedeck", random].join("-"); // add a random identifier to avoid conflicts when multiple ImageDeck components are on the same page
    this.src = props.src;
    this.options = {
      buttons: (props.options && props.options.buttons != null ? props.options.buttons : true),
      dots: (props.options && props.options.dots != null ? props.options.dots : true),
      timer: (props.options && props.options.timer != null ? props.options.timer : true),
      interval: (props.options && props.options.interval != null ? props.options.interval*1000 : 5000),
    }
    this.aspectRatio = null;
    this.timer = null;
    this.state = {selected: 0, height: "auto"}; // initialise with first image selected and height based on that image
  }

  init() {
    if (this.aspectRatio == null) { // only run if we have not yet calculated the aspect ratio
      var component = this;
      var firstImg = new Image(); // create an image object to load the first image
      firstImg.onload = function() {
        component.aspectRatio = firstImg.height / firstImg.width; // calculate and store the aspect ratio of the first image
        component.setState({height: component.calcHeight()}); // update component state with calculated height
      }
      firstImg.src = this.src[0]; // set src to first image after defining onload
    }
    this.startTimer(); // after initialising, start the auto-advance timer
  }

  calcHeight() {
    if (this.aspectRatio != null) { // if initialisation has completed, calculate height based on aspect ratio
      return document.getElementById(this.id).offsetWidth * this.aspectRatio;
    }
    return "auto";
  }

  resize() {
    if (this.aspectRatio != null) { // if initialisation has completed, resize component based on aspect ratio
      this.setState({height: this.calcHeight()});
    }
  }

  change(idx) {
    if (idx == "next") {
      idx = this.state.selected+1;
    } else if (idx == "prev") {
      idx = this.state.selected-1;
    }
    idx = (idx < 0) ? this.src.length-1 : idx%this.src.length; // make sure index is not out-of-bounds
    this.startTimer(); // start/reset auto-advance timer just before we switch to the next image
    this.setState({selected: idx});
  }

  startTimer() {
    if (this.options.timer) { // only start a timer if this option is enabled
      this.stopTimer();
      var component = this;
      this.timer = setInterval(function() {component.change("next"); }, component.options.interval); // start a new timer to change to the next image
    }
  }

  stopTimer() {
    if (this.timer != null) { // if there is already a timer running, clear it
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    this.stopTimer(); // we must stop any active timer when the component is about to be destroyed (e.g. user switches page)
  }

  render() {
    return (
      <>
        <ReactElementResize onResize={() => this.resize()}/>
        <div id={this.id} onLoad={() => this.init()} className="component-imagedeck" style={{height: this.state.height}}>
          <div className={clsx("prev-button", (this.options.buttons ? "" : "hide"))} onClick={() => this.change("prev")}>&#8249;</div>
          <div className={clsx("next-button", (this.options.buttons ? "" : "hide"))} onClick={() => this.change("next")}>&#8250;</div>
          <div className="image-container" onClick={() => this.change("next")}>
            {this.src.map((props, idx) => (
              <img key={idx} src={props} data-selected={(idx == this.state.selected)}/>
            ))}
          </div>
          <div className={clsx("indicator-wrapper", (this.options.dots ? "" : "hide"))}>
            <div className="indicator-container">
              {this.src.map((props, idx) => (
                <div className="indicator-dot" key={idx} onClick={() => this.change(idx)} data-selected={(idx == this.state.selected)}></div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default ImageDeck;