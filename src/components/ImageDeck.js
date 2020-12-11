import React from 'react';
import ReactElementResize from 'react-element-resize';
import clsx from 'clsx';
import "./styles.imagedeck.css";

class ImageDeck extends React.Component {

  constructor(props) {
    super(props);
    const random = Math.floor((Math.random() * 10000) + 1);
    this.id = ["imagedeck", random].join("-");
    this.src = props.src;
    this.options = {
      buttons: (props.options && props.options.buttons != null ? props.options.buttons : true),
      dots: (props.options && props.options.dots != null ? props.options.dots : true),
      timer: (props.options && props.options.timer != null ? props.options.timer : true),
      interval: (props.options && props.options.interval != null ? props.options.interval*1000 : 5000),
    }
    this.aspectRatio = null;
    this.timer = null;
    this.state = {selected: 0, height: "auto"};
  }

  init() {
    if (this.aspectRatio == null) {
      var component = this;
      var firstImg = new Image();
      firstImg.onload = function() {
        component.aspectRatio = firstImg.height / firstImg.width;
        component.setState({height: component.calcHeight()});
      }
      firstImg.src = this.src[0];
    }
    this.startTimer();
  }

  calcHeight() {
    if (this.aspectRatio != null) {
      return document.getElementById(this.id).offsetWidth * this.aspectRatio;
    }
    return "auto";
  }

  resize() {
    if (this.aspectRatio != null) {
      this.setState({height: this.calcHeight()});
    }
  }

  next() {
    this.startTimer();
    this.setState({selected: (this.state.selected+1)%this.src.length});
  }

  prev() {
    this.startTimer();
    this.setState({selected: (this.state.selected-1 == -1 ? this.src.length-1 : this.state.selected-1)});
  }

  change(idx) {
    this.startTimer();
    this.setState({selected: idx});
  }

  startTimer() {
    if (this.options.timer) {
      var component = this;
      if (this.timer != null) {
        clearInterval(component.timer);
      }
      this.timer = setInterval(function() {component.next(); }, component.options.interval);
    }
  }

  render() {
    return (
      <>
        <ReactElementResize onResize={() => this.resize()}/>
        <div id={this.id} onLoad={() => this.init()} className="component-imagedeck" style={{height: this.state.height}}>
          <div className={clsx("prev-button", (this.options.buttons ? "" : "hide"))} onClick={() => this.prev()}>&#8249;</div>
          <div className={clsx("next-button", (this.options.buttons ? "" : "hide"))} onClick={() => this.next()}>&#8250;</div>
          <div className="image-container" onClick={() => this.next()}>
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