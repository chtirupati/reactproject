import React, { Component } from 'react';
import Parent from './Parent.js'



class Reactclasscomponent extends Component {
    constructor() {
        super();

    }
    render() {
        return (<>
            <div className="container">
                <h1>Hello React Class Component</h1>
                <Parent/>
               
            </div>
          
        </>);
    }
}

export default Reactclasscomponent;


