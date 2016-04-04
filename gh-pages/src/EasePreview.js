import React, { Component, PropTypes } from 'react';
import * as easing from '../../src/easing';

const points = new Array( 1000 ).fill( 0 );

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
                            left: `${ index }px`,
                            top: `${ 100 - 100 * easingFunction( index * 0.001 ) }px`,
                        }}
                    />
                ) }
            </div>

            { easingFunction.length > 1 ?
                <label>
                    Magnitude
                    <input type="range" min={ 0 } max={ 2 } />
                </label>
            : null }

        </div>;

    }

}
