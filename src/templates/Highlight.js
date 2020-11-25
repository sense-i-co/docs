import React from 'react';

function Highlight(props) {
    const {children} = props;
  
    return (
      <span className="highlight">{children}</span>
    );
  }
  
  export default Highlight;