import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Example 3"
}

const banner = {
  heading: "Example 3"
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

function Example3() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Example3;