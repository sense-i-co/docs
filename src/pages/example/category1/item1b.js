import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Item 1B"
}

const banner = {
  heading: "Item 1B"
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

function Item1B() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Item1B;