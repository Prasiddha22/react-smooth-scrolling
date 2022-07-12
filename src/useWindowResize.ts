import { useState, useEffect } from 'react';
export type Sizes = { width: number; height: number };
export function useWindowSize() {
  function getSize(): Sizes {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState<Sizes>(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
