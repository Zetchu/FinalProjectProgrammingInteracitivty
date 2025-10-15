import { useCallback, useEffect, useRef } from 'react';

export default function useStaggeredFadeIn({
  selector = '.fade-item',
  threshold = 0.15,
  rootMargin = '0px 0px -5% 0px',
  baseDelay = 120,
  once = true,
}) {
  const containerRef = useRef(null);

  const ref = useCallback((node) => {
    containerRef.current = node;
    if (!node) return;

    const nodes = containerRef.current?.querySelectorAll(selector);
    if (!nodes?.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    nodes.forEach((node, i) => {
      node.style.transitionDelay = `${i * baseDelay}ms`;
      io.observe(node);
    });

    return () => io.disconnect();
  }, []);

  return ref;
}
