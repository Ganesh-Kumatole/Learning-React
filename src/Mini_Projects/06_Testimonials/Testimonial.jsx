import React from 'react';
import { useState } from 'react';
import testimonials from './testimonialsData';
import './Testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="container">
      <div className="details">
        <div className="user-details">
          <img
            src={testimonials[currentIndex].avatar}
            alt="User Image"
            className="user-img"
          />
          <div className="user-otherDetails">
            <h4 className="user-name">{testimonials[currentIndex].name}</h4>
            <h5 className="user-role-company">{`${testimonials[currentIndex].role}, ${testimonials[currentIndex].company}`}</h5>
          </div>
        </div>
        <p className="user-msg">{testimonials[currentIndex].message}</p>
      </div>
      <div className="btns">
        <button
          className="prev-btn"
          onClick={() =>
            currentIndex === 0
              ? setCurrentIndex(testimonials.length - 1)
              : setCurrentIndex(currentIndex - 1)
          }
        >
          ←
        </button>
        <button
          className="next-btn"
          onClick={() =>
            currentIndex === testimonials.length - 1
              ? setCurrentIndex(0)
              : setCurrentIndex(currentIndex + 1)
          }
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
