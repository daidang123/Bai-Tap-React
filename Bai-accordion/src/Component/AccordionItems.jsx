import React, { useState } from 'react';

const AccordionItems = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleShow = () => {
    setShowContent(prevShowContent => !prevShowContent);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggleShow}>
        {title}
      </button>
      {showContent && <div className="accordion-body">{content}</div>}
    </div>
  );
};

export default AccordionItems;