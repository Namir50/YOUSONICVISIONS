import { useEffect, useRef, useState, useCallback } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};

/**
 * useStaggerAnimation - Returns ref and isVisible, plus a helper
 * to get stagger class names for child elements.
 */
export const useStaggerAnimation = (threshold = 0.1) => {
    const [ref, isVisible] = useScrollAnimation(threshold);

    const getStaggerClass = useCallback((index, animClass = 'anim-fade-in-up') => {
        if (!isVisible) return 'anim-hidden';
        return `${animClass} stagger-${Math.min(index + 1, 8)}`;
    }, [isVisible]);

    return [ref, isVisible, getStaggerClass];
};

/**
 * useCountUp - Animates a number from 0 to target when visible.
 */
export const useCountUp = (target, duration = 1500) => {
    const [ref, isVisible] = useScrollAnimation(0.3);
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isVisible && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = Date.now();
            const timer = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.round(eased * target));
                if (progress >= 1) clearInterval(timer);
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isVisible, target, duration]);

    return [ref, count];
};
