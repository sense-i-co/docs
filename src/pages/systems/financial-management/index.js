import React from 'react';
import Template from '../../../templates/Default';

import Highlight from '../../../components/Highlight';
import Image from '../../../components/Image';
//import ImageMap from '../../../components/ImageMap';
import Link from '@docusaurus/Link';

const metadata = {
  title: "Financial Management System"
}

const banner = {
  heading: (<>Real-Time, Comprehensive Financial Controls <Highlight>Ensure Continued Profitability And Positive Cash Flow</Highlight></>)
}

const sections = [
  {
    heading: (<>Complete Financial Control <Highlight>Drives Your Profits & Cash-flow!</Highlight></>),
    content: (
      <>
        <p>
          For your to achieve business success you must ensure it is consistently profitable and generates 
          a steady and positive cash-flow.
        </p>
        <p>
          Having access to accurate and up-to-date financial information in real-time is crucial to business 
          success. Erratic profitability and inconsistent cash-flow hampers your ability to keep day to 
          operations running and places your business at serious risk. Poor cashflow also forces you to have 
          to make short-term decisions about prioritizing orders, limit your ability to buy the materials you 
          need, which in turn leads to down-time, increased costs and even the late delivery customers' orders. 
          This disrupts the smooth flow of orders through a company in ways that reduce profitability, 
          undermine staff morale and limits your ability to grow your business and achieve success you strive 
          for.
        </p>
        <p>
          The Sense-i Financial Management System consists of 9 key process areas <Highlight mode="background">that provide you with 
          complete control of all the transactions in your business and the real-time financial reports and 
          analysis you need to manage every aspect of your company's continued financial success</Highlight>. 
        </p>
        <p>
          All the modules in the System integrate seamlessly and in real-time with all the other modules in the 
          overall Sense-i Enterprise and Operations Management System.
        </p>
        <p>
          The system gives you complete control of all your banking transactions. You can quickly capture customer 
          receipts, supplier payments and bank charges. And you can easily reconcile your bank accounts to ensure 
          the information in your system is accurate and up-to-date.
        </p>
        <p>
          You can easily manage and control your debtors and creditors. For your creditors you can quickly 
          reconcile supplier accounts and process payments. For customers, easily generate statements and produce 
          aging reports.
        </p>
        <p>
          And the system enables you to efficiently process all your journals and generate a complete set of 
          financial reports. This includes a Trial Balance, Balance Sheet, Income Statement and Cash Statement and 
          complete audit trails.
        </p>
        <Image 
          src="/img/pages/systems/financial-management/screenshot.png"
          maxWidth="800px"
        />
        <p>
          Comprehensive, Real-Time Financial Controls help you to manage your customer receipts and control the 
          timing of all the payments you need to make to ensure that the continued smooth flow of orders and resources 
          through your business.
        </p>
        <p>
          And when your Financial Management System is fully integrated with your Operations Management System then <Highlight mode="background">you 
          have real-time access to the cash-flow implications of every Sales Order, Purchase Order, Customer and Supplier 
          Delivery as they occur</Highlight>.
        </p>
        <p>
          What is more, partial deliveries and changing due dates enable you to assess the financial impact of changes 
          to your financial position as they occur, without having to spend time doing calculations or compiling reports.
        </p>
        <p>
          Powerful audit reports give you unparalleled access o detailed information about every transaction in your 
          business and allows you to easily detect mistakes, theft and fraud and prevent unnecessary expenses and loss.
        </p>
        <p>
          For more information on how these financial controls systems that can help you achieve success and gain control, 
          profit and freedom in your business click on each of the five links above or contact us on <Link to="mailto:info@sense-i.co">info@sense-i.co</Link>.
        </p>
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