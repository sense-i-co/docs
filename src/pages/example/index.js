import React from 'react';
import Template from '../../templates/Default';

const metadata = {
  title: "Example"
}

const banner = {
  heading: "Example"
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

function ExampleIndex() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default ExampleIndex;