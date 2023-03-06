import { useEffect } from 'react';

const ScrollDetector = ({ id, onScroll }: { id: string, onScroll: Function }) => {
  useEffect(() => {
    const target = document.querySelector(`#${id}`) as Element;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Le seuil indique le pourcentage de l'élément visible avant que l'observer ne déclenche onScroll
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onScroll(true);
        observer.unobserve(target);
      }
    }, options);
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [id, onScroll]);

  return null;
};

export default ScrollDetector;
