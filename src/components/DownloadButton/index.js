/**
 * The DownloadButton component is used to embed a simple button into the page which,
 * when pressed, initiates the download of a linked file. The button's title defaults 
 * to "Download" but can be customised by providing a title property. The background 
 * colour of the button matches the primary colour of website.
 * 
 * Properties (? = optional, * = required):
 * - title: String (?) = The text to display on the embedded button (default: "Download")
 * - link: String (*)  = The relative or absolute path to the file which will be downloaded
 * 
 * Example Usage:
 * (1) <DownloadButton link="/img/logo.png"/>
 * (2) <DownloadButton title="Sense-i Installer" link="https://elfworks.co.za/subdomains/sense-i/Install/SenseiInstall.exe"/>
 */

import React from 'react';
import "./styles.css";

function DownloadButton(props) {
  const {title, link} = props;
  
  return (
    <div className="component-download-button">
      <a href={link} target="_blank" download>
        <div>{title ? title : "Download"}</div>
      </a>
    </div>
  );
}
  
export default DownloadButton;