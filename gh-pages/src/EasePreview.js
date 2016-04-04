import React, { Component, PropTypes } from 'react';
import * as easing from '../../src/easing';

const points = new Array( 100 ).fill( 0 );

export default class App extends Component {

    static propTypes = {
        easingFunction: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {

        const { title, easingFunction } = this.props;

        return <div className="ease">
            <div style={{
                fontFamily: 'Georgia',
                fontSize: '20px',
                color: '#66305B'
            }}>
                { title }
            </div>
            <div
                style={{
                    display: 'inline-block',
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    borderRadius: '4px',
                    background: '#FFCFB4'
                }}
            >
                { points.map( ( zero, index ) =>
                    <div
                        className="dot"
                        style={{
                            left: `${ index }px`,
                            top: `${ easingFunction( index ) }px`,
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
