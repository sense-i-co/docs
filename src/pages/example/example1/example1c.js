import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Example 1C"
}

const banner = {
  heading: "Example 1C"
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

function Example1C() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Example1C;