import React, { Component, PropTypes } from 'react';
import * as easing from '../../src/easing';

const pointCount = 200;
const points = new Array( pointCount ).fill( 0 );

export default class App extends Component {

    static propTypes = {
        easingFunction: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {

        const { title, easingFunction } = this.props;

        return <div className="ease">
            <div className="ease-label">
                { title }
            </div>
            <div className="graph">
                { points.map( ( zero, index ) =>
                    <div
                        key={ index }
                        className="dot"
                        style={{
                            left: `${ index * ( 100 / pointCount ) }px`,
                            top: `${ 100 - 100 * easingFunction( index * ( 1 / pointCount ) ) }px`,
                        }}
                    />
                ) }
            </div>

            { easingFunction.length > 1 ?
                <label>
                    Magnitude
                    <br />
                    <input
                        type="range"
                        step={ 0.001 }
                        min={ 0 }
                        max={ 2 }
                    />
                </label>
            : null }

        </div>;

    }

}
