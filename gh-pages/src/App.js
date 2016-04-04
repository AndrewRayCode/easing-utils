import React, { Component, PropTypes } from 'react';
import EasePreview from './EasePreview';
import * as easing from '../../src/easing';

export default class App extends Component {

    render() {
        return <div>
            { Object.keys( easing ).map( fnName =>
                <EasePreview
                    easingFunction={ easing[ fnName ] }
                    title={ fnName }
                />
            ) }
        </div>;
    }

}
