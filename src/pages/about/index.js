import React from 'react';
import Template from '../../templates/Default';
import Highlight from '../../components/Highlight';
//import ImageMap from '../../components/ImageMap';
//import ImageDeck from '../../components/ImageDeck';
import DownloadButton from '../../components/DownloadButton';
import Link from '@docusaurus/Link';

const metadata = {
  title: "About Us",
  description: "Background on Sense-i's journey."
}

const banner = {
  heading: (<>Accelerate The Development Of All Your Systems <Highlight>And Achieve True Business Success!</Highlight></>)
}

const sections = [
  {
    heading: (<>Providing <Highlight>Systems For Success</Highlight></>),
    content: (
      <>
        <p>
          Since 1985 and the release of the original version of The E-Myth, the Sense-i team has been inspired by Michael Gerber’s vision 
          of successful, highly-organized, innovative and profitable small and medium sized businesses that positively impact the world. 
          His belief that systems play a key role in making this vision a reality has been a guiding principle in all our projects.
        </p>
        <p>
          To develop a successful business, owners must implement the systems and processes needed to guide and keep their employees 
          focused on maintaining high performance levels throughout the company. Implementing such systems requires the right combination 
          of;
        </p>
        {/*
        <ImageMap 
          src="/img/pages/about-systems.png"
          areas={[
            {
              link: "/",
              boundary: {
                topLeft: [100, 110],
                bottomRight: [605, 510]
              }
            },
            {
              link: "/",
              boundary: {
                topLeft: [645, 110],
                bottomRight: [1150, 510]
              }
            },
            {
              link: "/",
              boundary: {
                centre: [1450, 320],
                radius: 200
              }
            },
            {
              link: "/",
              boundary: {
                points: [
                  [90, 570],
                  [2270, 750],
                  [90, 750]
                ]
              }
            }
          ]}
          />
        */}
      </>
    )
  },
  {
    heading: "The Challenge Facing Small And Medium Business",
    content: (
      <>
        <p>
          The act of defining an organization’s processes can take several years, not to mention the process of developing and tailoring 
          the software systems needed to control the processes, which in themselves require hundreds of thousands of man-hours to develop. 
          The challenge faced by owners of small and medium sized businesses is that they simply do not have the human, managerial, 
          technical or financial resources to develop and implement the systems they need to succeed. See white paper titled "The small 
          business development trap."
        </p>
        <p>
          And therein lies the opportunity that we at Sense-i realized more than 30 years ago. The need for small and medium-sized growing 
          businesses to have access to the systems, process models and a comprehensive, fully-integrated enterprise-wide information 
          management system at a price they can afford, and in a modular format that allows them to address their unique business needs as 
          they change and grow.
        </p>
      </>
    )
  },
  {
    heading: (<>Real Solutions, <Highlight>Immediate Impact, Rapid Returns</Highlight></>),
    content: (
      <>
        <p>
          Sense-i is uniquely placed to be able to provide you with the education materials, the user training, experienced consultants and 
          the most advanced information management system available today. All tailored to address the specific needs of your business.
        </p>
        <p>
          Chat to a Sense-i Advisor, email us at <Link to="mailto:info@sense-i.co">info@sense-i.co</Link> or view our systems.
        </p>
      </>
    )
  }
]

function About() {
    return (
      <Template
        metadata={metadata}
        banner={banner}
        sections={sections} />
    );
  }
  
export default About;