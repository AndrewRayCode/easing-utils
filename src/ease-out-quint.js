// Decelerating to zero velocity
export default function easeOutQuint( t ) {
    const t1 = t - 1;
    return 1 + t1 * t1 * t1 * t1 * t1;
}
