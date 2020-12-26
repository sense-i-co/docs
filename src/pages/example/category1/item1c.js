import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Item 1C"
}

const banner = {
  heading: "Item 1C"
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

function Item1C() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Item1C;