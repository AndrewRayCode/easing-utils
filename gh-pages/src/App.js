import React, { Component, PropTypes } from 'react';
import EasePreview from './EasePreview';
import * as easing from '../../src/easing';

// Which functions take a magnitude param?
const magnitudes = {
    easeInBack: true,
    easeOutBack: true,
    easeInOutBack: true,
    easeInElastic: true,
    easeOutElastic: true,
    easeInOutElastic: true,
}

export default class App extends Component {

    render() {

        return <div>
            { Object.keys( easing ).map( fnName =>
                <EasePreview
                    key={ fnName }
                    easingFunction={ easing[ fnName ] }
                    hasMagnitude={ magnitudes[ fnName ] }
                    title={ fnName }
                />
            ) }
        </div>;
    }

}
