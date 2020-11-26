import React from 'react';
import Layout from '@theme/Layout';
import "./styles.bannerpage.css";

function Template(props) {
  const {metadata, banner, sections} = props;
    
  return (
    <Layout
      title={metadata && metadata.title}
      description={metadata && metadata.description}
      wrapperClassName="template-bannerpage">
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

function Section(props) {
  const {heading, children} = props;

  return (
    <section>
      <div className="container">
        {heading && (<h2>{heading}</h2>)}
        {children}
      </div>
    </section>
  );
}

export default Template;