// Fast snap to backwards point then slow resolve to finish
export default function easeOutBack( t, magnitude = 1.70158 ) {

    const scaledTime = ( t / 1 ) - 1;

    return (
        scaledTime * scaledTime * ( ( magnitude + 1 ) * scaledTime + magnitude )
    ) + 1;

}
