import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Item 3B"
}

const banner = {
  heading: "Item 3B"
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

function Item3B() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Item3B;