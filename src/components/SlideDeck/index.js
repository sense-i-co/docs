/**
 * The SlideDeck component is used to display a rotating carousel of slides.
 * Each slide in the carousel can contain an image (optionally with a title
 * and subtitle) and some textual content. The image can be set to be 
 * positioned to the right or left of the text. The SlideDeck has both a 
 * desktop and mobile layout. For desktop, the image is positioned to the
 * side of the text (either right or left). For mobile, the image is always
 * positioned above the text.
 * Multiple UI options are available, including navigation buttons and position 
 * indicator dots. Furthermore, an automatic advance timer can be used to move 
 * on to the next slide after a specific timeout interval (without user 
 * interaction).
 * 
 * Properties (? = optional, * = required):
 * - slides: Array[Object] (*)            
 *   - image: Object (*)
 *     - src: String (*)                  = The path to the image for this slide in the SlideDeck
 *     - title: String (?)                = The title to display in the caption for the slide's image (default: none)
 *     - subtitle: String (?)             = The subtitle to display in the caption for the slide's image (default: none)
 *     - position: String (?)             = Whether to position the slide's image on the right or left of the text content (default: "right")
 *   - text: String (*)                   = The text content to display on the slide
 * - options: Object (?)
 *   - buttons: Boolean (?)               = Whether or not to display the next and previous buttons (default: true)
 *   - dots: Boolean (?)                  = Whether or not to display the position indicator dots (default: true)
 *   - timer: Boolean (?)                 = Whether or not to use a timer to automatically advance to the next slide (default: true)
 *   - interval: Float (?)                = The timeout interval (in seconds) to wait before advancing to the next slide (default: 5)
 *   - maxWidth: String (?)               = The maximum display width (in px) for all slides (default: none)
 */

import React from 'react';
import clsx from 'clsx';
import "./styles.css";

class SlideDeck extends React.Component {
 
  constructor(props) {
    super(props);
    this.slides = props.slides;
    this.options = {
      buttons: (props.options && props.options.buttons != null ? props.options.buttons : true),
      dots: (props.options && props.options.dots != null ? props.options.dots : true),
      timer: (props.options && props.options.timer != null ? props.options.timer : true),
      interval: (props.options && props.options.interval != null ? props.options.interval*1000 : 5000),
      maxWidth: (props.options && props.options.maxWidth),
    }
    this.timer = null;
    this.state = {selected: 0}; // initialise with first image selected
  }

  change(idx) {
    if (idx == "next") {
      idx = this.state.selected+1;
    } else if (idx == "prev") {
      idx = this.state.selected-1;
    }
    idx = (idx < 0) ? this.slides.length-1 : idx%this.slides.length; // make sure index is not out-of-bounds
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
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer(); // we must stop any active timer when the component is about to be destroyed (e.g. user switches page)
  }

  render() {
    return (
      <>
        <div className="component-slidedeck" style={{maxWidth: this.options.maxWidth}}>
          <div className={clsx("prev-button", (this.options.buttons ? "" : "hide"))} onClick={() => this.change("prev")}>&#8249;</div>
          <div className={clsx("next-button", (this.options.buttons ? "" : "hide"))} onClick={() => this.change("next")}>&#8250;</div>
          <div className="slide-container" onClick={() => this.change("next")}>
            {this.slides.map((props, idx) => (
              <div key={idx} className="slide" data-selected={(idx == this.state.selected)}>
                <div className={clsx("slide-figure", (props.image.position != null && props.image.position == "left" ? "figure-left" : "figure-right"))}>
                  <figure>
                    <img src={props.image.src}/>
                    <figcaption>
                      <h3>{props.image.title}</h3>
                      <h4>{props.image.subtitle}</h4>
                    </figcaption>
                  </figure>
                </div>
                <div className={clsx("slide-text", (props.image.position != null && props.image.position == "left" ? "text-right" : "text-left"))}>
                  {props.text}
                </div>
              </div>
            ))}
          </div>
          <div className={clsx("indicator-wrapper", (this.options.dots ? "" : "hide"))}>
            <div className="indicator-container">
              {this.slides.map((props, idx) => (
                <div className="indicator-dot" key={idx} onClick={() => this.change(idx)} data-selected={(idx == this.state.selected)}></div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

}
 
 export default SlideDeck;