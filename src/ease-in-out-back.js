// Slow movement backwards, fast snap to past finish, slow resolve to finish
export default function easeInOutBack( t, magnitude = 1.70158 ) {

    const scaledTime = t * 2;
    const scaledTime2 = scaledTime - 2;

    const s = magnitude * 1.525;

    if( scaledTime < 1) {

        return 0.5 * scaledTime * scaledTime * (
            ( ( s + 1 ) * scaledTime ) - s
        );

    }

    return 0.5 * (
        scaledTime2 * scaledTime2 * ( ( s + 1 ) * scaledTime2 + s ) + 2
    );

}
