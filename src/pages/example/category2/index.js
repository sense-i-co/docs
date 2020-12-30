import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Category 2"
}

const banner = {
  heading: "Category 2"
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

function Category2() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default Category2;