// Exponential acceleration and deceleration
export default function easeInOutExpo( t ) {

    if( t === 0 || t === 1 ) {
        return t;
    }

    const scaledTime = t * 2;
    const scaledTime1 = scaledTime - 1;

    if( scaledTime < 1 ) {
        return 0.5 * Math.pow( 2, 10 * ( scaledTime1 ) );
    }

    return 0.5 * ( -Math.pow( 2, -10 * scaledTime1 ) + 2 );

}
