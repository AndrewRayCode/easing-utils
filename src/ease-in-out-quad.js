// Acceleration until halfway, then deceleration
export default function easeInOutQuad( t ) {
    return t < 0.5 ? 2 * t * t : - 1 + ( 4 - 2 * t ) * t;
}
