import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Example 1A"
}

const banner = {
  heading: "Example 1A"
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

function Example1A() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Example1A;