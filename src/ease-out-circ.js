// Start fast, decreasing velocity until stop
export default function easeOutCirc( t ) {

    const t1 = t - 1;
    return Math.sqrt( 1 - t1 * t1 );

}
