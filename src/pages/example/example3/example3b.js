import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Example 3B"
}

const banner = {
  heading: "Example 3B"
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

function Example3B() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Example3B;