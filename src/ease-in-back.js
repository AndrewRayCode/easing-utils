// Slow movement backwards then fast snap to finish
export default function easeInBack( t, magnitude = 1.70158 ) {

    const scaledTime = t / 1;
    return scaledTime * scaledTime * ( ( magnitude + 1 ) * scaledTime - magnitude );

}
