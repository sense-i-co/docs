import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Clients - Ergoform"
}

const banner = {
  heading: "Ergoform"
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

function ClientErgoform() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default ClientErgoform;