import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super();
        // console.log(props);
    }
    render() {
        const {id,n,e,m,city} = this.props;
        return (<>
            <div className="mt-5">
                <h5>Child class component</h5>
                {/* {this.props.n}-{this.props.e}-{this.props.m} */}
                {n}-{e}-{m} -{id}-{city}
            </div>
        </>);
    }
}

export default Child;