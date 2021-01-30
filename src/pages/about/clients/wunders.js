import React from 'react';
import Template from '../../../templates/Default';

const metadata = {
  title: "Clients - Wunders"
}

const banner = {
  heading: "Wunders"
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

function ClientWunders() {
  return (
    <Template
      metadata={metadata}
      banner={banner}
      sections={sections} />
  );
}

export default ClientWunders;