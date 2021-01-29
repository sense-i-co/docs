import React from 'react';
import Template from '../../templates/Default';

const metadata = {
  title: "Product Design & Costing System"
}

const banner = {
  heading: "Product Design & Costing System"
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

function ProductDesign() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default ProductDesign;