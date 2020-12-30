import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Category 3"
}

const banner = {
  heading: "Category 3"
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

function Category3() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Category3;