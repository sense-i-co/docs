import React from 'react';
import Template from '../../../templates/Default';

import Link from '@docusaurus/Link';
import Highlight from '../../../components/Highlight';
import Image from '../../../components/Image';
import ImageMap from '../../../components/ImageMap';

const metadata = {
  title: "Operations Management System",
  description: "Effective operations drive business success and are the key to improving sales and profits"
}

const banner = {
  heading: (<>Effective Operations Drive Business Success And Are <Highlight>The Key To Improving Sales And Profits</Highlight></>)
}

const sections = [
  {
    heading: (<>Effective Operations Drive <Highlight>Sales and Profit!</Highlight></>),
    content: (
      <>
        <p>
          For your business to thrive and grow it needs to consistently fulfill customer orders on time, at 
          the right quality and cost. The ability to do this improves your reputation, drives both repeat and 
          new sales and ensures the continued profitability of your business. But achieving this is one of the 
          hardest steps in developing any successful business and key to making it possible is an Effective 
          Operations Management System.
        </p>
        <p>
          An effective Operations Management System helps you ensure that all orders flow smoothly through your 
          business and that this happens consistently, without having to be there yourself all the time.
        </p>
        <p>
          And an effective Operations Management System gives you the ability to control and monitor every aspect 
          of your business in real-time. It is the ONE FUNDAMENTAL COMPONENTS OF BUSINESS SUCCESS.
        </p>
        <p>
          The Sense-i Operations Management System consists of 12 key process areas designed to improve the 
          performance of and control you have over key business areas.
        </p>
        <ImageMap 
          src="/img/pages/systems/operations-management/modules.png"
          areas={[
            {
              link: "/",
              boundary: {
                topLeft: [8, 116],
                bottomRight: [294, 283]
              }
            }
          ]}
          />
        <p>
          The success of your and any business is determined by how well your team fulfills customers’ orders 
          and is on top of the communication between your company and your customers. The more your deliver exactly 
          the right product and service on time as promised, the better your company does. And you have to control 
          the costs of the entire process to ensure you run profitably.  Broken and fragmented information flows 
          and a myriad of different spreadsheets put you into spreadsheet hell and take a huge toll on business 
          owners and managers personally.
        </p>
        <p>
          To be certain that every customer orders flow through every step in your business smoothly and profitably 
          you must ensure that every single step in the Order Management process is performed within a single 
          Operations Management System and that no external spreadsheets, manual calculations or other systems are 
          used. This is essential if you want to eliminate recapturing information, reduce mistakes and overhead 
          costs and speed up order processing and be competitive in the market, which is essential for success.
        </p>
        <Image src="/img/pages/systems/operations-management/report.png"/>
        <p>
          Each of the modules in the Sense-I Operations Management System can be implemented and customized to suit 
          the exact needs of your business. Modules can be implemented separately to focus on specific business issues 
          and yet, despite their flexibility, all the modules work together seamlessly off your company’s database in 
          a completely integrated manner. Every transaction captured by your team updates information in the financial 
          and performance management systems in real-time giving you in real-time control and complete insight into 
          every aspect of your business.
        </p>
        <p>
          Over the past 25 years Sense-I has worked closely with leading companies to develop flexible solutions that 
          address the real needs and challenges faced by small and medium sized businesses. The result of this is the 
          most complete and flexible, proven, reliable and robust Operations Management System for manufacturing, retail, 
          wholesale and services industries.
        </p>
        <p>
          For more information on the systems that can help you achieve success and gain control, profit and freedom in 
          your business click on each of the nine links above or contact us on <Link to="mailto:info@sense-i.co">info@sense-i.co</Link>.
        </p>
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