import React, { Component, PropTypes } from 'react';
import EasePreview from './EasePreview';
import * as easing from '../../src/easing';

export default class App extends Component {

    render() {

        return <div>
            { Object.keys( easing ).map( fnName =>
                <EasePreview
                    key={ fnName }
                    easingFunction={ easing[ fnName ] }
                    argCount={ easing[ fnName ].toString().match( /\w+ \w+\(([^)]+ )\)/)[ 1  ].split( ',' ).length }
                    title={ fnName }
                />
            ) }
        </div>;
    }

}
