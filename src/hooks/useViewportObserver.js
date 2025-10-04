import { useState, useEffect, useRef, useCallback } from 'react';

// Custom hook for viewport reveal animation
const useViewportReveal = () => {
  const [revealedElements, setRevealedElements] = useState(new Set());

  const revealElement = useCallback((elementId) => {
    setRevealedElements(prev => new Set([...prev, elementId]));
  }, []);

  const resetElement = useCallback((elementId) => {
    setRevealedElements(prev => {
      const newSet = new Set(prev);
      newSet.delete(elementId);
      return newSet;
    });
  }, []);

  const isElementRevealed = useCallback((elementId) => {
    return revealedElements.has(elementId);
  }, [revealedElements]);

  return {
    revealElement,
    resetElement,
    isElementRevealed
  };
};

// Global viewport observer hook
const useViewportObserver = () => {
  const { revealElement, resetElement, isElementRevealed } = useViewportReveal();
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.dataset.revealId;
          if (entry.isIntersecting) {
            revealElement(elementId);
          } else {
            // Optional: reset when out of view
            // resetElement(elementId);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [revealElement, resetElement]);

  const observeElement = useCallback((element) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  }, []);

  const unobserveElement = useCallback((element) => {
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
    }
  }, []);

  return {
    observeElement,
    unobserveElement,
    isElementRevealed
  };
};

export default useViewportObserver;
