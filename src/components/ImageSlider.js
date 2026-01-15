import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import './ImageSlider.css';
import sliding2 from '../images/sliding/sliding2.png';
import sliding3 from '../images/sliding/sliding3.png';
import sliding4 from '../images/sliding/sliding4.png';
import sliding5 from '../images/sliding/sliding5.png';
import sliding8 from '../images/sliding/sliding8.jpg';
import sliding10 from '../images/sliding/sliding10.jpg';
import sliding14 from '../images/sliding/sliding14.jpg';
import matkor from '../images/sliding/matkor.jpeg';
import wedding1 from '../images/sliding/wedding1.jpeg';
import wedding2 from '../images/sliding/wedding2.jpeg';
import wedding3 from '../images/sliding/wedding3.jpeg';

const AUTO_INTERVAL_MS = 1500;

export default function ImageSlider() {
  const images = useMemo(() => [
    wedding1,
    wedding2,
    wedding3,
    matkor,
    sliding2,
    sliding3,
    sliding4,
    sliding5,
    sliding8,
    sliding10,
    sliding14,
  ], []);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [goNext, paused]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrev]);

  const preventContextMenu = (e) => e.preventDefault();
  const preventDrag = (e) => e.preventDefault();

  const onTouchStart = (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    setPaused(false);

    if (startX == null || startY == null) return;

    const touch = e.changedTouches && e.changedTouches[0];
    if (!touch) return;

    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    // Only treat mostly-horizontal gestures as swipe.
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0) goNext();
    else goPrev();
  };

  const relativeIndex = useCallback((i) => {
    const n = images.length;
    if (n === 0) return 0;

    // distance from current index, wrapped to (-n/2, n/2]
    let d = i - index;
    d = ((d % n) + n) % n;
    if (d > n / 2) d -= n;
    return d;
  }, [images.length, index]);

  // Only render a window around the active slide for performance
  const MAX_VISIBLE = 3;

  return (
    <section
      className="image-slider"
      id="gallery"
      onContextMenu={preventContextMenu}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="slider-container slider-container--3d">
        <div className="slider-3d" data-paused={paused ? 'true' : 'false'} aria-label="Gallery">
          {images.map((src, i) => {
            const d = relativeIndex(i);
            if (Math.abs(d) > MAX_VISIBLE) return null;

            const distanceClass = `d${d}`;

            return (
              <button
                key={src}
                type="button"
                className={`card-3d ${distanceClass} ${d === 0 ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Open slide ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  loading="lazy"
                  draggable={false}
                  onDragStart={preventDrag}
                  onContextMenu={preventContextMenu}
                />
              </button>
            );
          })}
        </div>

        <button className="nav prev" aria-label="Previous" onClick={goPrev}>
          ‹
        </button>
        <button className="nav next" aria-label="Next" onClick={goNext}>
          ›
        </button>

        <div className="dots" aria-label="Slides">
          {images.map((src, i) => (
            <button
              key={src}
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
