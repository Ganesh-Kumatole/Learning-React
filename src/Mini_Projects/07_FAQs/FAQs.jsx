import React from 'react';
import Accordian from './Accordian';
import faqs from './FAQsData';
import './FAQs.css';

const FAQs = () => {
  return (
    <section className="faqs-container">
      <h2 className="faq-heading">FAQs — Frequently Asked Questions... </h2>
      <div className="accordians-container">
        {faqs.map(({ question, answer }) => (
          <Accordian question={question} answer={answer} key={Math.random()} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
