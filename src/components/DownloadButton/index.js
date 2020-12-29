import React from 'react';
import "./styles.css";

function DownloadButton(props) {
  const {children, to} = props;
  
  return (
    <div className="component-download-button">
      <a href={to} target="_blank">
        <div>{children}</div>
      </a>
    </div>
  );
}
  
export default DownloadButton;