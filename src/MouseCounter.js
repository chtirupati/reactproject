
import React from 'react';
import Hoc from './HigherOrderComponent'; //step-2

const MouseCounter = (props) => {

    const { counter, increment } = props //step-8

    return (<>
        <div className="container">
            <h3>Mouse Over</h3>
            <button onMouseOver={increment}>Increment {counter}</button>

        </div>
    </>);

}

export default Hoc(MouseCounter,5);//step-3