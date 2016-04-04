import React, { Component, PropTypes } from 'react';
import * as easing from '../../src/easing';

const playDurationMs = 1200;
const pointCount = 200;
const points = new Array( pointCount ).fill( 0 );

export default class App extends Component {

    static propTypes = {
        easingFunction: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        argCount: PropTypes.number.isRequired,
    }

    constructor( props ) {

        super( props );

        this.onMouseLeave = this.onMouseLeave.bind( this );
        this.onMouseEnter = this.onMouseEnter.bind( this );
        this._onAnimate = this._onAnimate.bind( this );

        this.state = {
            time: 0,
            magnitude: undefined
        };

    }

    _onAnimate( currentTimestamp ) {

        const { timestamp } = this.state;
        const startTime = timestamp || currentTimestamp;

        this.setState({
            timestamp: timestamp || currentTimestamp,
            playHead: pointCount * ( ( ( currentTimestamp - startTime ) / playDurationMs ) % 1 )
        });

        this.reqAnimId = window.requestAnimationFrame( this._onAnimate );

    }

    onMouseEnter() {

        this.setState({
            visible: true,
            playHead: 0
        }, () => {
            this.reqAnimId = window.requestAnimationFrame( this._onAnimate );
        })

    }

    onMouseLeave() {

        window.cancelAnimationFrame( this.reqAnimId );
        this.setState({
            timestamp: null,
            visible: false
        });

    }

    render() {

        const { title, easingFunction } = this.props;
        const { visible, playHead, magnitude } = this.state;

        return <div className="ease"
            onMouseEnter={ this.onMouseEnter }
            onMouseLeave={ this.onMouseLeave }
        >
            <div className="ease-label">
                { title }
            </div>
            <div className="graph">
                { visible ? <div
                    className="dot pointer"
                    style={{
                        top: `${ 100 - 100 * easingFunction( playHead * ( 1 / pointCount ), magnitude ) }px`,
                    }}
                /> : null }
                { visible ? <div
                    className="dot playhead"
                    style={{
                        left: `${ playHead * ( 100 / pointCount ) }px`,
                        top: `${ 100 - 100 * easingFunction( playHead * ( 1 / pointCount ), magnitude ) }px`,
                    }}
                /> : null }
                { points.map( ( zero, index ) =>
                    <div
                        key={ index }
                        className="dot"
                        style={{
                            left: `${ index * ( 100 / pointCount ) }px`,
                            top: `${ 100 - 100 * easingFunction( index * ( 1 / pointCount ), magnitude ) }px`,
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
                        value={ magnitude || 0 }
                        step={ 0.001 }
                        min={ 0 }
                        max={ 2 }
                    />
                </label>
            : null }

        </div>;

    }

}
