import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Example 3A"
}

const banner = {
  heading: "Example 3A"
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

function Example3A() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Example3A;