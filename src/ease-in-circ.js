// Increasing velocity until stop
export default function easeInCirc( t ) {

    const scaledTime = t / 1;
    return -1 * ( Math.sqrt( 1 - scaledTime * t ) - 1 );

}
