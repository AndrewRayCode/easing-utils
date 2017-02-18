// Slight acceleration from zero to full speed
export default function easeInSine( t ) {
    return -1 * Math.cos( t * ( Math.PI / 2 ) ) + 1;
}
