import React from 'react';
import Template from '../../templates/Default';
import Highlight from '../../components/Highlight';
import DownloadButton from '../../components/DownloadButton';
import Link from '@docusaurus/Link';
import Release_13_0_0 from '@site/static/files/ReleaseNotes_v13-0-00.pdf';



const metadata = {
  title: "Release Notes",
  description: "Release Notes in pdf format."
}

const banner = {
  heading: (<>Release Notes</>)
}

const sections = [
  {
    heading: (<>Release 13.0.0</>),
    content: (
      <>
        <p>
          Release Date: 2023-01-16
        </p>
        <p>
        <img src={Release_13_0_0} />;
        <img src={require('@site/static/files/ReleaseNotes_v13-0-00.pdf').default} />
      
        </p>
      </>
    )
  },
  {
    heading: "Release 2",
    content: (
      <>
        <p>
          A
        </p>
        <p>
          B
        </p>
      </>
    )
  },
 
]

function Release() {
    return (
      <Template
        metadata={metadata}
        banner={banner}
        sections={sections} />
    );
  }
  
export default Release;