import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.once) {
          observer.unobserve(entry.target);
        }
      } else if (!options.once) {
        setInView(false);
      }
    }, {
      threshold: options.threshold || 0.1,
      ...options,
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
