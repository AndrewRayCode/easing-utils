import easeInBounce from './ease-in-bounce';
import easeOutBounce from './ease-out-bounce';

// Bounce in and bounce out
export default function easeInOutBounce( t ) {

    if( t < 0.5 ) {

        return easeInBounce( t * 2 ) * 0.5;

    }

    return ( easeOutBounce( ( t * 2 ) - 1 ) * 0.5 ) + 0.5;

}
