import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Item 1A"
}

const banner = {
  heading: "Item 1A"
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

function Item1A() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Item1A;