/**
 * The ImageDeck component is used to display a rotating slideshow of images.
 * Each image in the slideshow can optionally have an associated link which
 * directs the user to a specific URL when the slide is clicked. The aspect 
 * ratio of the slideshow container conforms to the size of the first image in 
 * the src list (and remains the same as you rotate between images). Multiple 
 * UI options are available, including navigation buttons and position indicator 
 * dots. Furthermore, an automatic advance timer can be used to move on to the 
 * next image after a specific timeout interval (without user interaction).
 * 
 * Properties (? = optional, * = required):
 * - images: Array[Object] (*)            
 *   - src: String (*)                    = The path to the image for this slide in the ImageDeck
 *   - link: String (?)                   = The URL for the clickable link associated with this slide (default: none)
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
    this.ref = React.createRef(); // reference to the component's HTML element, used for accessing element dimensions
    this.images = props.images;
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
      firstImg.src = this.images[0].src; // set src to first image after defining onload
    }
    this.startTimer(); // after initialising, start the auto-advance timer
  }

  calcHeight() {
    return this.ref.current.offsetWidth * this.aspectRatio; // calculate height based on aspect ratio
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
    idx = (idx < 0) ? this.images.length-1 : idx%this.images.length; // make sure index is not out-of-bounds
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

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.stopTimer(); // we must stop any active timer when the component is about to be destroyed (e.g. user switches page)
  }

  render() {
    return (
      <>
        <ReactElementResize onResize={() => this.resize()}/>
        <div ref={this.ref} className="component-imagedeck" style={{height: this.state.height}}>
          <div className={clsx("prev-button", (this.options.buttons ? "" : "hide"))} onClick={() => this.change("prev")}>&#8249;</div>
          <div className={clsx("next-button", (this.options.buttons ? "" : "hide"))} onClick={() => this.change("next")}>&#8250;</div>
          <div className="image-container" onClick={() => this.change("next")}>
            {this.images.map((props, idx) => (
              <a key={idx} href={props.link}>
                <img key={idx} src={props.src} data-selected={(idx == this.state.selected)}/>
              </a>
            ))}
          </div>
          <div className={clsx("indicator-wrapper", (this.options.dots ? "" : "hide"))}>
            <div className="indicator-container">
              {this.images.map((props, idx) => (
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