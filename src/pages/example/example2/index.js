import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Example 2"
}

const banner = {
  heading: "Example 2"
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

function Example2() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Example2;