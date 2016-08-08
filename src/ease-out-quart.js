// Decelerating to zero velocity
export default function easeOutQuart( t ) {
    const t1 = t - 1;
    return 1 - t1 * t1 * t1 * t1;
}
