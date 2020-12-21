import React from 'react';
import Template from '../../templates/Default';

const metadata = {
  title: "Example Index"
}

const banner = {
  heading: "Example Index"
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