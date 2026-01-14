import React, { useEffect, useMemo, useState, useCallback } from 'react';
import './ImageSlider.css';
import sliding1 from '../images/sliding1.jpg';
import sliding2 from '../images/sliding2.png';
import sliding3 from '../images/sliding3.png';
import sliding4 from '../images/sliding4.png';
import sliding5 from '../images/sliding5.png';
import sliding6 from '../images/sliding6.png';
import sliding7 from '../images/sliding7.jpg';
import sliding8 from '../images/sliding8.jpg';
import sliding9 from '../images/sliding9.jpg';
import sliding10 from '../images/sliding10.jpg';

const AUTO_INTERVAL_MS = 4000;

export default function ImageSlider() {
  const images = useMemo(() => [
    sliding1,
    sliding2,
    sliding3,
    sliding4,
    sliding5,
    sliding6,
    sliding7,
    sliding8,
    sliding9,
    sliding10,
  ], []);

  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const id = setInterval(goNext, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [goNext]);

  const preventContextMenu = (e) => e.preventDefault();
  const preventDrag = (e) => e.preventDefault();

  return (
    <section className="image-slider" id="gallery" onContextMenu={preventContextMenu}>
      <div className="slider-container">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`slide ${i === index ? 'active' : ''}`}
            loading="lazy"
            draggable={false}
            onDragStart={preventDrag}
            onContextMenu={preventContextMenu}
          />
        ))}
        <button className="nav prev" aria-label="Previous" onClick={goPrev}>
          ‹
        </button>
        <button className="nav next" aria-label="Next" onClick={goNext}>
          ›
        </button>
        <div className="dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
