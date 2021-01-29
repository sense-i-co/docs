import React from 'react';
import Template from '../../templates/Default';

const metadata = {
  title: "Operations Management System"
}

const banner = {
  heading: "Operations Management System"
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

function OperationsManagement() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default OperationsManagement;