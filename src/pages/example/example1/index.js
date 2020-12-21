import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Example 1"
}

const banner = {
  heading: "Example 1"
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

function Example1() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Example1;