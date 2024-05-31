import React, { useState, useEffect } from 'react';
import styles from '../styles/components/testimonial-carousel.module.scss';

interface Testimonial {
  text: string;
  clientName: string;
  date: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  speed: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials, speed }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(false);
      }, 700);
    }, speed);

    return () => clearInterval(interval);
  }, [speed, testimonials.length]);

  return (
    <div className={styles["testimonial-carousel"]}>
      <div className={`${styles.slide} ${fade ? styles.fadeOut : styles.fadeIn}`}>
        <p className={styles.text}>{testimonials[current].text}</p>
        <span className={styles.name}>{testimonials[current].clientName}</span>
        <span className={styles.date}>{testimonials[current].date}</span>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
