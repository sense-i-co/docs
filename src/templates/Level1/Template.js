import React from 'react';
import Layout from '@theme/Layout';
import Section from './Section';
import "./template.css";

function Template(props) {
  const {metadata, banner, sections} = props;
    
  return (
    <Layout
      title={metadata && metadata.title}
      description={metadata && metadata.description}
      wrapperClassName="template-level-1">
        {
          banner && banner.heading && 
          (<header className="hero hero--primary">
            <div className="container">
              <h1>{banner.heading}</h1>
            </div>
          </header>)
        }
        <main>
        {sections.map((props, idx) => (
          <Section key={idx} heading={props.heading}>
            {props.content}
          </Section>
        ))}
        </main>
    </Layout>
  );
}

export default Template;