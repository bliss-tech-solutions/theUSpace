import React, { useRef, useEffect } from 'react';
import useViewportObserver from '../../hooks/useViewportObserver';
import './ViewportRevealImage.css';

const ViewportRevealImage = ({ 
    src, 
    alt, 
    revealId, 
    className = '', 
    imageClassName = '',
    children 
}) => {
    const containerRef = useRef(null);
    const { observeElement, isElementRevealed } = useViewportObserver();

    useEffect(() => {
        if (containerRef.current) {
            observeElement(containerRef.current);
        }
    }, [observeElement]);

    const isRevealed = isElementRevealed(revealId);

    return (
        <div 
            ref={containerRef}
            data-reveal-id={revealId}
            className={`ViewportRevealImageContainer ${className}`}
        >
            <div className={`ViewportRevealImageWrapper ${isRevealed ? 'revealed' : ''} ${imageClassName}`}>
                {src && <img src={src} alt={alt} />}
                {children}
            </div>
        </div>
    );
};

export default ViewportRevealImage;
