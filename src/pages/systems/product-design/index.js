import React from 'react';
import Template from '../../../templates/Default';

import Highlight from '../../../components/Highlight';
import Image from '../../../components/Image';
import ImageMap from '../../../components/ImageMap';
import Link from '@docusaurus/Link';

const metadata = {
  title: "Product Design & Costing System"
}

const banner = {
  heading: (<>Calculate Accurate Product and Service Costs In Minutes <Highlight>And Significantly Increase Your Profits!!</Highlight></>)
}

const sections = [
  {
    heading: (<>An Effective Costing System <Highlight>Boosts Your Profits...</Highlight></>),
    content: (
      <>
        <p>
          The Sense-i Advanced Costing System is a proven solution that enables you to <Highlight mode="background">exercise total 
          control over the entire costing process</Highlight> and <Highlight mode="background">ensures consistently, reliable cost estimates 
          are created in minutes</Highlight>.
        </p>
        <ImageMap 
          src="/img/pages/systems/product-design/modules.png"
          areas={[
            {
              link: "/",
              boundary: {
                topLeft: [44, 265],
                bottomRight: [633, 610]
              }
            }
          ]}
        />
        <p>
          Over 20 years Sense-i has worked with leading manufacturers to develop a unique system for calculating 
          accurate costs for all the products and services a company sells. Based on a best practice known as 
          Advanced Product and Service Costing, the system enables users to calculate detailed and accurate costs 
          for products and service project in minutes.
        </p>
        <Image 
          src="/img/pages/systems/product-design/screenshot.png"
          maxWidth="800px"/>
        <p>
          The Sense-i Advanced Costing System provides you with all the Knowledge, Tools and Software you need to 
          accurately and quickly calculate the costs of your products, services and projects.
        </p>
        <p>
          Developed over the past 20 years in conjunction with leading successful companies in manufacturing, office 
          and residential furniture, retail and the food services and catering industries. The system has proven 
          itself thousands of times and is based on the real-world needs, conditions and challenges facing small and 
          medium businesses.
        </p>
        <p>
          To learn more about the systems for accurately costing your products and services and dramatically improving 
          your profits <Link to="/">click here to view the demo</Link> or contact us at <Link to="mailto:info@sense-i.co.za">info@sense-i.co.za</Link> or call us at 0800-Perform.
        </p>
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