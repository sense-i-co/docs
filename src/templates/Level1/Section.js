import React from 'react';

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

export default Section;