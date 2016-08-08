// Decelerating to zero velocity
export default function easeOutCubic( t ) {
    const t1 = t - 1;
    return t1 * t1 * t1 + 1;
}
