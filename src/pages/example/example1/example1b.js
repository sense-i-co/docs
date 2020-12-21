import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Example 1B"
}

const banner = {
  heading: "Example 1B"
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

function Example1B() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Example1B;