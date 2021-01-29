import React from 'react';
import Template from '../../templates/Default';

const metadata = {
  title: "Integrated E-Commerce System"
}

const banner = {
  heading: "Integrated E-Commerce System"
}

const sections = [
  {
    heading: "Heading",
    content: (
      <>
        <p>Content</p>
      </>
    )
  }
]

function ECommerce() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default ECommerce;