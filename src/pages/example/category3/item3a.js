import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Item 3A"
}

const banner = {
  heading: "Item 3A"
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

function Item3A() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Item3A;