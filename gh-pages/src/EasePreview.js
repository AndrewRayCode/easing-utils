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

        return <div>
            { fnName }
            <div
                style={{
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    borderRadius: '4px',
                    background: '#F5DEDC'
                }}
            >
                { points.map( ( zero, index ) =>
                    <div
                        style={{
                            position: 'absolute',
                            margin: '-1px 0 -1px 0',
                            borderRadius: '10px',
                            borderRadius: '10px',
                            background: '#121125',
                            left: `${ index }px`,
                            top: `${ easingFunction( index ) }px`,
                        }}
                    />
                ) }
            </div>
            
        </div>;

    }

}
