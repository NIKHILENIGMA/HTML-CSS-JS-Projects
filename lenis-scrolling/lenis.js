// lenisScrolling.js
export function initializeLenisScrolling(duration, direction, gestureDirection, isSmooth, isSmoothTouch) {
    const lenis = new Lenis({
        duration: duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: direction, // vertical, horizontal
        gestureDirection: gestureDirection, // vertical, horizontal, both
        smooth: isSmooth,
        smoothTouch: isSmoothTouch,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}