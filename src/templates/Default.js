/**
 * The Default template represents the standard page layout for stand-alone pages
 * on the website. This layout consists of header banner and a set of subsequent 
 * sections, each containing a heading and associated content.
 * 
 * Properties (? = optional, * = required):
 * - metadata: Object (?)
 *   - title: String (?)              = The title of the page to display in the browser's tab (default: null - i.e. only site title, "Sense-i")
 *   - description: String (?)        = The description of the page used in search engine results (default: null - i.e. no description)
 * - banner: Object (?)
 *   - heading: String/Component (?)  = The heading to display in the banner at the top of the page (default: null - i.e. no banner)
 * - sections: Array (*)
 *   - heading: String/Component (?)  = The heading to display above the section (default: null - i.e. no heading)
 *   - content: Component (*)         = The elements to display for the section, which can include text paragraphs, images, videos, etc.
 */

import React from 'react';
import Layout from '@theme/Layout';
import "./styles.default.css";

function Template(props) {
  const {metadata, banner, sections} = props;
    
  return (
    <Layout
      title={metadata && metadata.title}
      description={metadata && metadata.description}
      wrapperClassName="template-default">
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