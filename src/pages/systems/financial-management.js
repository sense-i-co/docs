import React from 'react';
import Template from '../../templates/Default';

const metadata = {
  title: "Financial Management System"
}

const banner = {
  heading: "Financial Management System"
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

function FinancialManagement() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default FinancialManagement;