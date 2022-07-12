import React, { useEffect, useRef } from 'react';
import './SmoothScroll.css';

import { useWindowSize, Sizes } from './useWindowResize';

type Props = {
  children: React.ReactNode;
  ease: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
};

export function SmoothScroll({ children, ease = 4 }: Props) {
  //Hook to grab window size
  const size: Sizes = useWindowSize();

  var scrollEase = `0.0${ease.toString()}`;

  const scrollContainer = useRef<HTMLDivElement>(null);

  // Run scrollrender once page is loaded.
  useEffect(() => {
    // Configs
    const data = {
      ease: +scrollEase,
      current: 0,
      previous: 0,
      rounded: 0,
    };
    // Scrolling
    const skewScrolling = () => {
      //Set Current to the scroll position amount
      data.current = window.scrollY;
      // Set Previous to the scroll previous position
      data.previous += (data.current - data.previous) * data.ease;
      // Set rounded to
      data.rounded = Math.round(data.previous * 100) / 100;

      // Difference between

      //Assign skew and smooth scrolling to the scroll container
      if (scrollContainer.current)
        scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

      //loop vai raf
      requestAnimationFrame(() => skewScrolling());
    };
    requestAnimationFrame(() => skewScrolling());
  }, [scrollEase]);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current?.getBoundingClientRect().height
    }px`;
  };

  return (
    <div ref={scrollContainer} className="scroll">
      {children}
    </div>
  );
}
