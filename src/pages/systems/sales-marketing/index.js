import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Sales & Marketing System"
}

const banner = {
  heading: "Sales & Marketing System"
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

function SalesMarketing() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default SalesMarketing;