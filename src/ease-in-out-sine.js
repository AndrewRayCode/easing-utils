// Slight acceleration at beginning and slight deceleration at end
export default function easeInOutSine( t ) {
    return -0.5 * ( Math.cos( Math.PI * t ) - 1 );
}
