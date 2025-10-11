import React from 'react';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import './Accordian.css';

const Accordian = (props) => {
  const { question, answer } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordian-element">
      <div className="faq-header" onClick={() => setIsActive(!isActive)}>
        <h4 className="faq-question">{question}</h4>
        {isActive ? (
          <div className="minus-icon">
            <FaMinus />
          </div>
        ) : (
          <div className="plus-icon">
            <FaPlus />
          </div>
        )}
      </div>
      {isActive ? <div className="faq-answer">{answer}</div> : null}
    </section>
  );
};

export default Accordian;
