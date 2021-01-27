import React from 'react';
import Template from '../templates/Default';
import Highlight from '../components/Highlight';
import ImageDeck from '../components/ImageDeck';
import ImageMap from '../components/ImageMap';
import Link from '@docusaurus/Link';

const metadata = {
  title: "Systems",
  description: "Page Description"
}

const sections = [
  {
    content: (
      <>
        <ImageDeck 
          images={[
            {
              src: "/img/pages/systems-banner-1.png",
              link: "/"
            },
            {
              src: "/img/pages/systems-banner-2.png",
              link: "/about"
            }
          ]}
          options={{
            buttons: false,
            dots: false,
          }}
          />
      </>
   )
  },
  {
    heading: "Achieve True Business Success!",
    content: (
      <>
        <p>
          Built on over 30 years worth of experience in Industrial Engineering and Management Systems, the Sense-i Enterprise Management System 
          and Business Development Program is the most powerful solution available today for helping you develop and grow a truly successful business.
        </p>
        <p>
          Our programs are designed to boost sales, improve productivity and reduce cost and lead-times while giving you real-time control over 
          every aspect of your business. Our systems integrate all areas of your business, from operations through to finance, management, sales 
          and marketing to work as a single team to keep your customers happy and your business competitive.
        </p>
        <ImageMap 
          src="/img/pages/systems-map.png"
          areas={[
            {
              link: "/",
              boundary: {
                topLeft: [18, 40],
                bottomRight: [395, 271]
              }
            }
          ]}
          />
      </>
   )
  },
  {
    heading: "Product Design & Costing System",
    content: (
      <>
        <p>
          Sense-i’s Product Design & Costing System is designed to help you <Highlight>quickly and easily generate new product designs, including 
          complete part lists, 3d parametric models, bills-of-material, task routings and accurate costings.</Highlight> The Product Design & 
          Costing system allows you to build libraries of template products that can be easily customised for each customer’s specific requirements.
          In addition, advanced costing formula allow you to define different mark up rules for different input materials and calculate product 
          cost and selling prices in seconds for a specific order, or for your entire catalogue. Accurate, up-to-date and reliable product costing 
          information is available to the rest of the company immediately to create Sales Quotes, new Orders and to Operations for planning and 
          scheduling.
        </p>
      </>
    )
  },
  {
    heading: "Sales & Marketing Management System",
    content: (
      <>
        <p>
          Sense-i's Sales and Marketing Systems include world-class tools to help you <Highlight>boost your marketing, sales and customer services 
          to both find and attract new customers and increase the satisfaction of existing customers.</Highlight> From tracking and managing new 
          leads and opportunities through an efficient and structured Sales Process, to generating Sales Quotes and Sales Orders for custom products 
          in minutes, the systems help increase the efficiency of marketing and sales efforts and boost your turnover.
        </p>
      </>
    )
  },
  {
    heading: "Operations Management System",
    content: (
      <>
        <p>
          Sense-i's Operations Management System is designed to help you achieve your most important business goal, <Highlight>delivering the right 
          quality products and services to your customers, on-time, every time while generating a consistent stream of profits.</Highlight> The 
          Operations Management System integrates every area of your business, from Sales Quoting and Order Entry, Production Planning and 
          Scheduling, Materials Planning and Procurement, Time & Attendance and Task Tracking through to Job Costing, Quality Control and Sales 
          Delivery Management. These processes are all integrated into a single database to ensure all information is captured once only and that 
          accurate, up-to-date and reliable information is available to everyone who needs it.
        </p>
      </>
    )
  },
  {
    heading: "Financial Management System",
    content: (
      <>
        <p>
          Sense-i's Financial Management Systems help you to <Highlight>streamline time-consuming accounting processes by reducing unnecessary 
          capture of information and integrating the key financial areas</Highlight> of Accounts Receivable, Accounts Payable, Cashbook and General 
          Ledger directly with all the transactions captured in your Operations Management Systems. Access to immediate, comprehensive and accurate 
          financial information is just a click away and preparing month-end management accounts and financial statements can be done in a matter 
          of minutes.
        </p>
      </>
    )
  },
  {
    heading: "Performance Management System",
    content: (
      <>
        <p>
          Sense-i's Performance Management Systems provides you with <Highlight>detailed, real-time management information to control every aspect 
          of your business.</Highlight> The most user-friendly and powerful reports available enable you to monitor performance of every person and 
          every transaction and drill-down to identify key areas needing management attention.
        </p>
      </>
    )
  },
  {
    heading: "Our Focus Is Your Success",
    content: (
      <>
        <p>
          Sense-i has developed a structured Business Development Program to enable you to increase the performance of your business and achieve 
          much greater success with a lot less stress, energy and effort. Our program helps you analyse your business and identify areas where 
          implementing the right strategy, implementing the right systems and developing your people will bring about the greatest improvement in 
          overall performance and profitability. Every one of our dedicated and highly trained team will you to implement the systems you need to 
          achieve that success.
        </p>
        <p>
          And because our systems pay for themselves from the cost savings and improvements in performance, they are effectively free.
        </p>
        <p>
          To learn more about how our programs can take the performance of your business to the next level, contact us 
          at <Link to="mailto:business.solutions@sense-i.co.za">business.solutions@sense-i.co.za</Link>.
        </p>
      </>
    )
  }
]

function Systems() {
  return (
      <Template
          metadata={metadata}
          sections={sections} 
          />
  );
}

export default Systems;