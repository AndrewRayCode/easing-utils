// Fast acceleration, bounces to zero
export default function easeOutElastic( t, magnitude = 0.7 ) {

    const p = 1 - magnitude;
    const scaledTime = t * 2;

    if( t === 0 || t === 1 ) {
        return t;
    }

    const s = p / ( 2 * Math.PI ) * Math.asin( 1 );
    return (
        Math.pow( 2, -10 * scaledTime ) *
        Math.sin( ( scaledTime - s ) * ( 2 * Math.PI ) / p )
    ) + 1;

}
