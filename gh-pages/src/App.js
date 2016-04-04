import React, { Component, PropTypes } from 'react';
import * as easing from '../src/easing';

export default class App extends Component {

    render() {
        console.log(easing, Object.keys(easing));
        return <div>
            Hello world!
        </div>;
    }

}
