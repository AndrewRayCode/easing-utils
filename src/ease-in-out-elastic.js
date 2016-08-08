// Slow start and end, two bounces sandwich a fast motion
export default function easeInOutElastic( t, magnitude = 0.65 ) {

    const p = 1 - magnitude;

    if( t === 0 || t === 1 ) {
        return t;
    }

    const scaledTime = t * 2;
    const scaledTime1 = scaledTime - 1;

    const s = p / ( 2 * Math.PI ) * Math.asin( 1 );

    if( scaledTime < 1 ) {
        return -0.5 * (
            Math.pow( 2, 10 * scaledTime1 ) *
            Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p )
        );
    }

    return (
        Math.pow( 2, -10 * scaledTime1 ) *
        Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p ) * 0.5
    ) + 1;

}
