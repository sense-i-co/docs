import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Clients - Pierre Cronje"
}

const banner = {
  heading: "Pierre Cronje"
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

function ClientPierreCronje() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default ClientPierreCronje;