import easeOutBounce from './ease-out-bounce';

// Bounce increasing in velocity until completion
export default function easeInBounce( t ) {
    return 1 - easeOutBounce( 1 - t );
}
