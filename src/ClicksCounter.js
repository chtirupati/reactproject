import React from 'react';
import Hoc from './HigherOrderComponent';//step-2

const ClicksCounter = (props) => {//step-8

    const { counter, increment } = props

    return (
        <div className="container">
            <h3>Click Counter</h3>
            <button onClick={increment}>Increment {counter}</button>

        </div>
    );

}

export default Hoc(ClicksCounter, 0);//step-3