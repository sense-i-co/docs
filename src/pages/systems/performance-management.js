import React from 'react';
import Template from '../../templates/Default';

const metadata = {
  title: "Performance Management System"
}

const banner = {
  heading: "Performance Management System"
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

function PerformanceManagement() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default PerformanceManagement;